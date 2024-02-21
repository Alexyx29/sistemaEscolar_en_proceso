import Reac, {useState} from 'react';
import ButtonIcon from "../items/buttons/buttonIcon";
import LogoScoil from "../items/logoScoil";
import parent from '@/assets/usuarios/father.jpg';
import Link from 'next/link';
import Parent from './parent';
// import LadaModal from '../modal/contacts/lada';
/**
 * Componente RightMenu
 * Es el menú de la derecha
 * @param {boolean} hidden Si es verdadero oculta el menú en caso contrario lo muestra
 * @param {object} text
 * @param {object} modules
 * @param {function} hiddenMenu Para ocultar el menu
 * @param {object} user Información del usuario logueado
 * @param {integer} space Espacio disponible del 0 al 100
 * @param {string} urlImage
 * @param {string} locale
 * @param {integer} spaceUsed
 * @param {array} idiomas
 * @param {object} system
 * @returns 
 */
const LeftParentsBar = ({idButton, name, lastname, notifications}) => {
    const [botonSeleccionado, setBotonSeleccionado] = useState(idButton);
    const setElemento = (elemento) => {        
        setBotonSeleccionado(elemento);
    }

    const [text, setText] = useState({
        txtBoard: 'Tablero',
        txtCalendar: 'Calendario',
        txtChat: 'Chat',
        txtPayments: 'Pagos',
        txtServices: 'Servicios Escolares',        
        txtExit: 'Salir'
    })

    // const LadaModal  = () => {
    //     showModal("ladaModal");
    // };
    // const cerrarModal = () => {
    //     hideModal("ladaModal");
    // };
    return (
        <>
            <aside className="min-h-[760px] min-w-[auto] bg-gray-light p-0 w-[290px] rounded-[10px] mr-[30px] h-[full]">
                <div className='flex flex-col h-full'>                
                    <div>
                        <Parent name={name} lastname={lastname} imagen={parent} tamanio='w-[101px] h-[101px]' notificaciones={notifications}></Parent>
                    </div>
                    <div className='w-[290px] flex flex-col mt-[30px] h-full justify-between'>
                        <div className='w-[228px] flex flex-col items-center  gap-[15px] mb-[30px]  '>
                            <Link href="/tablero-padres">
                                <ButtonIcon colors= {botonSeleccionado == 1 ? 'bg-[#0082C9] text-input-white' : 'bg-gray-light text-gray-menu-text'} txt_button= {text.txtBoard} icono= 'tablero' click={() => setElemento(1)} filtro= {botonSeleccionado == 1  ? true : false }></ButtonIcon>
                            </Link>                                                                                    
                            <Link href="/calendario-padres">
                                <ButtonIcon colors= {botonSeleccionado == 2 ? 'bg-[#0082C9] text-input-white' : 'bg-gray-light text-gray-menu-text'} txt_button={text.txtCalendar} icono= 'calendario' click={() => setElemento(2)} filtro= {botonSeleccionado == 2  ? true : false }></ButtonIcon>
                            </Link>
                            <Link href="/chat-padres">
                                <ButtonIcon colors= {botonSeleccionado == 3 ? 'bg-[#0082C9] text-input-white' : 'bg-gray-light text-gray-menu-text'} txt_button={text.txtChat} icono= 'chat' click={() => setElemento(3)} filtro= {botonSeleccionado == 3  ? true : false }></ButtonIcon>
                            </Link>
                            <Link href='/pagos-padres'>
                                <ButtonIcon colors= {botonSeleccionado == 4 ? 'bg-[#0082C9] text-input-white' : 'bg-gray-light text-gray-menu-text'} txt_button={text.txtPayments} icono= 'pagos' click={() => setElemento(4)} filtro= {botonSeleccionado == 4  ? true : false }></ButtonIcon>
                            </Link>                            
                            <Link href="/servicios-escolares-padres">
                                <ButtonIcon colors= {botonSeleccionado == 5 ? 'bg-[#0082C9] text-input-white' : 'bg-gray-light text-gray-menu-text'} txt_button={text.txtServices} icono= 'servicios' click={() => setElemento(5)} filtro= {botonSeleccionado == 5  ? true : false }></ButtonIcon>
                            </Link>
                            {/* <Link> */}
                                <ButtonIcon colors= {botonSeleccionado == 6 ? 'bg-[#0082C9] text-input-white' : 'bg-gray-light text-gray-menu-text'} txt_button={text.txtExit} icono= 'salir' click={() => setElemento(6)} filtro= {botonSeleccionado == 6  ? true : false }></ButtonIcon>
                            {/* </Link> */}
                        </div>
                        {/* abre MODAL de alerta de vencimiento */}
                        <button onClick={""}>
                            <div className='flex  items-end justify-center mb-[15px]'>
                                <LogoScoil></LogoScoil>                  
                            </div>  
                        </button>                    
                    </div>                 
                    {/* <LadaModal submit={{"cerrar": cerrarModal}} /> */}        
                </div>                    

            </aside>
        </>        
    )
}

export default LeftParentsBar;