import logo from "../../assets/logo/logo-scoil.svg";
import check from "../../assets/icons/check.svg"
import Input from "../form/input";
import { useState } from "react";
import Generic from "../items/buttons/generic";
import TextButton from "../items/buttons/textbutton";
import PasswordInput from "../form/passwordInput";
import Link from "next/link";
import Fetch from "../fetch";
import Image from "next/image";
import { getItem, setItem } from "../useStorage";
import { getTextApi } from "../useForm";

export default function Login({}){
    const [login_1, setLogin_1] = useState(true);
    const [login_2, setLogin_2] = useState(false);
    const [error, setError] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [ username, setUsername] = useState(false);
    const [ user, setUser ] = useState({})
    const [ password, setPassword ] = useState('')

    const updateUsername = e => {
        setUsername(e.target.value)
    }

    const searchUser = () => {
        setError('')
        if(username && isChecked){
            Fetch.fetching(`${process.env.API_URL}login/find/${username}`, 'GET').then(r => {
                setLogin_1(false);
                setLogin_2(true);
                setUser(r.data);
            }).catch(e => {
                setLogin_1(true);
                setLogin_2(false);
                try{
                    const m = JSON.parse(e);
                    setError(m.message);
                } catch(er){
                    console.log(e)
                }
                // setError(e);
            });
        } else {
            setLogin_1(true);
            setLogin_2(false);
            const m = (!isChecked) ? 'Acepta los términos y condiciones' : 'Indica el nombre de usuario';
            setError(m)
        }
    }

    const changeLogin = () => {
        setError(false)
        setLogin_1(false);
        setLogin_2(true);        
    }
    const handleCheckbox = () => {
        setIsChecked(!isChecked);
    }
    
    const loginFunc = e => {
        const formData = new FormData();
        formData.append('password', password);
        formData.append('email', user.email);

        Fetch.fetching(process.env.API_URL + 'login', 'POST', formData).then(response => {
            setItem('_token', response._token);
            setItem('lib_device', response.device_identifier);
            redirectLog()
            // setItem('user', response.data.user);
            // router.reload('/contacts');
            //window.location.href = "/home";
            /* window.location.href = "/home-teacher"; */
        }).catch(error => {
            if(error.message){
                console.error(error);
            } else {
                /* setAlert({img: err.src, title: text.alert.title_error, message: unicodeToChar(error.replaceAll('"', ''))});
                toggleAlert(); */
            }
        });
    }

    const redirectLog = () => {
        Fetch.fetching(process.env.API_URL + 'user/systems', 'GET').then(response => {
            if(response.systems.length > 1){
                //     // Seleccionar sistema
            } else if(response.systems.length === 1){
                    let s = JSON.stringify(response.systems[0]);
                    setItem('system_selected', s);
                    getTextApi('user/sections', response => {
                        let logged = getItem('logged');
                        if(!logged){
                            setItem('logged', JSON.stringify(response.user));
                        }
            
                        window.location.href = "/home-teacher";
                    }, '', err => {
                    });

                //     const l = getItem('logged');
                //     const lu = getItem('list_users');
                //     if(l && lu){
                //         const lo = JSON.parse(l)
                //         const liu = JSON.parse(lu);
                //         const exist = liu.find(lisu => lisu.username == lo.username);
                //         if(!exist){
                //             logoff();
                //         } else {
                //             window.location.href = "/contacts";
                //         }
                //     } else {
                //         window.location.href = "/contacts";
                //     }
                //     // router.reload('/contacts');
                    
                // } else {
                //     getModules();
                //     getNotifications();
            }
        });
    }

    const resetLogin = () => {
        setLogin_1(true);
        setLogin_2(false);
    }

    const redirectIns = () => {
        window.location.href = "inscripcion";   
    }
 return(
    <>
        <div className="mx-auto my-auto bg-input-white rounded-3xl w-[306px] min-h-[284px] shadow-2xl">            
            <form>
                <div className="flex flex-col items-center justify-center" >                    
                    <div className="">                        
                        <div className="flex flex-col items-center">                            
                            {login_1 && (
                                <>
                                    <div className="flex flex-col items-center mt-[30px] mb-[20px]">
                                        <img src={logo.src}></img>
                                        <span className="font-open text-blue-scoil text-[16px]">SCOIL</span>
                                    </div>
                                    <Input placeholder= 'Usuario / Correo' hiddeMargin={true} change={updateUsername} error={error}></Input>
                                    <div className="flex mt-[15px] w-[100%]"> 
                                        <div className="relative">
                                            <label>
                                                {isChecked && (
                                                    <img className="absolute top-[6px] left-[3px]" src={check.src}></img>
                                                )}
                                                <input type="checkbox" id="terms" name="terms" className="w-4 h-4 border rounded-md appearance-none hover:border-blue-hover checked:bg-btn-sky-blue checked:border-gray-checked" checked={isChecked} onChange={handleCheckbox}/>
                                            </label>                                
                                        </div>                            
                                        <label htmlFor="myCheckbox" className="ml-1 text-gray_alter font-open text-[13px]">
                                            Acepto los <a className="underline">términos y condiciones</a>
                                        </label>
                                    </div>
                                    <div className="flex flex-col grow justify-center mb-[20px] mt-[15px]">
                                        <div className="my-[10px]">
                                            <Generic colors='  bg-[#0082C9]   rounded h-[35px] w-[90px] text-input-white font-open text' title='Siguiente' action = {searchUser}></Generic>
                                        </div>                        
                                        <div className="mb-[20px] mt-[20px]">
                                            <Link href={'/inscripcion'}>
                                                <TextButton colors='text-gray_alter font-open text text-[14px]' txt_button='Inscribirme'></TextButton>
                                            </Link>
                                        </div>                        
                                    </div>
                                </>
                            )}
                            {login_2 && (
                                <>
                                    <div className="flex flex-col items-center mt-[50px] mb-[20px]">
                                        {/* Datos de usuario*/}
                                        <div className="inline-block p-1 border-2 rounded-full border-libellum-light-blue">
                                            <ImageLogin username={user} urlimage={process.env.IMAGE_URL}/>
                                            {/* <img className='w-[66px] h-[66px] object-cover' src={`${process.env.IMAGE_URL}${user.image}`}></img>   */}
                                        </div>                                                                                
                                        <div className='flex flex-col text-center mt-[5px]'>                
                                            <span className='text-dark-blue font-open text-base font-bold mb-[-5px]'>{user.name}</span>
                                            <span className='text-base text-dark-blue font-open'>{user.lastname}</span>                                            
                                        </div>                
                                    </div>
                                    <PasswordInput change={setPassword}></PasswordInput>
                                    <div className="flex mt-[15px] w-[100%]"> 
                                        <div className="relative">
                                            <label>
                                                {isChecked && (
                                                    <img className="absolute top-[6px] left-[3px]" src={check.src}></img>
                                                )}
                                                <input type="checkbox" id="terms" name="terms" className="w-4 h-4 border rounded-md appearance-none hover:border-blue-hover checked:bg-btn-sky-blue checked:border-gray-checked" checked={isChecked} onChange={handleCheckbox}/>
                                            </label>                                
                                        </div>                            
                                        <label htmlFor="myCheckbox" className="ml-1 text-gray_alter font-open text-[13px]">
                                            Recuérdame
                                        </label>
                                    </div>
                                    <div className="flex flex-col grow justify-center mb-[20px] mt-[15px]">
                                        <div className="flex justify-center my-[10px]">
                                                <Generic colors='bg-libellum-light-blue rounded h-[35px] w-[90px] text-input-white font-open text' title= 'Ingresar' action = {() => {loginFunc()}}></Generic>
                                            
                                        </div>                        
                                        <div className="mb-[10px] mt-[20px]">
                                            <TextButton colors='text-gray_alter font-open text-sm' txt_button='Ingresar con otro usuario' click={resetLogin}></TextButton>
                                        </div>
                                        <div className="mb-[20px] mt-[10px]">
                                            <TextButton colors='text-gray_alter font-open text-sm' txt_button='Olvidé mi contraseña'></TextButton>
                                        </div>                        
                                    </div>
                                </>                                
                            )}                                                                                                           
                        </div>                                                
                    </div>                                               
                </div>                
            </form>        
        </div>        
    </>
 )
}

const ImageLogin = ({username, urlimage}) => {
    return (
        <div className={`flex items-center justify-center w-[66px] h-[66px] overflow-hidden rounded-full m-auto border-2 p-[2px] bg-btn-image`}>
            {username.image && (
                <Image src={urlimage + username.image} alt="Usuario" width={56.63} height={56.63} className="h-full rounded-full" />
            )}
            { !username.image && username.name && (
                <span className={`w-full h-full rounded-full text-white flex items-center justify-center text-[36px]`} style={{backgroundColor: username.color}}>
                    <span className="leading-[0] relative top-[-3px]">{username.name.charAt(0)}</span>
                    <span className="leading-[0] relative top-[-3px]">{username.lastname.charAt(0)}</span>
                </span>
            )}
        </div>
    )
}