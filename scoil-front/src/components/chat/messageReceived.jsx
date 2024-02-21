const MessageReceived = ({message}) => {
    return (
        <>
            <div className="flex justify-end my-[5px]">                
                <div className="mr-[5px] flex">
                    <span className="font-open text-[12px] text-gray-message leading-5">{message}</span>
                </div>
                <div className="h-auto w-[5px] py-[5px]">
                    <div className="bg-yellow-bar w-[2px] h-full"></div>
                </div>
            </div>
        </>
    )
}

export default MessageReceived;