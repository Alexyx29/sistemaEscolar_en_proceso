import bgScoil from '../assets/background/bg_1.jpg';
import LayoutTeacher from "@/layout/layaoutScoilTeacher";
import ImageBase from "@/components/items/imageBase";
import { formateDateHourFunc } from "@/components/useFormats";
import { getItem } from "@/components/useStorage";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faChevronDown,faDownload,faImage, faPaperclip, faPlus, faTrash, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import Head from "next/head";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Button from "@/components/form/agenda/btnAgenda";
import { getActualSystem } from "@/components/useLanguage";
import { getAttributes, getTextApi, hideModal, setItemApi, showModal } from "@/components/useForm";
import UsersList from "@/components/modal/users/list";
import GroupModal from "@/components/modal/chat/group";
import { dictionaryIcons, dictionaryTypes } from "@/components/data/icons";
import Message from "@/components/modal/message";

const Avatar = ({ user, is_group = false }) => {

    return <div className="h-[61px] w-[61px] items-center bg-btn-image rounded-[50%] text-white flex text-sm font-medium justify-center relative">
        { is_group && (
            <span className={`w-full h-full rounded-full text-white flex items-center justify-center flex-row leading-none p-1`} style={{backgroundColor: '#00A3FF', fontSize: '32px'}}>
                <FontAwesomeIcon icon={faUserGroup} />
            </span>
        )}
        { !is_group && (
            <ImageBase image={user.image} name={user.name} lastname={user.lastname} size="64px" sizeText="35px"/>
        )}
        {/* <span className={((user.active) ? 'bg-green-btn' : 'bg-gray-mutted') + " status border-2 bottom-0 absolute right-0 h-[17px] w-[17px] rounded-full inline-block"}></span> */}
    </div>;
}

const ItemList = ({user, time, text, read = false, loadChat = () => {}, id, actual = 0, newMsj = 0, is_group = false, name = ''}) => {
    return <li className={((actual == id) ? 'border-t border-l border-b border-chat-border' : '') + " rounded relative pl-4"}>
        <a className="items-center cursor-pointer flex py-3 pr-3 w-full flex-wrap" onClick={e => {loadChat(id)}}>
            { is_group && (
                <span className={`w-16 h-16 rounded-full text-white flex items-center justify-center`} style={{backgroundColor: '#00A3FF', fontSize: '32px'}}><FontAwesomeIcon icon={faUserGroup} /></span>
            )}
            { !is_group && (
                <Avatar user={user} />
            )}
            <div className="chat-info ml-4 w-[calc(100%-80px)]">
                <div className="chat-from items-center flex justify-between max-w-full flex-wrap">
                    <div className="text-libellum-title text-[0.9375rem] mb-0 font-medium overflow-hidden text-ellipsis whitespace-nowrap max-w-[calc(100%-65px)]">
                        { is_group && (
                            <>{name}</>
                        )}
                        { !is_group && (<>{user.name} {user.lastname}</>)}
                    </div>
                    <div className="text-body-chat text-[12px] whitespace-nowrap">{time}</div>
                </div>
                <div className="chat-context items-center flex justify-between">
                    <div className="text text-body-chat text-[13px] overflow-hidden whitespace-nowrap max-w-[calc(100%-25px)] text-ellipsis">{text}</div>
                    { newMsj > 0 && (
                        <div className="bg-red-btn text-white text-[10px] font-bold min-w-[14px] px-2 text-center rounded-full">{newMsj}</div>
                    )}
                </div>
            </div>
        </a>
    </li>
}

