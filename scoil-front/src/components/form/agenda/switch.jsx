import Check from "../check";
import InputAgenda from "../inputAgenda";

const Switch = ({ tag, name, id, status, label = "",  showLeft = false }) => {

    return (
        <InputAgenda tag={tag} hasTags={false}>
            <div className="w-full pt-2 sm:pt-1  pb-0 sm:pb-0 flex items-center">
                <Check label={label} status={status} id={id} name={name} changeStatus={()=>{}} value={1} showPadding={false} height="" showLeft={showLeft} />
            </div>
        </InputAgenda>
    )
}

export default Switch;