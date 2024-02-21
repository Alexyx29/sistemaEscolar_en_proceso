import Calendar from "../items/calendar";


const ClassCalendar = ({hCalendar}) => {
    return(
        <div className='bg-input-white rounded-[15px]  shadow-[0_0_17px_-7px_rgba(0,0,0,0.37)]  md:w-[97%] lg:w-[100%] xl:w-[100%] '>
            <div id="calSectionAula" className="cal ss:w-[310px]  w-[290px] sm:w-[471px]   md:w-[100%] lg:w-[100%] xl:w-[100%] md:h-[400px]  h-[330px] sm:h-[400px] ">        
                <Calendar showPlus={true} link='/calendario' hCalendar={hCalendar} margin="p-[20px] md:w-[97%] lg:w-[100%] xl:w-[100%] " ></Calendar>
            </div>
        </div>        
    )
}

export default ClassCalendar;