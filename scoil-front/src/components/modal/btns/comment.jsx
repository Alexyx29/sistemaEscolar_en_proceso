import Generic from "@/components/items/buttons/generic";
import { faCommentMedical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Comment = ({ action, send }) => {
    return <Generic action={action} icon={<FontAwesomeIcon icon={faCommentMedical} />} send={send} />
}

export default Comment;