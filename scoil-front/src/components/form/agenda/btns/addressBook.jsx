import { faAddressBook } from "@fortawesome/free-regular-svg-icons";
import BtnAgenda from "../btnAgenda";

const AddressBookBtn = ({action, title = 'Ver categorías'}) => {
    return <BtnAgenda action={action} icon={faAddressBook} color="bg-form-btns text-white" title={title} />
}

export default AddressBookBtn;