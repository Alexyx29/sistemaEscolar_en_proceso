import starFill from '@/assets/icons/star-fill-white.svg';
import star from '@/assets/icons/star-white.svg';
import ClassQualification from './classQualification';
import Section from '../menu/seccion';
import { useEffect, useState } from 'react';
import ClassAssists from './classAssistance';

const ClassAssistances = ({assistancesList, link}) => {
    const [assistances, setAssistances] = useState([{date: '', scale: null}]);
    const [text, setText] = useState({
        title: 'ASISTENCIA'        
    });

    useEffect(() => {
        if(assistancesList) {
            setAssistances(assistancesList);            
        }
    }, [assistancesList]);

    const renderAssistances = () => {
        return assistances.map((assistance, index) => {
            return(
                <>
                    <ClassAssists key={index} date={assistance.date} scale={assistance.scale} />
                </>
            )
        })
    };
    
    return(
        <>
            <Section showPlus={true} link={link} colors={'bg-input-white grow w-[48%] md:w-full lg:w-full xl:w-full'} title={text.title} colorsLine="hidden" colorsMain="mt-[0px]">
                <div className={'flex-col flex w-full h-[278px] '}>                                                    
                    <div className={'  h-[258px] overflow-auto news  '}>
                        {renderAssistances()}                        
                    </div>
                </div>   
            </Section>              
        </>
    )
    
}

export default ClassAssistances;