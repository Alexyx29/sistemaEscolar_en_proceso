import ModuleContent from "./moduleContent";

const ModulesContent = ({modules, onModuleData, loadInfoId}) => {

    return(
        <>
            <div className="flex flex-col gap-[30px]">
                {modules.map((modul, index) => {
                    return (
                        <ModuleContent key={index} id={modul.id} tittle={modul.title} name={modul.name} duration={modul.duration} contenido={modul.content} onModuleData={onModuleData} loadInfoId={loadInfoId}/>
                    )
                })}
            </div>            
        </>
    )
}

export default ModulesContent;