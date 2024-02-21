import ImageBase from "../imageBase";

const UserIcon = ( { id="", value="", checked = true, index=0, removeChecks = () => {}, image, name, lastname, showIcon = false, job = '', symbol = '-', showCheck = true  } ) => {
    return (
        <div className="flex items-center justify-start mb-8 cursor-pointer">
            { showCheck && (
                <div className="text-center py-4 h-14 flex items-center justify-end dark:text-white mr-3" >
                    <label htmlFor={id} className="relative inline-flex items-center cursor-pointer">
                        <input id={id} name="checkbox-user-selected[]" type="checkbox" value={value} checked={checked} className="sr-only peer" data-id={index} onChange={removeChecks} />
                        { showIcon && (
                            <span className="text-[30px]">{symbol}</span>
                        )}
                    </label>
                </div>
            )}
            <span className="h-[50px] w-[50px] mr-3 flex item-center justify-center overflow-hidden rounded-full text-dark-blue">
                <ImageBase image={image} name={name} lastname={lastname} size="50px" sizeText="30px"/>
            </span>
            <div className="flex text-left justify-start flex-col">
                {/* <span className="text-sm font-bold text-dark-blue dark:text-white">{name ? name + ' ' + lastname : ''}</span>
                <span className="text-sm text-gray_alter dark:text-th">{job ? job : ''}</span> */}
                <span className="text-sm font-bold text-dark-blue dark:text-white">{name ? name : ''}</span>
                <span className="text-sm text-gray_alter dark:text-th">{lastname ? lastname : ''}</span>
            </div>
        </div>
    )
}

export default UserIcon;