const NotImage = ({firstname, lastname, size = "25px", color = '#00A3FF'}) => {
    return (
        <span className={`w-full h-full rounded-full text-white flex items-center justify-center flex-row leading-none p-1`} style={{backgroundColor: color, fontSize: size}}>
            {firstname && (<span className="leading-[0] relative">{firstname.charAt(0)}</span>)}
            {lastname && (<span className="leading-[0] relative">{lastname.charAt(0)}</span>)}
        </span>
    )
}

export default NotImage;