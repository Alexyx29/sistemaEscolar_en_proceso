import Link from "next/link";

const Notificacion = ({tittle='', content='', link='/'}) => {
    return(
        <>
            <div className="flex my-[15px]">
                <div className="min-w-[2px] bg-yellow-bar"/>
                <div className="flex flex-col ml-[10px]">
                    <Link href={link}>
                        <label className={`w-[225px] uppercase font-bold font-open text-section-tittle text-[14px] leading-none mb-[5px] cursor-pointer line-clamp-1  `}>{tittle}</label>                        
                    </Link>
                    <Link href={link}>
                        <label className={`w-[223px]  font-open text-gray-not-text text-[12px] leading-none cursor-pointer flex line-clamp-3 `}>{content}</label>
                    </Link>                    
                </div>                
            </div>            
        </>
    )
}

export default Notificacion;