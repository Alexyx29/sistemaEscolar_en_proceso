import Generic from "@/components/items/buttons/generic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BtnAgenda = ({ action, icon, color, send = false, title = ""}) => {
    return (
        <div className={`${color} w-9 h-9 rounded ml-[10px] flex items-center justify-center cursor-pointer`}>
            { send && (
                <svg className="animate-spin h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            )}
            { !send && (
                <Generic action={action} icon={<FontAwesomeIcon icon={icon}/>} title={title} color={color} />
            )}
        </div>);
}
export default BtnAgenda;