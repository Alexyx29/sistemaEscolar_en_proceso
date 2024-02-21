
import MyEditor from "@/assets/editor/editor";

const SubmitTask = ({
    theme,
    state,

    publica,
    publicD,
    publicH,

    installment,
    installmentD,
    installmentH,
    
    points,
    pointsN,

    description,
    comment
    
}) => {


    const textColor =
        state === "ENTREGADO" ? "text-[#80BF1B]" :
        state === "PENDIENTE" ? "text-[#FFD800]" :
        "text-[red-500]";
        // `


    return(
        <>
            

            <div className="w-[1293px] h[1545px] bg-[#fff] rounded-[10px] mt-[45px] shadow-2xl " >
                <div className="  mx-[28px]" >
                    <div className="flex items-end">
                        <span className=" w-[1232px] mt-[25px]  text-[#535353] text-[32px] font-open font-bold overflow-hidden overflow-ellipsis line-clamp-1" >
                            {theme}
                        </span>
                        <span className={`w-[86px] ${textColor} text-[14px] font-open font-bold ml-[50px] uppercase flex justify-end`} >
                            {state}
                        </span>
                    </div>
                    <div className="flex flex-col" >
                        <span  className="text-[#ACACA2] mt-[3px] text-[16px] font-open  ">
                            {publica} {publicD} {publicH}
                        </span>
                        
                        <span className="text-[#ACACA2] text-[16px] font-open " >
                            {installment} {installmentD} {installmentH}
                        </span>
                        <div className="flex" >
                            <span className="text-[#6781FE] text-[16px] font-open mr-1" >
                                {points} 
                            </span>
                            <span className="text-[#6781FE] text-[16px] font-open font-bold " >
                                {pointsN}
                            </span>
                        </div>
                    
                    </div>

                    <div className="border border-[#707070] mt-[32px] mb-[32px] " ></div>

                    <div className="flex flex-col" >
                        <span className="text-[#6F6F6F] w-[1232px]   text-[18px] font-open " >
                            {description}
                        </span>

                        <span className="mt-[32px] text-[#606060] font-open text-[14px]" >
                            {comment}
                        </span>
                    </div>
<div className=" mb-[32px]   " >
                        <MyEditor />
                        </div>
                
                    

                    <div className=" pb-[50px]">
                        <button className="w-[210px] h-[36px] mr-[32px] bg-[#4A61CE] rounded-[5px] font-open font-semibold text-[14px] text-[#FFFFFF]" >
                            {"Adjuntar Archivos"}
                        </button>

                        <button className="w-[210px] h-[36px]  bg-[#4A61CE] rounded-[5px] font-open font-semibold text-[14px] text-[#FFFFFF]" >
                            {"Entregar"}
                        </button>
                    </div>
                </div>
            </div>


        </>
    )
}

export default SubmitTask;