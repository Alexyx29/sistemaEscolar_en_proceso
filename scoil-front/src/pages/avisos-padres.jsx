import bgScoil from '../assets/background/bg_1.jpg';
import ParentsLayout from "@/layout/parentsLayout";
import { useEffect, useState } from "react";
import responseNews from '../../test_data/dataNews.json';
import ParentsNews from '@/components/parents/parentsNews';
import { useRouter } from 'next/router';
import responseParent from '../../test_data/dataParent.json';

const NewsParents = () => {
    const router = useRouter();
    const idNew = router.query.id;

    const [idButton, setIdButton] = useState(1);
    const [dataNews, setDataNews] = useState('');
    const [parent, setParent] = useState('');
    

    useEffect(() => {
        setDataNews(responseNews.news);
        setParent(responseParent.parent);
    },[responseNews]);


    return(
        <>
            <div className="flex w-[full] h-[100vh]" style={{backgroundImage: `url(${bgScoil.src})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                {/* Contenido dentro de Layout*/}
                <ParentsLayout stylesInput= {'w-[878px] '}  botonSeleccionado={idButton} parent={parent} derecha={null} widthBody='2xl:w-[1293px]' cuerpo ={
                    <>                    
                        <ParentsNews newsList={dataNews} displayedNotice={idNew}></ParentsNews>
                    </>
                } 
                />                                                    
            </div>            
        </>
    );
}

export default  NewsParents;



