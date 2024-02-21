// import Section from "@/components/menu/section";
import Section from "../menu/seccion";
// import Line from "../line";
import Line from "../items/line";
import Document from "./document";

const Documents = ({documents, section = true}) => {
    return(
        /* RENDERIZADO DE DOCUMENTOS PROVISIONAL */
        <>    
            {section ?
                <Section colors={'bg-input-white grow w-[100%]'} width="w-full">
                    <div className=" mx-[30px] my-[30px]  ">
                        <div className="h-[408px] overflow-auto news " >
                            {documents.map((doc, index) => {
                                return (
                                    <div key={index}>
                                        <Document type={doc.type} nameDocument={doc.nameDocument} nameArchive={doc.nameArchive} size={doc.size} description={doc.description} />            
                                        {documents.length !== (index + 1) &&
                                            <div className='flex justify-center my-[15px]'>
                                                <Line colors='h-[1px] border border-txtbtn-gray' width='100%' />
                                            </div>
                                        }
                                    </div>
                                )
                            })}
                        </div>
                    </div>            
                </Section>                     
            :
                <>
                    {documents.map((doc, index) => {
                        return (
                            <div key={index}>
                                <Document type={doc.type} nameDocument={doc.nameDocument} nameArchive={doc.nameArchive} size={doc.size} description={doc.description} />            
                                {documents.length !== (index + 1) &&
                                    <div className='flex justify-center my-[15px]'>
                                        <Line colors='h-[1px] border border-txtbtn-gray' width='100%' />
                                    </div>
                                }
                            </div>
                        )
                    })}
                </>      
            }
        </>
    )
}

export default Documents;