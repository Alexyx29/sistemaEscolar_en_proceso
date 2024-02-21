
import groupIcon from '@/assets/icons/group.svg';
import selectIcon from '@/assets/icons/select-icon.svg';
import React, { useState } from 'react';
import Document from '../courses/document';
import Line from '../items/line';
import Input from '../form/input';



const GradingHomework = ({
    
    
}) => {
    
       
    
const text= {

    tema:"Ejercicios Resueltos para Planificación Financiera a Largo Plazo",
    date:"10/09/2023 16:15",
    resume:"Lorem ipsum dolor sit amet consectetur adipiscing elit vulputate arcu, conubia litora risus morbi egestas himenaeos varius nostra, hendrerit et dictumst rhoncus proin dapibus est posuere. A commodo viverra aptent magnis dapibus primis eget eros, nisi aliquet vulputate duis pretium lectus potenti tellus curabitur, habitant nec mi nam nostra vestibulum sociis. Auctor purus lacinia blandit condimentum praesent facilisi commodo, semper penatibus ullamcorper netus suscipit in mus luctus, platea est elementum urna nullam gravida.",

    type:'pdf',
    nameDocument:'Nombre del documento',
    nameArchive:'Nombre del archivo',
    size:'1.2 MB',
    description:'Donec a turpis pulvinar, hendrerit nulla id, sollicitudin dui. Nam faucibus, diam et vehicula mattis, augue nunc blandit augue, ac bibendum nisi ex eu neque. Suspendisse potenti. Donec finibus varius magna vitae ultrices.',          
        
    type2:'xls',
    nameDocument2:'Nombre del documento',
    nameArchive2:'Nombre del archivo',
    size2:'1.2 MB',
    description2:'Donec a turpis pulvinar, hendrerit nulla id, sollicitudin dui. Nam faucibus, diam et vehicula mattis, augue nunc blandit augue, ac bibendum nisi ex eu neque. Suspendisse potenti. Donec finibus varius magna vitae ultrices.',          
       
    type3:'doc',
    nameDocument3:'Nombre del documento',
    nameArchive3:'Nombre del archivo',
    size3:'1.2 MB',
    description3:'Donec a turpis pulvinar, hendrerit nulla id, sollicitudin dui. Nam faucibus, diam et vehicula mattis, augue nunc blandit augue, ac bibendum nisi ex eu neque. Suspendisse potenti. Donec finibus varius magna vitae ultrices.',          
       
    type4:'xls',
    nameDocument4:'Nombre del documento',
    nameArchive4:'Nombre del archivo',
    size4:'1.2 MB',
    description4:'Donec a turpis pulvinar, hendrerit nulla id, sollicitudin dui. Nam faucibus, diam et vehicula mattis, augue nunc blandit augue, ac bibendum nisi ex eu neque. Suspendisse potenti. Donec finibus varius magna vitae ultrices.',          
       
    type5:'jpg',
    nameDocument5:'Nombre del documento',
    nameArchive5:'Nombre del archivo',
    size5:'1.2 MB',
    description5:'Donec a turpis pulvinar, hendrerit nulla id, sollicitudin dui. Nam faucibus, diam et vehicula mattis, augue nunc blandit augue, ac bibendum nisi ex eu neque. Suspendisse potenti. Donec finibus varius magna vitae ultrices.',   
    }

const teacher = {
    theme:"Investigación sobre Modelos Matemáticos en la Gestión Empresarial",
    published:"Publicado: 15/11/2023 10:00",
    date:"Fecha de entrega: 20/11/2023 11:30",
    description:"Lorem ipsum dolor sit amet consectetur adipiscing elit vulputate arcu, conubia litora risus morbi egestas himenaeos varius nostra, hendrerit et dictumst rhoncus proin dapibus est posuere. A commodo viverra aptent magnis dapibus primis eget eros, nisi aliquet vulputate duis pretium lectus potenti tellus curabitur, habitant nec mi nam nostra vestibulum sociis. Auctor purus lacinia blandit condimentum praesent facilisi commodo, semper penatibus ullamcorper netus suscipit in mus luctus, platea est elementum urna nullam gravida.",
    comitAlumno:"Comentario del alumno",
    textAlumno:"Lorem ipsum dolor sit amet consectetur adipiscing elit tempus bibendum tortor senectus, pulvinar eget inceptos netus cras arcu praesent magna diam pharetra. Himenaeos torquent gravida velit sociosqu arcu lacinia enim dictumst molestie convallis curabitur tempus, egestas suspendisse sapien ad volutpat leo maecenas nibh in vehicula. Ullamcorper dis pellentesque ornare ultrices magna hac fringilla lacus mollis bibendum, varius blandit dictumst imperdiet pretium mi non leo aliquam, condimentum eros tincidunt est risus fermentum metus vel curae. Massa justo class risus libero ligula auctor fusce habitasse natoque parturient, facilisis aptent fames duis turpis eleifend leo neque.",
    commit:"Comentario",
    commitTeacher:"Lorem ipsum dolor sit amet consectetur adipiscing elit tempus bibendum tortor senectus, pulvinar eget inceptos netus cras arcu praesent magna diam pharetra. Himenaeos torquent gravida velit sociosqu arcu lacinia enim dictumst molestie convallis curabitur tempus, egestas suspendisse sapien ad volutpat leo maecenas nibh in vehicula. Ullamcorper dis pellentesque ornare ultrices magna hac fringilla lacus mollis bibendum, varius blandit dictumst imperdiet pretium mi non leo aliquam, condimentum eros tincidunt est risus fermentum metus vel curae. Massa justo class risus libero ligula auctor fusce habitasse natoque parturient, facilisis aptent fames duis turpis eleifend leo neque.",
}

    return(
        <>
            <div class={'w-[973px] h-[85vh] flex bg-input-white rounded-[10px] shadow-md relative z-10  '}>
               <div className='w-[936px] h-[full] mx-auto  mt-[50px] mb-[50px] ' >
                    <div className='flex flex-col h-[708px]  '>
                        <div className='h-[705px]  overflow-y-auto news' >
                            <div className='flex flex-col' >
                        <span className='block w-[921px] font-open font-bold text-[32px] text-[#535353] overflow-hidden truncate overflow-ellipsis' >
                            {teacher.theme}
                        </span>
                        <span className='font-open text-[16px] text-[#ACACA2] '>
                            {teacher.published}
                        </span>
                        <span className='font-open text-[16px] text-[#ACACA2] ' >
                            {teacher.date}
                        </span>
                        <div className='border border-[#707070] w-full mt-[32px] mb-[32px] h-[1px]' ></div> 
                        <span className='block  w-[936px] h-[82px] font-open text-[18px] text-[#6F6F6F] mb-[32px] overflow-hidden whitespace-pre-line overflow-ellipsis truncate'>
                            {teacher.description}
                        </span>
                        <span className='font-open font-bold text-[16px] text-[#606060] ' >
                            {teacher.comitAlumno}
                        </span>
                        </div>
                        <div className=' w-[936px] h-[192px] rounded-[10px] flex items-center justify-center ' >
                            <div className=' w-[906px] h-[114px]  font-open text-[14px] text-[#61676E]'>
                                {teacher.textAlumno}
                            </div>
                        </div>

                        <span className='mt-[32px] font-open font-bold text-[16px] text-[#62676D] ' >
                            {"Archivos Adjuntos"}
                        </span>

                        <div className="  w-[full]  flex flex-col mx-auto ">
                                    <div className='flex justify-center  mb-[15px]'>
                                        <Line colors='h-[1px] border border-txtbtn-gray' width='100%'></Line>
                                    </div>
                                    <Document
                                        type={text.type}
                                        nameDocument={text.nameDocument}
                                        nameArchive={text.nameArchive}
                                        size={text.size}
                                        description={text.description}>
                                    </Document>            
                                    <div className='flex justify-center my-[15px]'>
                                        <Line colors='h-[1px] border border-txtbtn-gray' width='100%'></Line>
                                    </div>

                                    <Document
                                        type={text.type2}
                                        nameDocument={text.nameDocument2}
                                        nameArchive={text.nameArchive2}
                                        size={text.size2}
                                        description={text.description2}>
                                    </Document>            
                                    <div className='flex justify-center my-[15px]'>
                                        <Line colors='h-[1px] border border-txtbtn-gray' width='100%'></Line>
                                    </div>

                                    <Document
                                        type={text.type3}
                                        nameDocument={text.nameDocument3}
                                        nameArchive={text.nameArchive3}
                                        size={text.size3}
                                        description={text.description3}>
                                    </Document>            
                                    <div className='flex justify-center mt-[15px]'>
                                        <Line colors='h-[1px] border border-txtbtn-gray' width='100%'></Line>
                                    </div>

                                    <span className='font-open font-bold text-[16px] text-[#606060] mt-[32px]' >
                                        {teacher.commit}
                                    </span>
                                    <div className=' w-[936px] h-[192px] rounded-[10px] flex items-center justify-center ' >
                                        <div className=' w-[906px] h-[114px] font-open text-[14px] text-[#61676E]  '>
                                            {teacher.commitTeacher}
                                        </div>
                                    </div>

                                    <div className='flex w-full  justify-end ' >
                                        <div className='w-[93px]' >
                                            <Input placeholder='10' ></Input>
                                        </div>

                                        <button className='ml-[32px] w-[210px] h-[36px] font-open font-semibold text-[#fff] bg-[#4A61CE] rounded-[5px] ' >
                                            {"Calificar"}
                                        </button>
                                    </div>
                                  
                                    </div>

                                   
                                       
                                    </div>   
                                </div>


                                    
               </div>
            </div>
        </>
    )
}

export default GradingHomework;