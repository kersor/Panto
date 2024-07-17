import React from 'react'
import SlickReview from './SlickReview'

const Review = () => {
  const reviews = [
    {
      id: 1,
      avatar: 'bang.png',
      name: 'Bang Upin',
      aktivitas: 'Pedagang Asongan',
      comment: '“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“',
      star: 4,
      photo: 'bang.png'
    },
    {
      id: 2,
      avatar: 'ibuk.png',
      name: 'Bang Upin',
      aktivitas: 'Pedagang Asongan',
      comment: '“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“',
      star: 4,
      photo: 'ibuk.png'
    },
    {
      id: 3,
      avatar: 'mpok.png',
      name: 'Bang Upin',
      aktivitas: 'Pedagang Asongan',
      comment: '“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“',
      star: 4,
      photo: 'mpok.png'
    },
    {
      id: 4,
      avatar: 'ibuk.png',
      name: 'Bang Upin',
      aktivitas: 'Pedagang Asongan',
      comment: '“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“',
      star: 4,
      photo: 'ibuk.png'
    }
  ]
  return (
    <div className='max-w-[1200px] mx-auto pb-[245px]'>
      <div className='text-center mt-[240px]'> 
        <div className='text-[#E58411] uppercase text-[18px]'>Testimonials</div>
        <div className='text-[#1E1E1E] font-GilroyBold text-[42px] mt-[20px]'>Our Client Reviews</div>
      </div>  
      <SlickReview item={reviews} />
    </div>
  )
}

export default Review