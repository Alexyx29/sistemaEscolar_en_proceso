import { faCloudDownload } from "@fortawesome/free-solid-svg-icons";
import BtnAgenda from "../btnAgenda";

const DownloadBtn = ({action, send = false, title = 'Descargar' }) => {
    return <BtnAgenda action={action} icon={faCloudDownload} color="bg-green-btn" send={send} title={title}/>
}

export default DownloadBtn;