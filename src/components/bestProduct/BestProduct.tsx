import React, { useState } from 'react'
import Slick from './Slick'
import { Link } from 'react-router-dom'

const BestProduct = () => {
    const buttonsBestProduct = ['Chair', 'Beds', 'Sofa', 'Lamp']
    const [activeButtonBestProduct, setActiveButtonBestProducts] = useState(0)
  return (
    <div className='bg-[#F7F7F7] pt-[94px]'>
        <div className='max-w-[390px] mx-auto text-center'>
            <h2 className='text-[#1E1E1E] text-[42px] font-GilroyBold'>Best Selling Product</h2>
            <div className='p-[6px] bg-[#EEEEEE] max-w-[350px] rounded-[50px] mt-[33px] mx-auto'>
                {buttonsBestProduct.map((item, index) => <button onClick={e => setActiveButtonBestProducts(prev => index)} className={`text-[18px] text-[#1E1E1E] font-GilroyRegular py-[7px] px-[19.5px] rounded-[50px] ${index == activeButtonBestProduct && `bg-[#FFF]` }`}>{item}</button>)}
            </div>
        </div>
        <Slick />
        <Link className='text-center flex justify-center mt-[70px] pb-[5px] text-[#E58411]' to="/">View All <img src="/images/grommet-icons_form-next-link.svg" alt="" /></Link>
    </div>
  )
}

export default BestProduct