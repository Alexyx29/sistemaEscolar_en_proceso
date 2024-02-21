import { faCloudUpload } from "@fortawesome/free-solid-svg-icons";
import BtnAgenda from "../btnAgenda";

const UploadBtn = ({action, send = false }) => {
    return <BtnAgenda action={action} icon={faCloudUpload} color="bg-blue-menu" send={send} />
}

export default UploadBtn;