import { faGear } from "@fortawesome/free-solid-svg-icons";
import BtnAgenda from "../btnAgenda";

const ConfigBtn = ({ action, color="bg-form-btns text-white", title = 'Configuración' }) => {
    return <BtnAgenda action={action} icon={faGear} color={color} title={title} />
}

export default ConfigBtn;