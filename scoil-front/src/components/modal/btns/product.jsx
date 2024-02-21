import Generic from "@/components/items/buttons/generic";
import { faBuildingCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductBtn = ({ action, send, title='' }) => {
    return <Generic action={action} icon={<FontAwesomeIcon icon={faBuildingCircleArrowRight} />} send={send} title={title} />
}

export default ProductBtn;