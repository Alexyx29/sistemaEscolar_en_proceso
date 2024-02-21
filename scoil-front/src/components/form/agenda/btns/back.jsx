import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import BtnAgenda from "../btnAgenda";

const BackBtn = ({ action, send = false, title = 'Regresar', color = 'bg-blue-menu text-white' }) => {
    return <BtnAgenda action={action} icon={faArrowLeft} color={color} send={send} title={title} />
}

export default BackBtn;