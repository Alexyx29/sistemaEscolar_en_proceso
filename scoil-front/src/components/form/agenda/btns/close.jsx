import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import BtnAgenda from "../btnAgenda";

const CloseBtn = ({action, title = 'Cerrar'}) => {
    return <BtnAgenda action={action} icon={faTimesCircle} color="bg-red-btn hover:bg-red-hover" title={title} />
}

export default CloseBtn;