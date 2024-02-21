import Reac, {useState} from 'react';
import Alumno from "./alumno";
import ButtonIcon from "../items/buttons/buttonIcon";
import LogoScoil from "../items/logoScoil";
import imagen from '../../assets/usuarios/user-2.svg';
import Link from 'next/link';
import Teacher from './teacher';
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
const BarTeacher = ({hidden, text, modules, hiddenMenu, user, space, urlImage, locale, spaceUsed, idiomas, system, clickBuy = () => {}, bag = [], bagCurrency = '', bagAmount= 0, removeItem = () => {}, paymentProcess = () => {}, showBusiness = () => {}, signOff = () => {}, botonSeleccionado = 'tablero'}) => {
    // const [botonSeleccionado, setBotonSeleccionado] = useState(null);
    const setElemento = (elemento) => {        
        // setBotonSeleccionado(elemento);
    }

    // const LadaModal  = () => {
    //     showModal("ladaModal");
    // };

    // const cerrarModal = () => {
    //     hideModal("ladaModal");
    // };
    return (
        <>
            <aside className="relative min-h-[760px]  min-w-[auto] bg-gray-light p-0 my-[30px] rounded-[10px] mr-[30px] h-[full] w-[290px]  ">
                <div className='flex flex-col'>
                    {/* h-[100%] */}
                    <div >
                        <Teacher name={user.name} lastname={user.lastName} tamanio='w-[100px] h-[100px]' imagen={user.image} borde={false} notificaciones={user.notifications} student={user.subjets}  />
                    </div>
                    <div className='w-[290px]   flex flex-col  mt-[30px]  '>
                        <div className='w-[228px] flex flex-col items-center  gap-[15px] mb-[30px]  '>
                            {modules.map((mod, index) => {
                                return (
                                    <div key={index}>
                                        {mod.link ?
                                            <Link href={mod.link} >
                                                <ButtonIcon colors= {botonSeleccionado == mod.name ? 'bg-[#0082C9] text-input-white' : 'bg-gray-light text-gray-menu-text'} txt_button={mod.txt_button} icono={mod.icono} click={() => setElemento(mod.name)} filtro= {botonSeleccionado == mod.name  ? true : false } />
                                            </Link>
                                        :
                                            <ButtonIcon colors= {botonSeleccionado == mod.name ? 'bg-[#0082C9] text-input-white' : 'bg-gray-light text-gray-menu-text'} txt_button={mod.txt_button} icono={mod.icono} click={() => { mod.name == 'salir' ? signOff() : setElemento(mod.name)}} filtro= {botonSeleccionado == mod.name  ? true : false } />
                                        }
                                    </div>
                                )
                            })}
                        </div>
                        {/* abre MODAL de alerta de vencimiento */}
                        <div className='absolute bottom-7 w-full flex items-end justify-center'>
                            <button>
                                <LogoScoil />                  
                            </button>                       
                        </div>  
                    </div>                 
                    {/* <LadaModal submit={{"cerrar": cerrarModal}} /> */}
                </div> 
            </aside>
        </>        
    )
}

export default BarTeacher;