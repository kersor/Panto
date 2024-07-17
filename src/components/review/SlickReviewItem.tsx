import React, { FC } from 'react'
import { IReviews } from '../../Types'

interface ISlickReview {
    item: IReviews
}

const SlickReviewItem: FC<ISlickReview> = ({item}) => {
    // console.log([...Array(item.star))
  return (
    <div className='max-w-[370px] h-[476px] relative'>
        <img className='absolute w-full h-full -z-[1]' src={`/images/review/${item.photo}`} alt="" />
        <div className='p-[18px] flex flex-col justify-end h-full'>
            <div className='bg-white rounded-[10px] text-center relative pb-[15px]'>
                <img className='absolute left-[50%] -translate-x-[50%] -translate-y-[50%] border-[8px] border-white rounded-[50px] w-[60px]' src={`/images/avatars/${item.avatar}`} alt="" />
                <div className='font-GilroyBold text-[18px] pt-[40px]'>{item.name}</div>
                <div>{item.aktivitas}</div>
                <div className='max-w-[252px] mx-auto font-GilroyRegular my-[20px]'>{item.comment}</div>
                <div className='flex justify-center gap-[5px]'>
                    {[...Array(item.star)].map(items => <img src="/images/star.svg" />)}
                </div>
            </div>
        </div>
    </div>
  )
}

export default SlickReviewItem