import { faPlus } from "@fortawesome/free-solid-svg-icons";
import BtnAgenda from "../btnAgenda";

const AddBtn = ({ action, send = false, title = 'Agregar', color = 'bg-blue-menu text-white' }) => {
    return <BtnAgenda action={action} icon={faPlus} color={color} send={send} title={title} />
}

export default AddBtn;