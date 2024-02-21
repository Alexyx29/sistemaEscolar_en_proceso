// components/Examen.jsx
import React from 'react';
import trashRed from '@/assets/icons/trashRed.svg';
import editIcon from '@/assets/icons/editIcon.svg';
import Link from 'next/link';
import { useState } from 'react';
import ImageBase from '../items/imageBase';



const TestGrading = ({ examen, buttons=true , link='' }) => {
    const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null);

const opciones = [
    'A. EDVAC (Electronic Discrete Variable Automatic Compute)',
    'B. ENIAC(Electronic Numerical Integrator And Computer)',
    'C. IBM (International Business Machines)',
    'D. ABC( Atanasoff, Berry Computer)',
  ];

  const handleSeleccion = (index) => {
    setRespuestaSeleccionada(index);
  };

  const countExamen = {
  califi:"5.4",
  califiN:"Calificación Actual",
  react:"REACTIVO",
  reactN:"9/20",
}

const back = {
    back:"IR AL BACK END"
  }

    return(

<>
<div className="relative w-[972px] h-[351px] bg-[#F7F8F9] rounded-lg   ">
    <div className='absolute ml-[60px] mt-[40px] flex'>
            <ImageBase firstname={"Manuel Alberto"} lastname={"Rosales San Agustín"} size='66px' ></ImageBase>
        <div className='font-open text-[16px] text-[#223955] flex flex-col ml-[15px]' >
            <span className='font-bold ' >
                {"Manuel Alberto"}
            </span>
            <span className='text-[] '>
                {"Rosales San Agustín"}
            </span>
        </div>
    </div>
    <div className=" mt-[90px]  w-[912px] h-[216px] bg-[#ffffff] rounded-lg mx-auto   shadow-lg" >
        
        <div className="w-full flex flex-col pt-[25px] pb-[25px] mx-[30px]" >
            <span className=" h-auto font-open font-semibold text-[16px] text-[#62676D]   ">
                {"HISTORIA DE LAS COMPUTADORAS"}
            </span>

            <div className='h-[145px] overflow-y-auto news' >
                <span className=" font-open font-semibold text-[16px] text-[#62676D]   ">
                    {"EXAMEN DE EVALUACIÓN - CUARTO TRIMESTRE"}
                </span>
                
                <span className=' mt-[30px] font-open font-semibold text-[14px] text-[#62676D] gap-[4px]'>
                    <li>
                        {"Prepárate con una computadora e Internet actualizados."}
                    </li>
                    <li>
                        {"Escoge un lugar tranquilo y limpio."}
                    </li>
                    <li>
                        {"Accede a la plataforma y espera las instrucciones."}
                    </li>
                    <li>
                        {"Sigue las reglas, administra el tiempo y evita trampas."}
                    </li>
                    <li>
                        {"Detén y entrega el examen según las instrucciones."}
                    </li>
                    <li>
                        {"Revisa tus respuestas antes de finalizar."}
                    </li>
                    <li>
                        {"Sigue las instrucciones y mantén la integridad durante el examen. ¡Buena suerte!"}
                    </li>
                </span>
            </div>


       
        </div>

        
      
    </div>
</div>


<div className="w-[972px] h-[317px] bg-[#F7F8F9] rounded-lg   ">
    <div className="  w-[912px] h-[111px] bg-[#ffffff] rounded-lg mx-auto my-[30px]  shadow-lg" >
        
        <div className="w-full flex flex-col pt-[25px] pb-[25px] mx-[30px]" >
            <span className=" h-auto font-open font-semibold text-[16px] text-[#62676D]   ">
                {"Historia de las computadoras"}
            </span>
            <span className="w-[851px] h-auto font-open font text-[14px] text-[#62676D]   ">
                {"Es el nombre de la computadora terminada en 1947 por un equipo de científicos dirigidos por John Mauchly y John Eckert, de la Universidad de Pensilvania, la cuál es considerada como la primera computadora electrónica digital de la historia."}
            </span>
        </div>

        <ul  className="ml-[30px] mt-[25px]  font-open font-semibold text-[14px] text-[#62676D] " >
        {opciones.map((opcion, index) => (
            <li key={index} className="mb-[10px]">
                <label className="">
                <input className="" type="radio" name="respuesta" checked={respuestaSeleccionada === index} onChange={() => handleSeleccion(index)}/>
                <span className="ml-1 w-full  " >
                    {opcion}
                </span>
                </label>
            </li>
            ))}
        </ul>
      
    </div>
</div>
</>
    )
}

export default TestGrading;
