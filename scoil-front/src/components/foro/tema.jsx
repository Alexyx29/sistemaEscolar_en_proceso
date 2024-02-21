import { useEffect } from "react";
import ImageBase from "../imageBase";
import { useState } from "react";
import { formateDateHourFunc } from "@/components/useFormats";

const Tema = ( { tema, actual, action = () => {}, dateFormat = 'DD/MM/AAAA', hourFormat = 0 } ) => {
    const [ bg, setBg ] = useState(((actual == tema.id) ? 'bg-white dark:bg-icon-dark' : ''));
    const border = (tema.active) ? 'border-libellum-border dark:border-dark-border' : 'border-l-4 border-l-red-600 border-y-libellum-border dark:border-y-dark-border';

    useEffect(() => {
        setBg((actual == tema.id) ? 'bg-white dark:bg-icon-dark' : '')
    }, [ actual]);

    return (
        <div className={`flex items-start justify-start md:px-[22px] px-0 md:py-[19px] py-[13px] w-full h-26 border-b relative ${bg} ${border}`}>
            {/* <div className="flex flex-col items-center justify-center">
                <ImageBase image={tema.image} name={tema.name_user} lastname={tema.lastname} size="45px"/>
            </div> */}
            <div className="flex flex-col items-start justify-start mx-2 font-open w-full cursor-pointer" onClick={()=>{action(tema.id)}}>
                <span className="text-sm font-bold text-dark-blue dark:text-white w-full">{tema.name}</span>
                <span className="text-sm font-bold text-dark-blue dark:text-white">{ formateDateHourFunc(tema.created_at, dateFormat, hourFormat)}</span>
                <span className="text-sm text-dark-blue dark:text-white text-ellipsis whitespace-nowrap overflow-hidden w-full">{tema.name_user} {tema.lastname}</span>
                {/* <span className="text-[13px] text-gray_alter dark:text-th text-ellipsis whitespace-nowrap overflow-hidden w-full">{tema.ofertas}</span> */}
                {/* <span className="text-[13px] text-gray_alter dark:text-th text-ellipsis whitespace-nowrap overflow-hidden w-full">{tema.campus}</span> */}
            </div>
        </div>
    )
}

const ItemTema = ( { temas, action = () => {}, actual } ) => {
    const [ actualC, setActualC ] = useState(actual);

    useEffect(() => {setActualC(actual);}, [ actual ]);

    return (
        <>
            { temas.map((tema, index) => {
                return <Tema tema={tema} key={index} actual={actualC} action={action} />
            }) }
        </>
    )
}

export default ItemTema;