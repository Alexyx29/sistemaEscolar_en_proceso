import ImageBase from "../items/imageBase";

const Avatar = ( { user, size = "64px", sizeText = "35px" }) => {

    return <div className="h-[61px] w-[61px] items-center bg-btn-image rounded-[50%] text-white flex text-sm font-medium justify-center relative">
        <ImageBase image={user.image} name={user.name} lastname={user.lastname} size={size} sizeText={sizeText}/>
    </div>;
}
export default Avatar;