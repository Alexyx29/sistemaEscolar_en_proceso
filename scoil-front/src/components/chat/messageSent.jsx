const MessageSent = ({message}) => {
    return (
        <>
            <div className="flex justify-start my-[5px]">
                <div className="h-auto w-[5px] py-[5px]">
                    <div className="bg-yellow-bar w-[2px] h-full"></div>
                </div>                
                <div className="ml-[5px] flex">
                    <span className="font-open text-[12px] text-gray-message leading-5">{message}</span>
                </div>
            </div>
        </>
    )
}

export default MessageSent;