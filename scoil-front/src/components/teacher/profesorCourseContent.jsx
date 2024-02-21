// import Video from "../video";
import Video from "../courses/videoCourses";
import user from '@/assets/usuarios/user-2.svg';
// import CoursTittle from "./coursTittle";

import CoursTittle from "../courses/coursTittle";
import videoContent from '@/assets/background/video-content2.jpg';
// import Documents from "./documents";
import Documents from "../courses/documents";
import { useEffect, useState } from "react";
// import ProfesorModulesCourse from "./profesorModulesCourse";
import ProfesorModulesCourse from "../courses/profesorModulesCourse";

const ProfesorCourseContent = ({
    moduleBack=true,
 
}) => {
    const [videoTittle, setVideoTittle] = useState('Principios Básicos de Finanzas para Administradores');
    const [videoImage, setVideoImage] = useState(videoContent);  
    const [actualId, setActualId] = useState(0);
    const [text, setText] = useState({
        label: 'IR AL BACKEND',
        noCourse: 'Este curso no tiene ningun video asociado'
    })

    const [ teacher, setTeacher ] = useState([]);
    const [ idDocuments, setIdDocuments ] = useState(1);   
    const [ classStream, setClassStream ] = useState([]); 
    const [ curse, setCurse ] = useState([]);
    const [ modulescurse, setModulesCurse ] = useState([]);
 

    useEffect(() => {
        getInitial();
    }, [])

    const getInitial = () => {
        const response = {
            'teacher': {
                'name': 'Manuel Alberto',
                'lastName': 'Rosales San Agustín',
                'image': user.src,
            },
            'curse': {
                'title': '"Explorando el Mundo de las Matemáticas: Primer Grado en Acción" ',
                'duration': '15 h 36 min',
                'description': 'Este curso online de matemáticas de primer grado está diseñado para hacer que el aprendizaje sea interactivo, divertido y significativo para los estudiantes de primer grado, brindando una base sólida para su futuro desarrollo matemático.',
                'documents': [
                    {
                        'type': 'pdf',
                        'nameDocument': 'Nombre del documento',
                        'nameArchive': 'Nombre del archivo',
                        'size':'1.2 MB', 
                        'description': 'Material didáctico para recortar. Números para colorear del 1 al 10. ',
                        'rute': ''
                    }, {
                        'type': 'xls',
                        'nameDocument': 'Nombre del documento',
                        'nameArchive': 'Nombre del archivo',
                        'size':'1.2 MB', 
                        'description': ' Juego didáctico para hacer sumas y restas básicas. ',
                        'rute': ''
                    }, {
                        'type': 'doc',
                        'nameDocument': 'Nombre del documento',
                        'nameArchive': 'Nombre del archivo',
                        'size':'1.2 MB', 
                        'description': '' , 
                        'rute': ''
                    }, {
                        'type': 'xls',
                        'nameDocument': 'Nombre del documento',
                        'nameArchive': 'Nombre del archivo',
                        'size':'1.2 MB', 
                        'description': 'Póster Editable: Suma y Restas. ',
                        'rute': ''
                    }, {
                        'type': 'jpg',
                        'nameDocument': 'INE',
                        'nameArchive': 'INE-EJ.jpg',
                        'size':'1.2 MB', 
                        'description': 'Descripción del material didáctico, dudas y respuestas.',
                        'rute': ''
                    }, {
                        'type': 'pdf',
                        'nameDocument': 'Nombre del documento',
                        'nameArchive': 'Nombre del archivo',
                        'size':'1.2 MB', 
                        'description': 'Material didáctico para recortar. Números para colorear del 1 al 10. ',
                        'rute': ''
                    }, {
                        'type': 'xls',
                        'nameDocument': 'Nombre del documento 00000000 111111 2222222',
                        'nameArchive': 'Nombre del archivo en texto largo',
                        'size':'1.2 MB', 
                        'description': ' La educación para niños es un proceso fundamental que sienta las bases para su desarrollo cognitivo, emocional y social. En este contexto, los juegos didácticos han surgido como una herramienta pedagógica innovadora y efectiva para estimular el aprendizaje en los más pequeños. Estos juegos, diseñados específicamente para ser educativos y atractivos, ofrecen una experiencia de aprendizaje lúdica y envolvente que va más allá de la enseñanza tradicional. ',
                        'rute': ''
                    },
                ]
            },
            'jitsi': {
                'title': '¡Vamos a Contar! Introducción a los números del 1 al 10. ',
                'img': videoContent,
                'link': '', 
                'description': 'Subtítulo expresado en dos renglones que se reduce para los casos de responsividad en celulares, en donde mostrará menos texto del subtítulo.'
            },
            'modules': [
                {   
                    'id': 1,
                    'title': 'MÓDULO 1',
                    'name': 'Números y Operaciones Básicas',
                    'duration': '5 clases - 1 h 30 min',
                    'content': [
                       { 'jitsi': {
                            'title': '¡Vamos a Contar! Introducción a los números del 1 al 10.',
                            'img': videoContent,
                            'link': '', 
                            'description': 'Subtítulo expresado en dos renglones que se reduce para los casos de responsividad en celulares, en donde mostrará menos texto del subtítulo.'
                        }
                    },
                        {
                            'id': 1,
                            'tittle': '¡Vamos a Contar! Introducción a los números del 1 al 10.',
                            'duration': '15 min' 
                        }, {
                            'id': 2,
                            'tittle': 'Sumando y Restando Jugando: Operaciones básicas de adición y sustracción.',
                            'duration': '28 min' 
                        }, {
                            'id': 3,
                            'tittle': 'Aprender a Contar hasta 100: Explorando los números de dos dígitos.',
                            'duration': '25 min' 
                         }, 
                         //{
                        //     'id': 4,
                        //     'tittle': 'Geometría y Medidas Divertidas',
                        //     'duration': '19 min' 
                        // }, {
                        //     'id': 5,
                        //     'tittle': 'Cultivando un Liderazgo Efectivo',
                        //     'duration': '35 min' 
                        // },
                    ]
                },
                {   
                    'id': 2,
                    'title': 'MÓDULO 2',
                    'name': 'Geometría y Medidas Divertidas',
                    'duration': '14 clases - 3 h',
                    'content': [
                        {
                            'id': 6,
                            'tittle': 'Figuras Geométricas en Nuestro Entorno: Identificando círculos, cuadrados, triángulos y rectángulos.',
                            'duration': '15 min' 
                        }, {
                            'id': 7,
                            'tittle': '¡Vamos a Medir! Introducción a la longitud y comparación de objetos.',
                            'duration': '28 min' 
                        }, {
                            'id': 8,
                            'tittle': 'Explorando el Tiempo: Relojes y calendarios en el día a día.',
                            'duration': '25 min' 
                        },
                        // {
                        //     'id': 9,
                        //     'tittle': 'Optimizando la Productividad del Equipo',
                        //     'duration': '19 min' 
                        // }, {
                        //     'id': 10,
                        //     'tittle': 'Cultivando un Liderazgo Efectivo',
                        //     'duration': '35 min' 
                        // },
                    ]
                },
                {   
                    'id': 3,
                    'title': 'MÓDULO 3',
                    'name': 'Resolviendo Problemas con Pensamiento Lógico',
                    'duration': '7 clases - 2 h 35 min',
                    'content': [
                        {
                            'id': 11,
                            'tittle': 'Resolviendo Problemas Sencillos: Estrategias para abordar desafíos matemáticos.',
                            'duration': '15 min' 
                        }, {
                            'id': 12,
                            'tittle': 'Patrones y Secuencias: Desarrollando el pensamiento lógico.',
                            'duration': '28 min' 
                        }, {
                            'id': 13,
                            'tittle': 'Jugando con los Números: Problemas de aplicación en situaciones cotidianas.',
                            'duration': '25 min' 
                        },
                        // {
                        //     'id': 14,
                        //     'tittle': 'Optimizando la Productividad del Equipo',
                        //     'duration': '19 min' 
                        // }, {
                        //     'id': 15,
                        //     'tittle': 'Cultivando un Liderazgo Efectivo',
                        //     'duration': '35 min' 
                        // },
                    ]
                },
                {   
                    'id': 4,
                    'title': 'MÓDULO 4',
                    'name': 'Divertidas Actividades Prácticas y Juegos Interactivos',
                    'duration': '10 clases - 4 h 12 min',
                    'content': [
                        {
                            'id': 16,
                            'tittle': 'Juegos Matemáticos Online: Integrando el aprendizaje con actividades divertidas.',
                            'duration': '15 min' 
                        }, {
                            'id': 17,
                            'tittle': 'Manualidades Matemáticas: Creando y aprendiendo al mismo tiempo.',
                            'duration': '28 min' 
                        }, {
                            'id': 18,
                            'tittle': 'Excursión Matemática: Aplicando conocimientos en el mundo real.',
                            'duration': '25 min' 
                        },
                        // {
                        //     'id': 19,
                        //     'tittle': 'Optimizando la Productividad del Equipo',
                        //     'duration': '19 min' 
                        // }, {
                        //     'id': 20,
                        //     'tittle': 'Cultivando un Liderazgo Efectivo',
                        //     'duration': '35 min' 
                        // },
                    ]
                },
                {   
                    'id': 5,
                    'title': 'MÓDULO 5',
                    'name': 'Evaluación y Reforzamiento',
                    'duration': '10 clases - 4 h 12 min',
                    'content': [
                        {
                            'id': 19,
                            'tittle': 'Repaso General: Revisión de conceptos clave del curso.',
                            'duration': '15 min' 
                        }, {
                            'id': 20,
                            'tittle': 'Ejercicios de Práctica: Aplicación de habilidades adquiridas.',
                            'duration': '28 min' 
                        }, {
                            'id': 21,
                            'tittle': '¡Somos Matemáticos Exitosos!: Celebrando los logros y preparándonos para el siguiente nivel.',
                            'duration': '25 min' 
                        },
                        // {
                        //     'id': 19,
                        //     'tittle': 'Optimizando la Productividad del Equipo',
                        //     'duration': '19 min' 
                        // }, {
                        //     'id': 20,
                        //     'tittle': 'Cultivando un Liderazgo Efectivo',
                        //     'duration': '35 min' 
                        // },
                    ]
                },
                {   
                    'id': 6,
                    'title': 'MÓDULO 6',
                    'name': 'Evaluación y Reforzamiento 000001111222223333344444555566666677777788888',
                    'duration': '10 clases - 4 h 12 min',
                    'content': [
                        {
                            'id': 19,
                            'tittle': 'Repaso General: Revisión de conceptos clave del curso.',
                            'duration': '15 min' 
                        }, {
                            'id': 20,
                            'tittle': 'Ejercicios de Práctica: Aplicación de habilidades adquiridas.',
                            'duration': '28 min' 
                        }, {
                            'id': 21,
                            'tittle': '¡Somos Matemáticos Exitosos!: Celebrando los logros y preparándonos para el siguiente nivel.',
                            'duration': '25 min' 
                        },
                        // {
                        //     'id': 19,
                        //     'tittle': 'Optimizando la Productividad del Equipo',
                        //     'duration': '19 min' 
                        // }, {
                        //     'id': 20,
                        //     'tittle': 'Cultivando un Liderazgo Efectivo',
                        //     'duration': '35 min' 
                        // },
                    ]
                },
            ]
        };
        
        setModulesCurse(response.modules)
        setTeacher(response.teacher)
        setCurse(response.curse)
        setClassStream(response.jitsi)
    }

    const onModuleData = (id) => {  
        console.log(id); 
        getInitial();     
        setIdDocuments(id);
    }
    useEffect(() => {
        classStream
    }, [actualId])
    return(
        <>
            <div className="flex w-[973px]  ">
                <div className="flex w-[973px] flex-col  gap-[30px]">
                    <div>                    
                        <CoursTittle tittle={curse ? curse.title : ''} duration={curse ? curse.duration : ''} description={curse ? curse.description : '' } />                                  
                    </div>
                    <div className="w-full">    
                        <Video labels={text} tittle={classStream ? classStream.title : ''} img={classStream ? classStream.img : ''} description={classStream ? classStream.description : ''} link={classStream ? classStream.link : ''} />                 
                    </div>
                    <div className="mt-[0px]">                    
                        <Documents documents={curse && curse.documents ? curse.documents : []} />                    
                    </div>             
                </div>
                <div className="max-w-[290px] ">
{/* condicion */}
                    <div className="w-[290px] ml-[30px] " >
                        <ProfesorModulesCourse labels={text} teacher={teacher} modules={modulescurse} onModuleInfo={onModuleData} moduleBack={true} setActualId ={setActualId}/>
                    </div>                               
                </div>            
            </div>
        </>
    )
}

export default ProfesorCourseContent;