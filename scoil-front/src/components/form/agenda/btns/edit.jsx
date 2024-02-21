import { faEdit } from "@fortawesome/free-solid-svg-icons";
import BtnAgenda from "../btnAgenda";

const EditBtn = ({ action = ()=> {}, send = false, title = 'Editar', color = 'bg-blue-menu text-white' }) => {
    return <BtnAgenda action={action} icon={faEdit} color={color} send={send} title={title} />
}

export default EditBtn;