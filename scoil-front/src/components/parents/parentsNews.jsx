import ParentsNew from "./parentsNew";
import prof1 from '@/assets/users/prof-1.svg';
import prof2 from '@/assets/users/prof-2.svg';
import prof4 from '@/assets/users/prof-4.svg';
import may from '@/assets/background/may-full.jpg';
import sport from '@/assets/background/deportes-full.jpg';
import info from '@/assets/background/info-full.jpg';
import { useEffect, useState } from "react";

const ParentsNews = ({newsList, displayedNotice}) => {
    const [notices, setNotices] = useState([]);

    useEffect(()=> {
        if(newsList){
            setNotices(newsList);
        }        
    },[newsList]);

    const userImages = [prof1.src, prof2.src, prof1.src, prof4.src, prof1.src, prof2.src, prof1.src, prof4.src, prof1.src, prof2.src, prof1.src, prof4.src, prof1.src, prof2.src, prof1.src, prof4.src]; //ASIGNACIÖN DE IMÁGENES PROVICIONAL
    const themeImages = [null, may.src, sport.src, info.src, null, null, sport.src, null, null, may.src, null, info.src, null, may.src, null, info.src]; //ASIGNACIÖN DE IMÁGENES PROVICIONAL

    const renderSelectedNew = () => {
        return notices.map((notice, index) => {
            return(
                <>  
                    {(index == displayedNotice) && 
                        <ParentsNew key={index} name={notice.name} role={notice.role} time={notice.time} icon={notice.calendar} title={notice.title} userImg={userImages[index]} themeImg={themeImages[index]} content={notice.content}></ParentsNew>
                    }                    
                </>
            )
        })
    }

    const renderNews = () => {
        return notices.map((notice, index) => {
            return(
                <>  
                    {(index != displayedNotice) && 
                        <ParentsNew key={index} name={notice.name} role={notice.role} time={notice.time} icon={notice.calendar} title={notice.title} userImg={userImages[index]} themeImg={themeImages[index]} content={notice.content}></ParentsNew>
                    }                    
                </>
            )
        })
    }

    return(
        <>
            <div className="flex flex-col gap-[40px]">                  
                {renderSelectedNew()}                
                {renderNews()}                
            </div>            
        </>
    )
}

export default ParentsNews;