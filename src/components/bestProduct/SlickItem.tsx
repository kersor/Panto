import React, { FC } from 'react'
import { ISlickItems } from '../../Types'

interface ISlickItem {
    key: number,
    item: ISlickItems
}

const SlickItem: FC<ISlickItem> = ({item}) => {
  return (
    <div className='max-w-[268px]'>
        <div className=' h-[239px] bg-[#FAFAFA] rounded-t-[20px] relative'>
            <img className="h-[255px] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]" src={`/images/product/${item.image}`} alt="" />
        </div>
        <div className='bg-white rounded-b-[20px] px-[21px] pb-[27px] pt-[13px]'>
            <div className='text-[#8D8D8D]'>Chair</div>
            <div className='text-[#0D1B39] font-GilroyBold my-[6px] text-[22px]'>{item.name}</div>
            <div className='flex gap-[3px]'>
                {[...Array(item.star)].map((item) => <img src='/images/star.svg'/>)}
            </div>
            <div className='flex items-center justify-between mt-[36px]'>
                <div className='text-[22px] font-GilroyBold'>$ 392</div>
                <button><img src="/images/add-product.png" alt="" /></button>
            </div>
        </div>
    </div>
  )
}

export default SlickItem