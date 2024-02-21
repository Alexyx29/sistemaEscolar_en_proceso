import Generic from "@/components/items/buttons/generic";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DeleteItem = ({action}) => {
    return (
        <div className={`bg-red-hover w-5 h-5 rounded ml-[10px] flex items-center justify-center text-white`}>
            <Generic action={action} icon={<FontAwesomeIcon icon={faTrashCan} className="text-[12px]" />} />
        </div>
    );
}

export default DeleteItem;