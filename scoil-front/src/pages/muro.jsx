import bgScoil from '../assets/background/bg_1.jpg';
import LayoutTeacher from "@/layout/layaoutScoilTeacher";
import AddBtn from "@/components/form/agenda/btns/add";
import UserItem from "@/components/items/users/item";
import Publish from "@/components/muro/publish";
import { getTextApi, setItemApi, showModal } from "@/components/useForm";
import { getActualSystem } from "@/components/useLanguage";
import { getItem } from "@/components/useStorage";
import moment from "moment";
import { useEffect } from "react";
import { useState } from "react";


const Muro = (categoryInitial=1,  buttons=false,) => {
    const [ actualPerson, setActualPerson ] = useState(null)
    const l = getItem('logged');
    const [ text, setText ] = useState({ title: 'Muro', btn_new: 'Nuevo', btn_confirm: "Sí, eliminar", btn_deny: "No, conservar", btn_success: "Entendido", msj_delete: '¿Estás seguro de eliminar la publicación?' });
    const [ modalPublicacion, setModalPublicacion ] = useState(false)
    const prefix = 'modules/muro';
    const system_selected = getActualSystem();
    const [ publicaciones, setPublicaciones ] = useState([]);
    const [ page, setPage] = useState(1);
    const [ idPublish, setIdPublish ] = useState(0);
    const [ deleteProcess, setDeleteProcess ] = useState(false);
    const [ successIcon, setSuccessIcon ] = useState(false);
    const [ messageSuccess, setMessageSuccess ] = useState(<></>);
    const [ userList, setUserList ] = useState([]);
    const [ htmlUsers, setHtmlUsers ] = useState(<></>)
    const [ idEvent, setIdEvent ] = useState(0);
    const [ modalEvento, setModalEvento ] = useState(false);
    const hoy = moment().add(1, 'day');
    const [ fromDay, setFromDay ] = useState('');
    const [ toDay, setToDay ] = useState('');
    const [ inputTitle, setInputTitle ] = useState('');
    const [ inputColor, setInputColor ] = useState('');
    const [ userSelected, setUserSelected ] = useState(0)
    const [ loadPubs, setLoadPubs ] = useState(true);

    const showPublication = () => {
        setModalPublicacion(true);
        showModal('publicacionModal')
    }

    const config = <>
        <AddBtn action={showPublication} send={false} title={text.btn_new} />
    </>

    useEffect(() => {
        if(l){
            const user = JSON.parse(l)
            setActualPerson({name: user.name, lastname: user.lastname, rol: user.job, image: user.image});
        }
    }, [l])

    const updateList = r => {
        setPage(1);
        if(r.items){
            setPublicaciones(r.items)
            /* setUserList(r.users) */
        } else {
            setPublicaciones(r)
        }
    }

    useEffect(() => {
        if(page && !modalPublicacion && system_selected){
            setLoadPubs(true);
            getTextApi(`${prefix}/list/${page}/${userSelected}/`, r => {
                setPublicaciones(r.items);
                setUserList(r.users)
                setLoadPubs(false);
            }, system_selected.token, err => {setLoadPubs(false);});
        }
    }, [ page, userSelected, modalPublicacion ]);

    const editPublish = id => {
        setIdPublish(id)
        showPublication();
    }

    const deleteAction = id => {
        setIdPublish(id)
        showModal('deleteModalPublication')
    }

    const showConfirmModal = (message, icon) => {
        setMessageSuccess(message)
        setSuccessIcon(icon)
        showModal('confirmModalPost')
    }

    const deletePost = () => {
        if(!deleteProcess){
            setDeleteProcess(true);
            const formData = new FormData();
            formData.append('publication', idPublish)
            formData.append('systemUid', system_selected.token);
            formData.append('page', page)
            setItemApi(`${prefix}/delete`, formData, r => {
                setDeleteProcess(false);
                setPublicaciones(r.list);
                showConfirmModal('Has eliminado la publicación', true);
            }, err => {
                setDeleteProcess(false);
            });
        }
    }

    const afterClosePub = () => {
        setModalPublicacion(false);
        setIdPublish(0);
        setPage(1)
        getTextApi(`${prefix}/liberate/`, r => {}, system_selected.token, err => {})
    }

    const filterUser = id => {
        setUserSelected(id);
    }

    useEffect(() => {
        if(userList.length){
            const html = <div className="flex flex-wrap items-start justify-start gap-y-2">
                { userList.map((u, i) => {
                    if(u.name){
                        const bg = (u.id == userSelected) ? 'bg-chat-bg' : 'bg-white'
                        return <div className={`px-9 w-full cursor-pointer py-4 ${bg}`} key={i} onClick={e => {filterUser(u.id)}}><UserItem name={u.name} lastname={u.lastname} job={u.rol} image={u.image} size="45px" /></div>
                    }
                }) }
            </div>;

            setHtmlUsers(html)
        } else {
            setHtmlUsers(<></>)
        }
    }, [ userList.length, userSelected ])

    const loadUsers = id => {
        /* getTextApi(`${prefix}/get-post/${id}/`, r => {
            setUserList(r);
        }, system_selected.token, err => {}); */
    }

    const calendarAction = id => {
        setIdEvent(id);
        showModal('addEvent')
        getTextApi(`${prefix}/get-event/${id}/`, r => {
            setInputTitle(r.name)
            setInputColor(r.color)
            setFromDay(r.date_range_from)
            setToDay(r.date_range_to)
            setModalEvento(true);
        }, system_selected.token, err => {});
    }

    return(
        <>
            <div className="flex w-[full] h-[100vh]" style={{backgroundImage: `url(${bgScoil.src})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                {/* Contenido dentro de Layout*/}
                <LayoutTeacher botonSeleccionado={'wall'} widthBody="w-[1295px]" stylesInput= {'w-[878px] '} >
                    <div className="flex grow flex-col gap-[30px] min-w-min ">
                        <div className={'flex flex-wrap gap-[30px]'}>
                            {publicaciones.map((publicacion, index) => {
                                // return (publicacion) ? <Publish key={index} info={publicacion} edit={editPublish} deleteAction={deleteAction} loadParent={loadUsers} calendarAction={calendarAction} /> : <></>
                                return <Publish key={index} info={publicacion} edit={editPublish} deleteAction={deleteAction} loadParent={loadUsers} calendarAction={calendarAction} />
                            })}
                        </div>
                    </div>
                </LayoutTeacher>                                  
            </div>        
        </>
    );
}

export default Muro;