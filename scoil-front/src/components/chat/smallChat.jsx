import { useState } from "react";
import Input from "../form/input";
import Line from "../items/line";
import MessageSent from "./messageSent";
import MessageReceived from "./messageReceived";
import ImageBase from "../items/imageBase";

const SmallChat = ({userImage1='', userImage2=''}) => {
    const [text, setText] = useState({
        label: 'Escribe'
    });
    return(
        <>
        <div className="h-[50vh] " >
            <div className=" h-[66vh] rounded-[15px] my-[30px] ">
                <div className="flex w-full  justify-center space-x-[5px] ">
                    <ImageBase image={userImage1.src} size="60px" className="w-[60px] h-[60px] mx-[5px]" ></ImageBase>
                    <ImageBase image={userImage2.src} size="60px" className="w-[60px] h-[60px] mx-[5px]" ></ImageBase>
                </div>
                <div className="mt-[20px]">
                    <Line colors='bg-[#ACACA2] h-[1px]' width='w-full'></Line>
                </div>
                <div className="generalScroll h-[44vh] overflow-y-scroll">
                    <MessageSent message='Ut ullamcorper elit eu purus posuere porta. Mauris sed lacus vehicula?'></MessageSent>
                    <div className="my-[20px]"> {/* ESPACIADO DE MENSAJES RECIBIDOS PROVICIONAL */}
                        <MessageReceived message='Si!'></MessageReceived>
                        <MessageReceived message='Ut ullamcorper elit eu purus posuere porta. Mauris sed lacus vehicula?'></MessageReceived>
                    </div>                    
                    <MessageSent message='Mauris sed lacus vehicula. Muchas Gracias!!!'></MessageSent>
                </div>
                <div className="mb-[20px]">
                    <Line colors='bg-[#ACACA2] h-[1px]' width='w-full'></Line>
                </div>
                <div className="shadow-[2px_5px_20px_-5px_rgba(0,0,0,0.37)] rounded-[15px]">
                    <Input height='h-[46px]' rounded='rounded-[15px]' placeholder={text.label}></Input>
                </div>
            </div>
            </div>
        </>
    )
}

export default SmallChat;