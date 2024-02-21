import React from 'react'
import Hamburguesa from '@/assets/icons/hamburguer.svg'

const BtnHamburguer = ({}) => {

    return (
        <div className='w-[36px] h-[36px] rounded-[10px] bg-[#F4F4EF] flex items-center justify-center ' >
            <img src={Hamburguesa.src} alt="" className='w-[16px] h-[16px] ' />
        </div>
    )
}
export default BtnHamburguer;