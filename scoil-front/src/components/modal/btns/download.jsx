import Generic from "@/components/items/buttons/generic";
import { faCloudDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Download = ({ action, send, title = 'Descargar' }) => {
    return <Generic action={action} icon={<FontAwesomeIcon icon={faCloudDownload} />} send={send} title={title} />
}

export default Download;