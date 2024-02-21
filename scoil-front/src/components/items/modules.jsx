import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Section from "../menu/seccion";
import BodyModules from "./bodyModule";
import ButtonThemes from "./buttons/buttonthemes";

const Modules = ({ 
    botonSeleccionado = 1,
    module,
    nameModule,
    numClase,
    time,

    theme,
    timeTheme,
    theme2,
    timeTheme2,
    theme3,
    timeTheme3,
    theme4,
    timeTheme4,
    theme5,
    timeTheme5,


}) => {


    const [isPressed, setPressed] = useState(true);

    const handleButtonClick = () => {
        setPressed(!isPressed);
        console.log("hola hola")
    };
  

    
return (        
    <>
        <Section isPressed={isPressed} marggin="mb-[2px]" >
            <div className=" mt-[px] w-[290px] flex justify-between items-center">
                <div className={'flex-container flex-col flex mt-[0px] mb-[0px] w-[204px] '}>                
                    <span className=" font-open font-bold text-[21px] text-[#535353] " >
                        {module}
                    </span>
                    
                    <span className="font-open font-semibold text-[14px] text-[#818181] ">
                        {nameModule}
                    </span>

                    <span className="font-open font-semibold text-[11px] text-[#6781FE]">
                        {numClase} - {time}
                    </span>
                </div>

                <div className="flex mr-[50px] mb-[10px]" >
                    <button className={` w-[10px] h-[7px] text-[#888888]`}
                        onClick={handleButtonClick}>
                        <FontAwesomeIcon icon={isPressed ? faCaretUp : faCaretDown} /> 
                    </button>
                </div>
            </div> 
        </Section>

    {(isPressed && (
                    <Section>
                        <ButtonThemes colors= {botonSeleccionado == 1 ? '  bg-[#0082C9]   text-input-white' : 'bg-gray-light text-gray-menu-text'} txt_button= 'Principios Básicos de Finanzas para Administradores' click={() => setElemento(1)} filtro= {botonSeleccionado == 1  ? true : false } >

                        </ButtonThemes>

                        <button>
                        <BodyModules theme={theme} timeTheme={timeTheme} />
                        </button>

                        <button>
                        <BodyModules theme={theme2} timeTheme={timeTheme2} />
                        </button>

                        <BodyModules
                            theme={theme3}
                            timeTheme={timeTheme3}
                        />

                        <BodyModules
                            theme={theme4}
                            timeTheme={timeTheme4}
                        />

                        <BodyModules
                            theme={theme5}
                            timeTheme={timeTheme5}
                        />  
                    </Section>   
        ))} 
    </>

    )
}

export default Modules;