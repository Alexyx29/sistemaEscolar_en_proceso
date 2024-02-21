import React, {useState, useEffect} from "react";
import Link from "next/link";
import Generic from "./generic";

const BtnTimeInterval = ({dateInit, dateLimit,  title, link='/' }) =>{

    const [activo, setActivo] = useState(true);

    const fechaInicial = (dateInit);
    const fechaLimite = (dateLimit);
    
    // este es el formato de hora y fecha que se debe de utilizar con este boton
    // const fechaInicial = '2024/02/01 18:29:00';
    // const fechaLimite = '2024/02/01 18:31:00';
    
  
    useEffect(() => {
        const obtenerFechaActual = () => {
          const ahora = new Date();
          const año = ahora.getFullYear();
          const mes = (ahora.getMonth() + 1).toString().padStart(2, '0');
          const dia = ahora.getDate().toString().padStart(2, '0');
          const hora = ahora.getHours().toString().padStart(2, '0');
          const minutos = ahora.getMinutes().toString().padStart(2, '0');
          const segundos = ahora.getSeconds().toString().padStart(2, '0');
    
          return `${año}/${mes}/${dia} ${hora}:${minutos}:${segundos}`;
        };

    // Compara la fecha inicial, la hora final y hora actual con la fecha límite
    const verificarFechaLimite = () => {
        const fechaActual = obtenerFechaActual();
        if (fechaActual >= fechaInicial && fechaActual <= fechaLimite) {
          setActivo(true);
        } else {
          setActivo(false);
        }
      };

    verificarFechaLimite();

    const intervalo = setInterval(verificarFechaLimite, 60000);

    return () => clearInterval(intervalo);
  }, []);


    return (
            <>
                {activo && (
                    <Link href={link}>
                        <Generic colors='bg-green-scoil rounded h-[35px] ss:h-[30px] md:h-[32px] w-[90px] ss:w-[70px] md:w-[70px] text-input-white font-open font-bold text-[14px] ' textButton={' ss:text-[12px] md:text-[12px] '} title={title} action={null} ></Generic>
                    </Link>
                )}  
            </>
        )
    }

export default BtnTimeInterval;

// colors='bg-green-scoil rounded h-[35px] ss:h-[30px] md:h-[32px] w-[90px] ss:w-[70px] md:w-[70px] text-input-white font-open font-bold text-[14px] ' textButton={' ss:text-[12px] md:text-[12px] '}