import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import BtnAgenda from "../btnAgenda";

const FileBtn = ({action}) => {
    return <BtnAgenda action={action} icon={faPaperclip} color="bg-form-btns text-white" />
}

export default FileBtn;