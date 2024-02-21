import ImageBase from "@/components/items/imageBase";

const ShowTeacher = ({name, lastName, image}) => {
    return(
        <>
            <div className='flex flex-col gap-[15px] bg-gray-light rounded-[10px] shadow-xl md:w-full lg:w-full xl:w-full '>
                <div class={'w-full flex  justify-center'}>
                    <div className={'flex w-[85%] sm:w-[90%] my-[15px]'}>
                        <div>
                            <ImageBase image={image}  name={name} lastname={lastName} size="60px"  className="rounded-[10px] " ></ImageBase>
                        </div>
                        <div className={'flex justify-between w-[80%] sm:w-[100%]'}>
                            <div className={'flex flex-col justify-center ml-[15px]  '}>
                                <label className={'font-open text-[21px] font-bold text-black-mat leading-none'}>{name}</label>
                                <label className={'font-open text-[11px] font-semibold text-gray-mat'}>{lastName}</label>
                            </div>                                                          
                        </div>                                
                    </div>                
                </div>
            </div>
        </>
    )
}

export default ShowTeacher;