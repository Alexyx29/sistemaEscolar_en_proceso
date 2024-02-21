import { faCheck } from "@fortawesome/free-solid-svg-icons";
import BtnAgenda from "../btnAgenda";

const SaveBtn = ({action, send, color = 'bg-green-btn text-white', title = 'Guardar' }) => {
    return <BtnAgenda action={action} icon={faCheck} color={color} send={send} title={title} />
}

export default SaveBtn;