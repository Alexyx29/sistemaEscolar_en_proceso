import { faSearch } from "@fortawesome/free-solid-svg-icons";
import BtnAgenda from "../btnAgenda";

const SearchBtn = ({action}) => {
    return <BtnAgenda action={action} icon={faSearch} color="bg-form-btns dark:text-white" />
}

export default SearchBtn;