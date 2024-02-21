import Generic from "@/components/items/buttons/generic";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LinkIcon = ({ action, send }) => {
    return <Generic action={action} icon={<FontAwesomeIcon icon={faShare} />} send={send} />
}

export default LinkIcon;