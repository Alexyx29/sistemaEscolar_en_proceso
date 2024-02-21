import Search from "@/components/items/search";
import UserIcon from "@/components/items/users/userIcon";
import Modal from "@/layout/modal";
import Save from "../btns/save";
import Select from "@/components/form/select";
import { useEffect, useState } from "react";
import { hideModal, setItemApi } from "@/components/useForm";
import { getActualSystem } from "@/components/useLanguage";
import { useRef } from "react";
import Spinner from "@/assets/icons/spinner";
import Border from "@/components/items/border";

const UsersList = ( { id, action= () => {}, prefix = '', editable = true, extra = '', openModal = true, afterClose = () => {}, showFilterJob = true, showSearch = true, idModal="", type = '', addTypeInAdd = false, onlyOne = false, ignoring = [], showJob = false }) => {
    const [ text, setText ] = useState({title: '', select: '', search: '', empty: ''})
    const [ users, setUsers ] = useState([]);
    const [ usersFilter, setUsersFilter ] = useState([]);
    const [ usersStatus, setUsersStatus ] = useState([]);
    const [ selectedUsers, setSelectedUsers] = useState([]);
    const [ jobs, setJobs ] = useState([])
    const system_selected = getActualSystem();
    const scrollNumber = useRef();
    const [ load, setLoad ] = useState(true)
    const [ draw, setDraw ] = useState(0)

    const showMore = (su, search = null) => {
        if(load){
            setLoad(false)
            let f = new FormData();
            f.append('systemUid', system_selected.token);
            f.append('id', id);
            let url = (type) ? `${prefix}/list-contacts/${type}/${scrollNumber.current}` : `${prefix}/list-contacts/${scrollNumber.current}`;
            if(search || showJob){
                url += `/${search}`
            }
            setItemApi(url, f, (response) => {
                const fullUsers = response.items.users.filter(s => !ignoring.includes(s.id));
                if(scrollNumber.current == 1){
                    setText(response.text)
                    setJobs(response.jobs);
                    setUsers(fullUsers);
                    setUsersFilter(fullUsers.filter(s => !s.active ? 1 : 0));
                    if(response.items.selected.length){
                        setSelectedUsers(response.items.selected.filter(s => s.active ? 1 : 0));
                    } else {
                        setSelectedUsers([]);
                    }
                } else {
                    let u = fullUsers;
                    let s = u.filter(e => su.find(r => r.id == e.id) === undefined);
                    setUsers(s);
                    setUsersFilter(s.filter(r => !r.active ? 1 : 0));
                }
                setLoad(true)
                console.log('hi')
            }, (error) => { setLoad(true) });
        }
    }
    
    useEffect(() => {
        let userlist = document.querySelector(`#usersModal${idModal} .userlist`)
        if(openModal){
            setTimeout(()=>{userlist.addEventListener('scroll', onScroll)}, 3500);
            showMore(selectedUsers);
        } else {
            setUsers([]);
            setUsersFilter([]);
            setSelectedUsers([]);
            scrollNumber.current = 1;
            userlist.removeEventListener('scroll', onScroll);
            setLoad(true)
        }
    }, [ id, openModal ]);

    const filterData = (e) => {
        let value = e.target.value;
        console.log(value, load);
        if(value){
            /* let results = users.filter(s => s.name ? s.name.toLowerCase().includes(value) : 0);
            setUsersFilter(results); */
            setLoad(true)
            scrollNumber.current = 1;
            showMore([], value);
        } else {
            setUsersFilter(users);
        }
    }
 
    const addChecks = (e) => {
        const userId = e.target.value;
        const userIndex = users.findIndex((user) => user.id == userId);
        const user = users[userIndex];

        if(onlyOne){
            if(selectedUsers.length > 0){
                setSelectedUsers([])
                // usersFilter.push(selectedUsers[0]);
                const u = users.filter(us => us.id != user.id)
                setTimeout(()=> {
                    u.sort((a, b) => {return a.name - b.name})
                    setUsersFilter(u);
                }, 200)
            }
            setTimeout(()=> {
                setSelectedUsers([user])
            }, 200)
        } else {
            setSelectedUsers((selectedUsers) =>
            selectedUsers.includes(user)
                ? selectedUsers.filter((selectedUser) => selectedUser !== user)
                : [...selectedUsers, user]
            );
        }
        usersFilter.splice(userIndex, 1);
        setUsersFilter(usersFilter);
        selectUsersStatus(e);
        setDraw(draw+1)
    }

    const removeChecks = (e) => {
        const userId = e.target.value;
        
        if(onlyOne){
            usersFilter.push(selectedUsers[0]);
            setSelectedUsers([])
            setTimeout(()=> {
                usersFilter.sort((a, b) => {return a.name - b.name})
                setUsersFilter(usersFilter);
                
                const userIndex = usersFilter.findIndex((user) => user.id == userId);
                const user = usersFilter[userIndex];
                setSelectedUsers([user])
            }, 200)
        } else {
            const user = selectedUsers.find((user) => user.id == userId);
            setSelectedUsers((selectedUsers) =>
                selectedUsers.filter((selectedUser) => selectedUser != user)
            );
            usersFilter.push(user);
            
            setUsersFilter(usersFilter);
        }
        selectUsersStatus(e);
        setDraw(draw+1)
    }

    const selectUsersStatus = (e) => {
        let array = usersStatus;
        const event = e.target.checked;
        const value = e.target.value;

        const arrayItem = {
            id: value,
            value: event
        }

        usersStatus.map((item, index) => {
            if(item.id == value) delete(array[index]);
        })

        array.push(arrayItem);
        setUsersStatus(array.filter(Boolean));
    }

    const close = () => {
        if(editable){
            let f = new FormData();
            const status = JSON.stringify(usersStatus);
            f.append('systemUid', system_selected.token);
            f.append('id', id);
            f.append('data', status);
            const url = (addTypeInAdd) ? `${prefix}/${type}/add-contacts` : `${prefix}/add-contacts`
            setItemApi(url, f, (response) => {
                action(selectedUsers);
                afterClose();
            }, (error) => { });

        } else {
            afterClose();
            action(usersStatus, selectedUsers);
        }
        afterClose();
        hideModal(`usersModal${idModal}`);
    }

    const options = <>
       {/* <Add action={addItem} send={false} />
        <Delete action={removeItem} send={false} />*/}
        <Save action={close} send={false} />
    </>;

    const filterJob = (e) => {
        let value = e.target.value;
        if(value){
            let results = users.filter(s => s.id_job == value);
            setUsersFilter(results);
        } else {
            setUsersFilter(users);
        }
    }

    const onScroll = e => {
        const div2 = document.querySelector(`#usersModal${idModal} .userSelect`)
        const scrollTop = e.target.scrollTop + div2.scrollHeight + 83;
        const div = document.querySelector(`#usersModal${idModal} .userlist`)
        const parent = div.parentNode;
        const scrollHeight = parent.scrollHeight
        if (scrollTop >= (scrollHeight*scrollNumber.current)) {
            //setScrollNumber(scrollNumber+1)
            scrollNumber.current++;
            showMore(selectedUsers);
        }
    }

    return (
        <>
            <Modal id={`usersModal${idModal}`} title={text.title} size="489px" options={options} afterClose={afterClose} padding="pl-[44px] pr-[54px] pt-4 pb-10">
                <div className="text-center m-auto font-open text-[13px] text-gray_alter pt-4">
                    <div className="mb-8 userSelect pr-[44px]">
                        { selectedUsers.map((user, index) => {
                            return (
                                <UserIcon key={index} id={"checkbox-user-selected-"+user.id } value={user.id} checked={true} index={index} removeChecks={removeChecks} image={user.image} name={user.name} lastname={user.lastname} showIcon={true} job={user.job} symbol="-" />
                            )
                        } )}
                    </div>
                    { showSearch && (
                            <div className="flex items-center justify-center mb-10 pr-[44px]">
                                <Search search={text.search} padding="py-[8px]" evtSearch={filterData}/>
                            </div>
                        )}
                    { showFilterJob && (
                        <div className="flex items-center justify-center mt-4 pr-[44px]">
                            <Select label="" hiddenMargin={true} id='job_from' name="job_from" disabled={false} error="" emptyItem={text.select} isObjectList={true} options={jobs} add={false} text_add="" styles="rounded-full" change={filterJob} />
                        </div>
                    )}
                    { extra != '' && (
                        <h3 className="text-left text-lg font-open text-libellum-title pr-[44px]">{extra}</h3>
                    )}
                    <div className="userlist max-h-[250px] overflow-auto">
                        { usersFilter.map((user, index) => {
                            return (
                                <UserIcon key={index} id={"checkbox-user-search-"+user.id } value={user.id} checked={false} index={index} removeChecks={addChecks} image={user.image} name={user.name} lastname={user.lastname} showIcon={true} job={user.job} symbol="+" showJob={showJob}/>
                            )
                        } )}
                        { usersFilter.length === 0 && (
                            <div className="text-center text-dark-blue pt-5">{text.empty}</div>
                        )}
                        { !load && (
                            <Spinner />
                        )}
                    </div>
                    <input type="hidden" value={draw} />
                </div>
            </Modal>
        </>
    )
}

export default UsersList;