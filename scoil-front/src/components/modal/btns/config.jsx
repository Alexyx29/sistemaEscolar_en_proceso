import { faGear } from "@fortawesome/free-solid-svg-icons";
import Generic from "@/components/items/buttons/generic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ConfigBtn = ({ action, send= false, title = 'Configuración' }) => {
    return <Generic action={action} icon={<FontAwesomeIcon icon={faGear} />} send={send} title={title} />
}

export default ConfigBtn;