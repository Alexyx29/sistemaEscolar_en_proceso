import { useState, useEffect } from "react";
import LayoutTeacher from "@/layout/layaoutScoilTeacher";
import trashRed from '@/assets/icons/trashRed.svg'
import editIcon from '@/assets/icons/editIcon.svg'
import Discusion from '@/components/foro/discusion';
import ArrowBlueDown from '@/assets/users/arrowBlueDown';
import ArrowBlueRight from '@/assets/users/arrowBlueRight'; 
//  import Discusion from "@/components/items/foro/discusion";
//  import ArrowBlueDown from "@/components/items/arrowBlueDown";
//  import ArrowBlueRight from "@/components/items/arrowBlueRight";
import userDos from '@/assets/usuarios/father.jpg'
//  import { useSelectedDetail } from "@/hooks/contextBarPurple";
import { useSelectedDetail } from '@/hooks/contextBarPurple';
import messageForo from '@/assets/icons/messageForo.svg'

const ForoComponent = ({categoryInitial=1,  editButtons=true,}) => {
   const [section, setSection] = useState(1);
   const [search, setSearch] = useState(false);
   const [tittle, setTittle] = useState('Mi tablero');
   const [cate, setCate]= useState([]);
   const [ levelCategory, setLevelCategory] = useState(1);
   const [ actualC, setActualC] = useState(categoryInitial);
   const [ statusMovil, setStatusMovil ] = useState(0);
   const [ actualCategory, setActualCategory ] = useState(1);
   const [ actualCategoryTopic, setActualCategoryTopic] = useState(0);
   const [ actualItem, setActualItem ] = useState(-1);
   const [ page, setPage ] = useState(1);
   const [ loadItems, setLoadItems ] = useState(true);// Loader de la segunda columna
   const [ actualTema, setActualTema ] = useState({});
   const [ discusiones, setDiscusiones ] = useState([])

    // const changeCategory = (id) => {
    //     setActualCategory(id);
    //     setActualCategoryTopic(id)
    //     setActualItem(-1);
    //     setPage(1);
    //     loadItemsList(id);
    //     setActualTema({})
    //     setDiscusiones([])
    // }


    const handleButtonClickInBarraMenu = (Id) => {
        setSection(Id);
        updateHeader(Id);
    }

    const updateHeader = (ID) =>{
        switch (ID) {
            case 1: setSearch(false) ;setTittle('Mi tablero') ;break;
            case 2: setSearch(true) ;setTittle('Aula Virtual') ;break;
            case 3: setSearch(true) ;setTittle('Cursos Online') ;break;            
            case 4: setSearch(true) ;setTittle('Calendario') ;break;            
            default:                
        }
    }

    useEffect(()=>{
        loadItemsList(actualCategory, actualItem);
     //}, [ query, page, orderColumn, orderType, actives ]);
    }, [ "" ]);

    const loadItemsList = (id=1, contact=0) => {
        setLoadItems(true);
        // json de temas
        // if(system_selected && !l){
        //     setL(true)
        //     let search = (query) ? `${system_selected.token}/${query}` : system_selected.token
        //     getListApi(`${prefix}/list/${id}/${page}/${orderColumn}/${orderType}/${actives}/`, r => {
        //         setTemas(r);
        //         setIdA(contact)
        //         setRedraw(redraw + 1);
        //     }, search);
        // }
    } 

    const text = {
        topic:"TÓPICOS Y TEMAS",
    }

    const items = [
        {
          principal: "CONTABILIDAD Y TECNOLOGIA",
          icon: <ArrowBlueDown />,
          icon2: <ArrowBlueRight />,

          details: [
            {
              id: 1,
              theme: "Tendencias Contables: Tecnología y R...",
              duracion: "29/10/2023",
              hour: "14:50",
              name: "Daniela Marlene Ramírez Zamudio",
            },
            {
                "id": 2,
                "theme": "Blockchain y Contabilidad",
                "duracion": "26/10/2023",
                "hour": "21:05",
                "name": "Alberto Ramírez Sánchez",
            },
            {
                "id": 3,
                "theme": "Tecnología de Contabilidad en la Nube",
                "duracion": "24/10/2023",
                "hour": "15:30",
                "name": "Alejandra Rojas",
            },
            {
                "id": 4,
                "theme": "Contabilidad Móvil",
                "duracion": "23/10/2023",
                "hour": "23:48",
                "name": "Ángela Aguilar Muñoz",
            },
          ],
        },

        {
            principal: "ÉTICA EN LA CONTABILIDAD",
            icon: <ArrowBlueDown />,
            icon2: <ArrowBlueRight />,
 
            details: [
              {
                id: 5,
                theme: "Tendencias Contables: Tecnología y R...",
                duracion: "29/10/2023",
                hour: "14:50",
                name: "Daniela Marlene Ramírez Zamudio",
              },
            ],
          },

          {
            principal: "REGULACIONES Y NORMATIVAS",
            icon: <ArrowBlueDown />,
            icon2: <ArrowBlueRight />,
 
            details: [
              {
                id: 6,
                theme: "Tendencias Contables: Tecnología y R...",
                duracion: "29/10/2023",
                hour: "14:50",
                name: "Daniela Marlene Ramírez Zamudio",
              },
            ],
          },

          {
            principal: "CONTABILIDAD FISCAL Y TRIBUTARIA",
            icon: <ArrowBlueDown />,
            icon2: <ArrowBlueRight />,
 
            details: [
              {
                id: 6,
                theme: "Tendencias Contables: Tecnología y R...",
                duracion: "29/10/2023",
                hour: "14:50",
                name: "Daniela Marlene Ramírez Zamudio",
              },
            ],
          },

          {
            principal: "CONTABILIDAD AMBIENTAL",
            icon: <ArrowBlueDown />,
            icon2: <ArrowBlueRight />,
 
            details: [
              {
                id: 7,
                theme: "Tendencias Contables: Tecnología y R...",
                duracion: "29/10/2023",
                hour: "14:50",
                name: "Daniela Marlene Ramírez Zamudio",
              },
            ],
          },

         
      ];

      const usuario = {
        image: userDos.src,
      };
   
      const discusion = [
        {
            id: 1,
//             // usuario: {
//                 // image: "src\assets\users\user-2.svg",
//                 // image:"C:/Users/vbañuelos/Desktop/imec/imec-front/src/assets/users/user-2.svg",
//                 image:"C:\\Users\\vbañuelos\\Desktop\\imec\\imec-front\\src\\assets\\users\\user-2.svg",
//             //   },
            name_user: "Daniela Marlene",
            lastname: "Ramírez Zamudio",
            created_at: "29-10-2023 14:30:00", 
            comentario: "En la actualidad, la contabilidad se encuentra en un momento de cambio sin precedentes debido a la tecnología y las modificaciones regulatorias. En este foro, exploraremos cómo la automatización, la inteligencia artificial y las regulaciones financieras están remodelando la profesión contable y la gestión financiera en las empresas. ¿Cómo crees que estas tendencias estén impactando la contabilidad?",
            autor: false,
        },
        {
            id: 2,
            usuario: {
                image: userDos.src,
              },
            name_user: "Lara Sofía",
            lastname: "Gutiérrez Rodríguez",
            created_at: "27-10-2023 19:12", 
            comentario: "Estas tendencias transforman la contabilidad al simplificar tareas, lo que permite a los contadores enfocarse en análisis estratégicos. Sin embargo, plantean desafíos éticos y exigen una adaptación constante a las regulaciones financieras. Para mantenerse relevantes, los contadores deben adquirir habilidades en análisis de datos y comprender la intersección de tecnología y ética.",
            autor: true,
        },
        {
            id: 3,
            usuario: {
                image: userDos.src,
              },
            name_user: "Ángela",
            lastname: "Aguilar Muñoz",
            created_at: "26-10-2023 21:05", 
            comentario: "La implementación de la inteligencia artificial en la toma de decisiones financieras, aunque mejora la precisión y velocidad, plantea desafíos éticos en términos de transparencia y sesgos en los datos. Los algoritmos pueden ser difíciles de comprender, lo que genera preocupaciones sobre la responsabilidad en las decisiones, pero ¿qué desafíos éticos pueden surgir cuando se utilizan algoritmos para la toma de decisiones financieras?",
            autor: false,
        },
        {
            id: 4,
            usuario: {
                image: userDos.src,
              },
            name_user: "Angel",
            lastname: "Villa",
            created_at: "25-10-2023 09:15", 
            comentario: "Es fascinante cómo la inteligencia artificial está cambiando la dinámica en la toma de decisiones financieras. La precisión y velocidad mejoradas son beneficios claros, pero estoy muy interesado en explorar cómo abordar la cuestión de la transparencia. La comprensión de los algoritmos es esencial para garantizar la responsabilidad en las decisiones financieras. Me pregunto si debería haber algún tipo de regulación o normativa que exija que las empresas proporcionen explicaciones claras sobre cómo funcionan sus algoritmos, especialmente en entornos críticos como la inversión y la gestión de fondos.",
            autor: false,
        },
        {
            id: 5,
            usuario: {
                image: userDos.src,
              },
            name_user: "Federico",
            lastname: "Díaz Acuña",
            created_at: "22-10-2023 15:30", 
            comentario: "La cuestión de los sesgos en los datos utilizados en algoritmos de toma de decisiones financieras me parece especialmente importante. Si los datos de entrenamiento tienen sesgos, los resultados pueden ser injustos y perjudiciales. Sería valioso explorar en detalle cómo las empresas pueden abordar estos sesgos y garantizar una toma de decisiones equitativa. ¿Hay estrategias efectivas para mitigar los sesgos en los datos o para identificar y corregir sesgos potenciales en los algoritmos?",
            autor: false,
        },
        {
            id: 6,
            usuario: {
                image: userDos.src,
              },
            name_user: "Alberto",
            lastname: "Ramírez Sánchez",
            created_at: "22-10-2023 15:30", 
            comentario: "Aunque algunos están emocionados por las tendencias tecnológicas en la contabilidad, tengo preocupaciones. La automatización puede llevar a la pérdida de empleos, y las regulaciones financieras complejas pueden ser abrumadoras, a menudo favoreciendo a las grandes empresas. Es importante abordar los desafíos y preocupaciones que estas tendencias pueden generar en la contabilidad.",
            autor: false,
        },
       
       //objetos de discusión
      ];

  


    const [iconosActivos, setIconosActivos] = useState(Array(items.length).fill(null));
    const [detailIndexActivo, setDetailIndexActivo] = useState(null);
//   //   const [selectedDetailId, setSelectedDetailId] = useState(-1); 
      const [selectedDetailId, setSelectedDetailId] = useState(-1);
  const [selectedDetailIds, setSelectedDetailIds] = useState([]);

    // const { selectedDetailId, selectedDetailIds, setSelectedDetailId, setSelectedDetailIds } = useSelectedDetail();
   
    const handleIconoClick = (index, detailId) => {
        const nuevosIconosActivos = iconosActivos.map((estado, i) => i === index ? !estado : false);
        setIconosActivos(nuevosIconosActivos);
        const newIconosActivos = [...iconosActivos];         newIconosActivos[index] = !newIconosActivos[index];         setIconosActivos(newIconosActivos);
        setDetailIndexActivo(iconosActivos[index] ? null : index);
        // Actualiza el estado selectedDetailId soloi se hace clic en un detalle diferente al actual          // setSelectedDetailId(selectedDetailId === detailId ? -1 : detailId);        
    };

    const handleBarPurple = (index, detailId) => {
        console.log('Before Update:', selectedDetailIds);
        const newSelectedDetailIds = [...selectedDetailIds];
        newSelectedDetailIds[index] = newSelectedDetailIds[index] === detailId ? -1 : detailId;
        setSelectedDetailIds(newSelectedDetailIds);
        console.log('After Update:', newSelectedDetailIds);
    };
   

    return(
        <>
            <div className="bg-[#ffffff] w-[100%] flex mt-[px] h-[84vh] rounded-[10px] shadow-2xl " >
                <div className="col1 w-[378px] relative bg-[#ffffff] h-full overflow-hidden pb-[0px] pt-[32px] rounded-[10px]  listItems">
                    <span className="font-open font-bold text-[21px] text-[#6F6F6F] ml-[40px]   " >
                        {text.topic}
                    </span>                                              
                    <div className= " w-[290px]   border border-[#707070] ml-[40px] mr-[40px] mt-[30px]  "></div>          
                    <div className=" news itemsList overflow-auto h-[65vh]  ">
                        {items.map((item, index) => (
                            <div key={index}>
                                <div className=" flex mt-[40px] font-open font-semibold text-[16px] text-[#818181] " >
                                    <button onClick={() => handleIconoClick(index, -1)} className="w-[13px] ml-[12px]">
                                        {iconosActivos[index] ? item.icon : item.icon2}
                                    </button>
                                    <div className="ml-[13px]" >{item.principal}</div>
                                </div>
                                {iconosActivos[index] && (
                                    item.details.map((detail) =>(
                                        <div key={detail.id}>
                                            {/* empieza el caos */}

                                            <button className="flex" onClick={() => handleBarPurple(index, detail.id)}  >
                                                <div className={`barPurple w-[6px] h-[60px] mt-[30px]  ${selectedDetailIds[index] === detail.id ? 'bg-[#6781FE]' : 'bg-[#ffffff]'}`}></div>
                                                <div className="ml-[44px] font-open mt-[30px] text-left">
                                                    <div className="font-bold text-[14px] text-[#223955]  ">{detail.theme}</div>
                                                    <div className="font-semibold text-[13px] text-[#223955]  ">{detail.duracion} {detail.hour}</div>
                                                    <div className="font-semibold text-[13px] text-[#A2ACB7]  ">{detail.name}</div>
                                                </div>
                                            </button>
                                        </div>
                                    ))
                                )}
                            </div>
                        ))}
                        {/* {loadItems && <div className="h-fit py-10 w-full"></div>} */}
                    </div>
                </div>
                <div className="flex w-[73%] flex-col rounded-full" >
                    <div className="flex" >
                        <div className="flex flex-col ml-[55px] mt-[10px] mb-[15px] " >
                            <span className="font-open font-bold text-[20px] text-[#223955]  " >
                                {"Tendencias Contables: Tecnología y Regulaciones"}
                            </span>
                            <span className="font-open text-[16px] text-[#223955]">
                                {"Licenciatura en Informática • Licenciatura en Contaduría • Licenciatura en Administración"}
                            </span>
                            <span className="font-open text-[14px] text-[#A2ACB7]" >
                                {"Anzures"} - {"Vallejo"} - {"Oriente"}
                            </span>
                        </div>
                        <span className="w-[33%] flex items-end justify-end  mb-[20px] ">
                            {editButtons && (
                                    <span className="flex">
                                    <button>
                                      <img src={editIcon.src} alt="" className="mr-[10px]" />
                                    </button>
                                    <button>
                                      <img src={trashRed.src} alt="" className="mr-[10px]"/>
                                    </button>
                                  </span>
                            )}
                            <img src={messageForo.src} alt="" className="w-[36px] h-[36px] mr-[50px]  " />
                        </span>
                    </div>
                    <div className="w-full h-full rounded-br-[10px] bg-[#F6F8F9]" >
                        <div className="news discusionItem  ml-[50px] mr-[50px] bg-[#F6F8F9] rounded-br-[10px] h-[67vh] overflow-hidden overflow-y-auto " >
                            {/* <div className="w-[100%] "> */}
                                {discusion.map((discusionItem) => (
                                    <Discusion
                                        key={discusionItem.id}
                                        discusion={discusionItem}
                                        // image={usuario.image}
                                    />
                                ))}
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>       
        </>
    );
}




export default  ForoComponent;



