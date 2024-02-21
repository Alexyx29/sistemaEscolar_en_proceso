import Generic from "./buttons/generic";
import { faCheck, faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import Line from "./line";



const FilesCourse = ({
    img,
    documentName,
    fileName,
    sizeFile,
    
    descrip,

}) => {
    return (        

                <>
                    <div className=" mt-[10px] w-[972px] ">
                        <div className={'flex-container flex mt-[0px] mb-[0px] w-[914px]  '}>                
                            <div className=" w-[230px] flex items-center">
                                <div className="image w-[49px] h-[51px] ">
                                    <img className="  " width={49} height={51} src={img}/>     
                                </div>
                                <div className=" flex flex-col ml-[15px]">
                                    <span className="font-open text-[14px] font-bold text-[#61676E]" >
                                        {documentName}
                                    </span>
                                    <span className="font-open text-[14px] text-[#61676E]">
                                        {fileName}
                                    </span>
                                    <span className="font-open text-[14px] text-[#61676E]">
                                        {sizeFile}
                                    </span>
                                </div>
                            </div>

                            <div className={'flex flex-col items-start justify-center ml-[44px] w-[640px]'}>                        
                                <span className="font-open text-[14px] text-[#61676E]" >
                                    {descrip}
                                </span>
                            </div>
                        </div>
                        
                        <div className='w-[full] z-10 mt-[10px] w-[914px] '>                        
                            <Line colors='bg-txtbtn-gray h-[1px]' width=''/>
                        </div>


                        
                                                                        
                        
                            
                    </div>                
                </>

    )
}

export default FilesCourse;