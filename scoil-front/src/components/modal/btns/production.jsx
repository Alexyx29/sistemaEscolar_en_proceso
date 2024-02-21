import Generic from "@/components/items/buttons/generic";
import { faArrowRightToCity } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductionBtn = ({ action, send, title='' }) => {
    return <Generic action={action} icon={<FontAwesomeIcon icon={faArrowRightToCity} />} send={send} title={title} />
}

export default ProductionBtn;