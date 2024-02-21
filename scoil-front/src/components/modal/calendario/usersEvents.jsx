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
import UserSwitch from "@/components/items/users/userSwitch";

const UsersEvents = ( { id, action= () => {}, prefix = '', editable = true, extra = '', openModal = true, afterClose = () => {}, showFilterJob = true, showSearch = true, idModal="", type = '', addTypeInAdd = false, items = [] }) => {
    const [ text, setText ] = useState({title: '', select: '', search: '', empty: ''})
    const [ users, setUsers ] = useState([]);
    const [ usersFilter, setUsersFilter ] = useState([]);
    const [ usersStatus, setUsersStatus ] = useState([]);
    const [ selectedUsers, setSelectedUsers] = useState([]);
    const [ jobs, setJobs ] = useState([])
    const system_selected = getActualSystem();
    const scrollNumber = useRef();
    const [ load, setLoad ] = useState(true)

    const showMore = () => {
        setLoad(true)
        let f = new FormData();
        f.append('systemUid', system_selected.token);
        f.append('id', id);
        let url = (type) ? `${prefix}/list-contacts/${type}/${scrollNumber.current}` : `${prefix}/list-contacts/${scrollNumber.current}`;
        setItemApi(url, f, (response) => {
            if(scrollNumber.current == 1){
                const u = response.users.map(us => {
                    us.active = items.includes(us.id);
                    return us;
                })
                setText(response.text)
                setJobs(response.jobs);
                setUsers(u);
                setUsersFilter(response.users);
            } else {
                const u = response.users.map(us => {
                    us.active = items.includes(us.id);
                    return us;
                })
                setUsers(u);
                setUsersFilter(u);
            }
            setLoad(false)
        }, (error) => { });
    }
    useEffect(() => {
        let userlist = document.querySelector(`#usersModal${idModal} .userlist`)
        if(openModal){
            setTimeout(()=>{userlist.addEventListener('scroll', onScroll)}, 3500);
            setUsersStatus(items)
            showMore();
        } else {
            setUsers([]);
            setUsersFilter([]);
            scrollNumber.current = 1;
            userlist.removeEventListener('scroll', onScroll);
            setLoad(true)
        }
    }, [ id, openModal ]);

    const filterData = (e) => {
        let value = e.target.value;
        if(value){
            let results = users.filter(s => s.name ? s.name.toLowerCase().includes(value) : 0);
            setUsersFilter(results);
        } else {
            setUsersFilter(users);
        }
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
            action(usersStatus);
        }
        afterClose();
        hideModal(`usersModal${idModal}`);
    }

    const options = <>
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
        const scrollTop = e.target.scrollTop + 83;
        const div = document.querySelector(`#usersModal${idModal} .userlist`)
        const parent = div.parentNode;
        const scrollHeight = parent.scrollHeight
        
        if (scrollTop >= (scrollHeight*scrollNumber.current)) {
            //setScrollNumber(scrollNumber+1)
            scrollNumber.current++;
            showMore();
        }
    }

    const updateStatus = (check, value) => {
        if(check){
            const u = usersStatus;
            u.push(value);
            setUsersStatus(u)
        } else {
            const u = usersStatus.filter(i => i != value);
            setUsersStatus(u)
        }
    }

    return (
        <>
            <Modal id={`usersModal${idModal}`} title={text.title} size="489px" options={options} afterClose={afterClose} padding="pl-[44px] pr-[95px] py-5">
                <div className="text-center m-auto font-open text-[13px] text-gray_alter pt-4">
                    { showFilterJob && (
                        <div className="flex items-center justify-center mt-4">
                            <Select label="" hiddenMargin={true} id='job_from' name="job_from" disabled={false} error="" emptyItem={text.select} isObjectList={true} options={jobs} add={false} text_add="" styles="rounded-full" change={filterJob} />
                        </div>
                    )}
                    { extra != '' && (
                        <h3 className="text-left text-lg font-open text-libellum-title">{extra}</h3>
                    )}
                    { showSearch && (
                        <div className="flex items-center justify-center mb-10">
                            <Search search={text.search} padding="py-[8px]" evtSearch={filterData}/>
                        </div>
                    )}
                    <div className="max-h-[300px] h-fit overflow-y-auto mb-8 userlist">
                        { usersFilter.map((user, index) => {
                            return (
                                <UserSwitch id="user_modal" value={user.id} image={user.image} name={user.name} lastname={user.lastname} key={index} job={user.job} checked={user.active} updateType={updateStatus} />
                            )
                        } )}
                        { usersFilter.length === 0 && (
                            <div className="text-center text-dark-blue pt-5">{text.empty}</div>
                        )}
                        { load && (
                            <Spinner />
                        )}
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default UsersEvents;