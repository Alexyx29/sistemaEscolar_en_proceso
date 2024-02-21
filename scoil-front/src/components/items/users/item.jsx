import ImageBase from "../imageBase";

const UserItem = ({ name = '', lastname = '', image = null, job = '', size = "50px", sizeText = "20px"}) => {
    return <div className="flex w-full flex-wrap items-center justify-start gap-x-2">
        <span className={`h-[${size}] w-[${size}] flex item-center justify-center overflow-hidden rounded-full text-dark-blue`}>
            <ImageBase image={image} name={name} lastname={lastname} size={size} sizeText={sizeText}/>
        </span>
        <div className="flex text-left justify-start flex-col max-w-[calc(100%-150px)]">
            <span className="text-sm font-bold text-dark-blue dark:text-white whitespace-nowrap w-full overflow-hidden text-ellipsis">{name ? name : ''} {lastname ? lastname : ''}</span>
            <span className="text-sm text-gray_alter dark:text-th whitespace-nowrap overflow-hidden text-ellipsis">{job ? job : ''}</span>
        </div>
    </div>
}

export default UserItem;