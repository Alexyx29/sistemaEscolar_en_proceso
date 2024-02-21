import starFill from '@/assets/icons/star-fill-white.svg';
import star from '@/assets/icons/star-white.svg';
import ClassQualification from './classQualification';
import Section from '../menu/seccion';
import { useEffect, useState } from 'react';

const ClassQualifications = ({qualificationsList, link='/'}) => {
    const [promedio, setPromedio] = useState(0);
    const [qualifications, setQualifications] = useState([{}]);
    const [text, setText] = useState({
        title: 'CALIFICACIONES',
        label: "PROMEDIO"
    });

    useEffect(() => {
        if(qualificationsList) {
            setQualifications(qualificationsList.qualifications);
            setPromedio(qualificationsList.average);
        }
    }, [qualificationsList]);

    const renderQualifications  = () => {
        return qualifications.map((qualification, index) => {
            return(
                <>
                    <ClassQualification  key={index} name={qualification.title} scale={qualification.scale} date={qualification.date}></ClassQualification>
                </>
            )
        })
    };

    var a = () => {
        return promedio <= 2 ? 1 : promedio <= 5 ? 2 : promedio < 8 ? 3 : promedio < 9 ? 4 : 5;        
    }
    const renderStars = () => {
        let stars = [];
        for(let i = 0; i < 5; i++){
            if(i < a()){
                stars.push(<img src={starFill.src} className='w-[16px] h-[16px]' key={i}/>);
            } else {
                stars.push(<img src={star.src} className='w-[16px] h-[16px]' key={i}/>);
            }
        }
        return <>{stars}</>;
    }
    
    return(
        <>
            <Section colors={'bg-input-white grow md:w-full lg:w-full xl:w-full'} showPlus={true} styleIcon='mr-[20px]' title={text.title} link={link} colorsLine="hidden" colorsMain="mt-[0px]" showLine={false}>
                <div className={'flex-col flex w-full mt-[-10px]'}>                                
                    <div className={'flex flex-col items-center justify-center ml-[0px] w-full bg-libellum-light mt-[15px] rounded-[10px]'}> 
                        <div className={'flex w-full justify-between my-[10px] px-[20px]  '}>
                            <div className={'flex flex-col justify-center'}>
                                <div>
                                    <label className={`font-open font-bold text-input-white text-[17px] `}>{text.label}</label>
                                </div>                            
                                <div className='flex mt-[0px]'>
                                    {renderStars()}                        
                                </div>              
                            </div>
                            <div className=''>
                                <label className={`font-open font-bold text-input-white text-[51px] leading-none`}>{promedio}</label>
                            </div>                                                
                        </div>                    
                    </div>
                    <div className={'mt-[27px] mb-[20px] overflow-auto news h-[205px] '}>
                        {renderQualifications()}                        
                    </div>
                </div>   
            </Section>              
        </>
    )
    
}

export default ClassQualifications;