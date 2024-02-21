import BtnAgenda from "../btnAgenda";
import { faEye } from "@fortawesome/free-regular-svg-icons";

const SeeBtn = ({ action, color = 'bg-btn-image text-white', title = 'Ver' }) => {
    return <BtnAgenda action={action} icon={faEye} color={color} title={title} />
}

export default SeeBtn;