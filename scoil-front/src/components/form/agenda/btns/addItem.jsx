import Generic from "@/components/items/buttons/generic";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddItem = ({action}) => {
    return (
        <div className={`bg-blue-menu hover:bg-blue-menu w-5 h-5 rounded-full ml-[10px] flex items-center justify-center tex-center`}>
            <Generic action={action} icon={<FontAwesomeIcon icon={faPlus} className="text-[12px] ml-[1px]" />} />
        </div>
    );
}

export default AddItem;