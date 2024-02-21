import { faSort } from "@fortawesome/free-solid-svg-icons";
import BtnAgenda from "../btnAgenda";

const OrderBtn = ({action}) => {
    return <BtnAgenda action={action} icon={faSort} color="bg-form-btns text-white" />
}

export default OrderBtn;