import pdf from '@/assets/icons/pdf.svg';
import xls from '@/assets/icons/xls.svg';
import doc from '@/assets/icons/doc.svg';
import jpg from '@/assets/icons/jpg.svg';

const Document = ({type, nameDocument, nameArchive, size, description}) => {
    switch(type){
        case 'pdf': var icon = pdf.src; break;
        case 'xls': var icon = xls.src; break;
        case 'doc': var icon = doc.src; break;
        case 'jpg': var icon = jpg.src; break;
    }
    return(
        <>
            <div className='flex w-full '>
                <div className='flex w-[230px]'>
                    <div className='w-[49px] h-[51px]' style={{minWidth: ''}}>
                        <img src={icon} className='w-[49px] h-[51px] ' ></img>
                    </div>
                    <div className='flex flex-col ml-[10px]  min-w-fit' style={{minWidth: 'fit-content'}}>
                        <label className='font-open w-[170px] text-[14px] text-libellum-text-gray line-clamp-1 font-bold'>{nameDocument}</label>
                        <label className='font-open w-[170px] text-[14px] text-libellum-text-gray line-clamp-1 leading-none'>{nameArchive}</label>
                        <label className='font-open w-[px] text-[14px] text-libellum-text-gray line-clamp-1'>{size}</label>
                    </div>
                </div>                
                <div className='ml-[30px] '>
                    <label className=' w-[597px] font-open text-[14px] text-libellum-text-gray line-clamp-3 leading-[1.4] '>{description}</label>
                </div>
            </div>
        </>
    )
}

export default Document;