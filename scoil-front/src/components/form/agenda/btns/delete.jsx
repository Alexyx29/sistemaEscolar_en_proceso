import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import BtnAgenda from "../btnAgenda";

const DeleteBtn = ({ action, color = 'bg-red-hover text-white', title = 'Eliminar' }) => {
    return <BtnAgenda action={action} icon={faTrashCan} color={color} title={title} />
}

export default DeleteBtn;