const Chat = (categoryInitial=1,  buttons=false,) => {
    const [ text, setText] = useState({title: '', search: '', title_fav: '', title_msj: ''})
    const [ user, setUser ] = useState({image: null, name: '', lastname: ''})
    const [ favorits, setFavorits ] = useState([])
    const [ message, setMessages ] = useState([]);
    const [ actualMessage, setActualMessage] = useState(null);
    const [ conversacion, setConversacion ] = useState([])
    const [ actualPerson, setActualPerson ] = useState(null)
    const divConversation = useRef(null)
    const input = useRef(null)
    const [ drawChat, setDrawChat ] = useState(0)
    const [ page, setPage ] = useState(1)
    const system_selected = getActualSystem();
    const prefix = 'modules/chat';
    const [ modalUsers, setModalUsers ] = useState(false);
    const [ chatId, setChatId ] = useState(0)
    const idModal = 'Chat';
    const [ pageChat, setPageChat ] = useState(1)
    const [ intervalConversation, setIntervalConversation ] = useState(null);
    const [ readyChats, setReadyChats ] = useState(true)
    const [ readyConversation, setReadyConversation ] = useState(true)
    const [ localUser, setLocalUser ] = useState({})
    const [ newMessages, setNewMessages ] = useState([])
    const [ infoChat, setInfoChat ] = useState({name: '', is_group: false});
    const [ modalInvitados, setModalInvitados ] = useState(false);
    const idModalInvitado = 'Invitados';
    const [ personsInChat, setPersonsInChat ] = useState([]);
    const inputFile = useRef(null);
    const [ fileName, setFileName ] = useState('')
    const [ accept, setAccept] = useState(dictionaryTypes());
    const [ extension, setExtension ] = useState('')
    const urlIcons = process.env.IMAGE_URL;
    const [ successIcon, setSuccessIcon ] = useState(true);
    const [ messageAlert, setMessageAlert ] = useState('');
    const paramsFiles = getAttributes();
    const urlFiles = process.env.API_URL;

    const checkForNewConversation = () => {
        if(readyChats){
            setReadyChats(false)
            getTextApi(`${prefix}/list/${page}/`, r => {
                setMessages(r.chats);
                setReadyChats(true)
            }, system_selected.token, err => {});
        }
        
    }

    const updateConversation = (items) => {
        const c = conversacion;
        items.forEach(i => {
            c.push(i);
        })
        console.log(conversacion);
        setConversacion(c);
        setDrawChat(drawChat+1)
        setTimeout(()=>{divConversation.current.scrollIntoView({behavior: 'instant', block: "end"})}, 500);
    }

    const checkForNewMessage = () => {
        if(readyConversation){
            setReadyConversation(false)
            const form = new FormData();
        
            form.append('systemUid', system_selected.token);
            form.append('id', chatId);
            setItemApi(`${prefix}/lastest-message`, form, r => {
                if(r.length){
                    //updateConversation(r);
                    setNewMessages(r);
                }
                setReadyConversation(true)
            }, er => {});
        }
    }

    useEffect(() => {
        if(newMessages.length > 0){
            updateConversation(newMessages);
            setNewMessages([])
        }
    }, [ newMessages.length ]);

    useEffect(() => {
        const l = getItem('logged');
        if(l){
            const u = JSON.parse(l)
            setLocalUser(u);
            setUser({image: u.image, name: u.name, lastname: u.lastname});

            getTextApi(`${prefix}/initial/`, r => {setText(r.text)}, system_selected.token, err => {});

            // const intervalId = setInterval(checkForNewConversation, 20000);
        } else {
            // window.location.href = '/'
        }

        /* return () => {
            clearInterval(intervalId);
        } */
    }, [ ]);

    useEffect(() => {
        if(system_selected){
            if(page){
                checkForNewConversation();
            }
        }
    }, [ page ]);

    useEffect(() => {
        if(intervalConversation){
            clearInterval(intervalConversation)
        }
        setIntervalConversation(null);
        if(actualMessage){
            const p = message.find(m => m.id == actualMessage);
            if(p){
                setActualPerson(p.user);
                getConversation(p)
            }
        }
    }, [ actualMessage ]);
    
    useState(() => {
        setTimeout(() => {
            divConversation?.current?.scrollIntoView({behavior: 'instant', block: "end"})
        }, 400)
        setTimeout(() => {
            input?.current?.focus();
        }, 1000)
    }, [ actualPerson ])

    const changeChat = id => {
        setConversacion([])
        setPageChat(1)
        setChatId(id)
        setActualMessage(id)
    }

    const pushMessage = e => {
        let text = input.current.value;
        if(text){
            const f = (inputFile.current.value) ? inputFile.current.files[0] : null;
            const tmp = {text: text, is_sender: true, date: moment().format('YYYY-MM-DD HH:mm:ss'), is_msj: true, adjunto: fileName, uuid: null, icon: extension, file: f};
            updateConversation([tmp])
            input.current.value = '';
            setTimeout(() => {
                divConversation.current.scrollIntoView({behavior: 'instant', block: "end"})
                const formData = new FormData();
                formData.append('systemUid', system_selected.token);
                formData.append('id', chatId);
                formData.append('text', tmp.text);
                formData.append('date', tmp.date);
                formData.append('contact', actualPerson.id);
                formData.append('file', inputFile.current.files[0]);

                setItemApi(`${prefix}/send-message`, formData, r => {
                    if(r.length > 0){
                        updateConversation(r);
                    }
                    clearFile();
                }, er => {
                    setSuccessIcon(false);
                    setMessageAlert(er)
                    showModal('alertChat')
                }, );
            }, 50);
        } else {
            setSuccessIcon(false);
            setMessageAlert('Ingresa un mensaje')
            showModal('alertChat')
        }
    }

    const verifyEnter = e => {
        if(e.key === 'Enter'){
            pushMessage(e);
        }
    }

    const showContacts = () => {
        setModalUsers(true);
        showModal(`usersModal${idModal}`)
    }

    const getConversation = (p) => {
        setConversacion([])
        const form = new FormData();
        
        form.append('systemUid', system_selected.token);
        form.append('contact', p.id);
        form.append('id', chatId);
        form.append('page', pageChat)

        setItemApi(`${prefix}/get-conversation`, form, r => {
            input.current.focus();
            if(r.conversacion.length > 0){
                setConversacion(r.conversacion.reverse());
            }
            if(r.info){
                setInfoChat(r.info);
            } else {
                setInfoChat({name: '', is_group: false});
            }

            if(chatId == 0){
                setChatId(r.id);
                r.users.push(p.id)
            }
            setPersonsInChat(r.users)

            setTimeout(() => {
                divConversation.current.scrollIntoView({behavior: 'instant', block: "end"})
                // setIntervalConversation(setInterval(checkForNewMessage, 5000));
            }, 500);

        }, er => {});
    }

    const newMessage = (users, selectedUser) => {
        setConversacion([])
        setModalUsers(false)
        hideModal(`usersModal${idModal}`);
        const p = selectedUser[0];
        setActualPerson(p);
        setPageChat(1)
        getConversation(p)
    }

    const showAddPerson = () => {
        setModalInvitados(true);
        showModal(`usersModal${idModalInvitado}`)
    }

    const addPerson = () => {
        if(!infoChat.is_group){
            setModalInvitados(true)
            showModal('groupModal')
        } else {
            showAddPerson();
        }
    }

    const addPersonGroup = persons => {
        const form = new FormData();
        let send = false;
        persons.forEach(p => {
            if(p.value){
                form.append('users[]', p.id)
                setPersonsInChat(personsInChat => [...personsInChat, p.id]);
                send = true;
            }
        });
        if(send){
            form.append('systemUid', system_selected.token);
            form.append('chat', chatId);

            setItemApi(`${prefix}/add-users-to-group`, form, r => {
                
            }, er => {});
        }
    }

    const setFileNameInput = value => {
        if(value.target.value){
            const name = value.target.files[0].name;
            setFileName(name)
            const lastDot = name.lastIndexOf('.');

            setExtension(name.substring(lastDot + 1));
        } else {
            setFileName('')
            setExtension('')
        }
    }

    const showExplorerFile = ac => {
        setAccept(ac);
        setTimeout(()=>{inputFile.current.click();}, 400);
    }

    const clearFile = () => {
        setFileName('')
        setExtension('')
        inputFile.current.value = null
    }

    const tempDownload = (file) => {
        const url = URL.createObjectURL(file);
        const link = document.createElement('a');
        link.href = url;
        link.download = file.name;
        link.click();
        URL.revokeObjectURL(url);
    };

    return(
        <>
            <div className="flex w-[full] h-[100vh]" style={{backgroundImage: `url(${bgScoil.src})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                {/* Contenido dentro de Layout*/}
                <LayoutTeacher botonSeleccionado={'Chat'} widthBody="w-[1295px]" stylesInput= {'w-[878px] '}>
                <div className="nk-chat bg-white flex max-h-[calc(100vh-64px)] min-h-[calc(100vh-64px)] overflow-hidden relative w-full">
            <div className="nk-chat-aside w-96 border-r-gray_alter border-r bg-white rounded-bl-sm rounded-tl-sm flex flex-col flex-shrink-0 max-h-full overflow-hidden relative">
                <div className="nk-chat-aside-head px-7 items-center flex justify-between py-7">
                    <div className="nk-chat-aside-user inline-flex whitespace-nowrap items-center">
                        <ImageBase image={user.image} name={user.name} lastname={user.lastname} size="56px" />
                        <div className="mx-4 text-[30px] text-libellum-text-gray">{text.title}</div>
                        {/* <div className="text-libellum-text-gray"><FontAwesomeIcon icon={faChevronDown} /></div> */}
                    </div>
                    {/* <div className="nk-chat-aside-tools flex items-center gap-4">
                        <BtnConfig />
                        <BtnNewMessage />
                    </div> */}
                </div>
                <div className="nk-chat-aside-body h-full max-h-full content-start items-start flex-col flex-wrap justify-start relative">
                    <div className="simple-bar-wrapper overflow-hidden">
                        <div className="simple-mask bottom-0 left-0 absolute right-0 top-0 m-0 p-0">
                            <div className="simplebar-offset top-0 left-0 w-full resize-none absolute m-0 p-0">
                                <div className="simplebar-content-wrapper h-full block max-h-full max-w-full relative visible box-border">
                                    <div className="p-0">
                                        {/* <div className="px-7 mt-1 mb-7">
                                            <Search search={text.search} />
                                        </div> */}
                                        <div className="favorits px-7 pb-7">
                                            <h6 className="mb-7 text-sm font-bold tracking-[0.15em] uppercase text-subtitle-chat">{text.title_fav}</h6>
                                            <ul className="flex-wrap flex m-[-0.375rem] gap-x-[22px] w-full gap-y-7">
                                                <li>
                                                    <a className="cursor-pointer" onClick={showContacts}>
                                                        <div className="h-[61px] w-[61px] cursor-pointer items-center bg-white rounded-[50%] text-gray-mutted border border-subtitle-chat flex text-3xl font-medium justify-center relative">
                                                            <FontAwesomeIcon icon={faPlus} />
                                                        </div>
                                                    </a>
                                                </li>
                                                { favorits.map((f, index) => {
                                                    return <li key={index}>
                                                        <a href="#">
                                                            <Avatar user={f} />
                                                        </a>
                                                    </li>
                                                })}
                                            </ul>
                                        </div>
                                        <div className="message py-4">
                                            <h6 className="mb-7 text-sm font-bold tracking-[0.15em] uppercase text-subtitle-chat px-7">{text.title_msj}</h6>
                                            <ul className="overflow-x-hidden overflow-y-auto max-h-[calc(100vh-365px)]">
                                                { message.map((m, index) => {
                                                    return <ItemList user={m.user} time={m.time} text={m.text} key={index} read={m.read} id={m.id} loadChat={changeChat} actual={actualMessage} newMsj={m.new_msj} is_group={m.is_group} name={m.name} />
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[calc(100%-383px)] h-[100vh-68px] bg-chat-bg relative">
                { actualPerson && (
                    <>
                        <div className="headerMessage px-10 py-7 border-b border-b-gray_alter bg-white flex items-center justify-between">
                            <div className="flex w-full items-center justify-start">
                                { !infoChat.is_group && (
                                    <>
                                        <div className="mr-3"><Avatar user={actualPerson} /></div>
                                        <div className="text-left">
                                            <div className="text-libellum-title text-lg font-bold">{actualPerson.name} {actualPerson.lastname}</div>
                                            {/* <div className="text-body-chat text-sm">{actualPerson.last_access}</div> */}
                                        </div>
                                    </>
                                )}
                                { infoChat.is_group && (
                                    <>
                                        <div className="mr-3"><Avatar is_group={true} /></div>
                                        <div className="text-left">
                                            <div className="text-libellum-title text-lg font-bold">{infoChat.name}</div>
                                            {/* <div className="text-body-chat text-sm">{actualPerson.last_access}</div> */}
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className="flex items-center justify-end gap-x-2 pr-4">
                                {/* <Button action={addPerson} icon={faUserGroup} color="bg-btn-image text-white" title="Añadir persona" /> */}
                            </div>
                        </div>
                        <div className="chatBody h-[calc(100%-232px)] overflow-auto pt-8">
                            { Array.isArray(conversacion) && conversacion.length > 0 && conversacion.map((c, index) => {
                                let showDate = true;
                                let nextDate = ((index+1) == conversacion.length ) ? conversacion[0] : conversacion[index+1];
                                if(nextDate.date == c.date){
                                    showDate = false;
                                }
                                if(c.is_msj){
                                    return <div className={((showDate) ? 'py-7' : '') + ` w-full px-10`} key={index}>
                                        <div className={((c.is_sender) ? 'justify-end' : 'justify-start') + ` flex items-center`}>
                                            {/* { !c.is_sender && showDate && (
                                                <div className="mr-3"><Avatar user={actualPerson} /></div>
                                            )} */}
                                            { !c.is_sender && showDate && (
                                                <div className="mr-3"><Avatar user={c.user} /></div>
                                            )}
                                            {!c.is_sender && !showDate && (
                                                <div className="mr-3 w-[61px]"></div>
                                            )}
                                            <div className="flex flex-col flex-wrap">
                                                <div className={((c.is_sender) ? 'bg-libellum text-white' : 'bg-white text-body-chat') + "  rounded-t-lg w-full px-[18px] py-5"}>
                                                    { c.uuid && (
                                                        <div className="file w-full overflow-hidden bottom-[115px] flex items-center py-4 justify-between flex-wrap">
                                                            <div className="flex justify-start items-center w-[calc(100%-66px)] flex-wrap">
                                                                <div className="w-[65px]">
                                                                    <img src={`${urlIcons}icons/files/${dictionaryIcons(c.icon)}`} width="48.5px"/>
                                                                </div>
                                                                <span className="text-gray_alter w-[calc(100%-65px)] overflow-hidden text-ellipsis whitespace-nowrap">{c.adjunto}</span>
                                                            </div>
                                                            <a href={`${urlFiles}${prefix}/download-item/${c.uuid}/${system_selected.token}${paramsFiles}`} download={c.adjunto}><button className="text-gray_alter w-12 h-12 flex items-center justify-center rounded-full border-gray_alter border"><FontAwesomeIcon icon={faDownload} /></button></a>
                                                        </div>
                                                    )}

                                                    { c.file && (
                                                        <div className="file w-full overflow-hidden bottom-[115px] flex items-center py-4 justify-between flex-wrap">
                                                            <div className="flex justify-start items-center w-[calc(100%-66px)] flex-wrap">
                                                                <div className="w-[65px]">
                                                                    <img src={`${urlIcons}icons/files/${dictionaryIcons(c.icon)}`} width="48.5px"/>
                                                                </div>
                                                                <span className="text-gray_alter w-[calc(100%-65px)] overflow-hidden text-ellipsis whitespace-nowrap">{c.adjunto}</span>
                                                            </div>
                                                            <a onClick={() => tempDownload(c.file)} download={c.adjunto}><button className="text-gray_alter w-12 h-12 flex items-center justify-center rounded-full border-gray_alter border"><FontAwesomeIcon icon={faDownload} /></button></a>
                                                        </div>
                                                    )}
                                                    <span>{c.text}</span>
                                                    {/* <span className="ml-2"><FontAwesomeIcon icon={faChevronDown} /></span> */}
                                                </div>
                                                { showDate && (
                                                    <div className={((c.is_sender) ? 'justify-end' : 'justify-start') + " flex items-center text-chat-name w-full mt-2 text-sm"}>
                                                        {/* <span>{actualPerson.name} {actualPerson.lastname}</span>
                                                        <FontAwesomeIcon icon={faCircle} className="text-[6px] mx-3" /> */}
                                                        <span>{formateDateHourFunc(c.date, 'DD-MM-AAAA', 'hh:mm')}</span>
                                                    </div>
                                                )}
                                            </div>
                                            { c.is_sender && (
                                                <div className="ml-3"><Avatar user={localUser} /></div>
                                            )}
                                        </div>
                                    </div>
                                } else {
                                    return <div className={`w-full px-10`} key={index}>
                                        <div className={ `justify-center flex items-center`}>
                                            <div className="flex flex-col flex-wrap text-body-chat text-xs">
                                                <span>{c.user.name} {c.text}</span>
                                            </div>
                                        </div>
                                    </div>
                                }
                            })}
                            <div ref={divConversation}></div>
                        </div>
                        <div className="chatSend w-full h-[114px] flex items-center justify-start flex-wrap bg-white gap-x-6 px-10">
                            {/* <button title="Cerrar">
                                <FontAwesomeIcon icon={faXmarkCircle} className="text-libellum-title text-xl cursor-pointer" />
                            </button> */}
                            <button title="Cargar imagen" onClick={() => {showExplorerFile('.png, .jpg, .jpeg, .gif')}}>
                                <FontAwesomeIcon icon={faImage} className="text-btn-image text-xl cursor-pointer"/>
                            </button>
                            <button title="Adjuntar Archivo" onClick={() => {showExplorerFile(".txt, .pdf, .doc, .docx, .xlsx, .xls, .xml, .zip, .rar")}}>
                                <FontAwesomeIcon icon={faPaperclip} className="text-btn-image text-xl cursor-pointer" />
                            </button>
                            <div className="w-[calc(100%-175px)]">
                                <input type="text" className="text-left px-5 py-2 border border-chat-border rounded-full outline-none w-full" placeholder="Escribir" ref={input} onKeyDown={verifyEnter} />
                            </div>
                            <button title="Enviar Mensaje" onClick={pushMessage}>
                                <div className="flex items-center justify-center overflow-hidden w-10 h-10 rounded-full bg-btn-image text-white cursor-pointer" title="Enviar"><FontAwesomeIcon icon={faPaperPlane} className="text-xl" /></div>
                            </button>
                        </div>
                        { fileName != '' && (
                            <div className="absolute w-full overflow-hidden bg-white bg-opacity-95 bottom-[115px] px-10 flex items-center py-4 justify-between">
                                <div className="flex justify-start items-center">
                                    <div className="w-[65px]">
                                        <img src={`${urlIcons}icons/files/${dictionaryIcons(extension)}`} width="48.5px"/>
                                    </div>
                                    <span className="text-gray_alter">{fileName}</span>
                                </div>
                                <button onClick={clearFile} className="text-gray_alter"><FontAwesomeIcon icon={faTrash} /></button>
                            </div>
                        )}
                    </>
                )}
            </div>
            <input className="fileadjunto hidden" id="fileAttachment" type="file" accept={accept} ref={inputFile} onChange={setFileNameInput} />
        </div>
                </LayoutTeacher>                                  
            </div>        
        </>
    );
}

export default Chat;