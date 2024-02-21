import Status from "@/components/form/status";
import ImageBase from "../imageBase";
import UserItem from "./item";

const UserSwitch = ( { id="", value="", checked = true, updateType = () => {}, image, name, lastname, job = '', mb='mb-8' } ) => {
    return (
        <div className={`flex items-center justify-start ${mb} cursor-pointer gap-x-4 w-full`}>
            <div className="w-[50px]">
                <Status label_active={''} status_parent={checked} label_inactive={''} id={`${id}_${value}`} value={value} showPadding={false} change={updateType} />
            </div>
            <UserItem name={name} lastname={lastname} image={image} job={job} />
        </div>
    )
}

export default UserSwitch;