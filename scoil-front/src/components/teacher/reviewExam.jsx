// components/Examen.jsx
import React from 'react';
import trashRed from '@/assets/icons/trashRed.svg';
import editIcon from '@/assets/icons/editIcon.svg';
import Link from 'next/link';



const ReviewExamen = ({ examen, student=false , link='' }) => (

  
  <div className="flex w-[973px] flex-col  bg-[#F7F8F9] shadow-2xl rounded-[10px]">
    <div className="mx-[30px] mt-[25px] mb-[7px]">
      <div className="mb-[] relative flex flex-col justify-between ">
        <span className="text-[#535353] flex font-open font-bold text-[32px] ">{examen.theme}</span>
        {!student && (
          <div className="flex absolute right-0 h-[]">
            <button className="w-[] h-[]">
              <img src={editIcon.src} alt="" className="mr-[10px] w-[] " />
            </button>
            <button>
              <img src={trashRed.src} alt="" className="w-[] " />
            </button>
          </div>
        )}
        {student && (
          <span className={ `absolute right-0 font-open font-bold text-[14px] ${
            examen.status === 'PENDIENTE' ? 'text-[#FEC401]' 
            : examen.status === 'ENTREGADO' ? 'text-[#B2D326]' 
              : 'text-[#535353]'
          }`}
        >
            {examen.status}
          </span>
        )}

      </div>
      <div className="flex flex-col ">
        <span className="text-[#ACACA2] font-open text-[16px] ">{examen.published}</span>
        {student && (
          <span className="text-[#6781FE] font-open font-semibold text-[16px] ">{examen.question}</span>
        )}
        {!student && (
          <span className="text-[#0082C9] font-open font-semibold text-[16px] ">{examen.question}</span>
        )}
        <span className="text-[#6F6F6F] font-open text-[16px] ">{examen.dateInit}</span>
        <span className="text-[#6F6F6F] font-open text-[16px] ">{examen.dateEnd}</span>
      </div>
      {!student && (
        <Link href={examen.link}>
          <button className="w-full font-open font-bold text-[#0082C9] text-[14px] flex justify-end mt-[7px]">
            {"CALIFICAR"}
          </button>
        </Link>
      )}

      {student && (
        <Link href={examen.linkStudent}>
          <button className="w-full font-open font-bold text-[#6781FE] text-[14px] flex justify-end mt-[7px]">
            {examen.on}
          </button>
        </Link>
      )}

    </div>
  </div>
);

export default ReviewExamen;
