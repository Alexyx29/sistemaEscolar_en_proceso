import { faUndo } from "@fortawesome/free-solid-svg-icons";
import BtnAgenda from "../btnAgenda";

const UndoBtn = ({ action, send = false, title = 'Deshacer', color = 'bg-blue-menu text-white' }) => {
    return <BtnAgenda action={action} icon={faUndo} color={color} send={send} title={title} />
}

export default UndoBtn;