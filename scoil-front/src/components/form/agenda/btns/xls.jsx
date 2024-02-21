import { faFileExcel } from "@fortawesome/free-solid-svg-icons";
import BtnAgenda from "../btnAgenda";

const ExcelBtn = ({action, send = false, title = 'Descargar Excel' }) => {
    return <BtnAgenda action={action} icon={faFileExcel} color="bg-green-btn text-white" send={send} title={title}/>
}

export default ExcelBtn;