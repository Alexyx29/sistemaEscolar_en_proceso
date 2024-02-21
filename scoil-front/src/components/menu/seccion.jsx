import Link from 'next/link';
import plus from '../../assets/icons/plus.svg'
import Line from '../items/line';
import BodyModules from '../items/bodyModule';

const Section = ({children, colors, title='', showPlus = false, link = null, width="w-[86%]", bg = "bg-[#F7F8F9]", widthSection="w-full", showSection = true, marggin, showLine = true, styleIcon='mr-[30px]'}) => {

    return (
        <>
        {showSection && (
            <aside className={`${colors} w-auto  flex ${bg} p-0 rounded-[10px] shadow-lg  `}>
                <div className='flex flex-col items-center   h-full w-full'> 
                {title &&(
                    <>
                        <div className='flex w-full   mt-[25px]   '>
                            <label className="text-section-title w-full font-open text-[24px] font-bold ml-[30px] ss:ml-[15px]">{title}</label>
                            { showPlus && (
                                <>
                                { link && (
                                    <Link href={link} className=''>
                                        <button className='flex items-center mr-[30px]  w-[29px] '>
                                            <img src={plus.src} className='w-[29px] mr-[30px] cursor-pointer z-10  '/> 
                                        </button>
                                    </Link>
                                )}
                                { !link && (
                                    <label className={`flex items-center w-[29px] ${styleIcon}`}> <img src={plus.src} className='w-[29px] mr-[30px] cursor-pointer'/>{link} </label>
                                )}
                                </>
                            )}
                        </div>
                        {showLine && (
                            <div className='w-full mt-[10px] px-[30px] ss:px-[15px]'>                        
                                <Line colors='bg-txtbtn-gray h-[1px]' width='w-full'></Line>
                            </div>
                        )}                        
                    </>
                )}                
                 {/* w-[100%] px-[30px]     */}
                    <main className={`${width} flex grow flex-col ss:w-[90%]  `}>
                        {children}
                    

                        </main>
                    </div>                                    
                </aside>
            )}
        </>
    )
}

export default Section;