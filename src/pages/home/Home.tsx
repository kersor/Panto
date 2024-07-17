import React from 'react'
import Choose from '../../components/choose/Choose'
import BestProduct from '../../components/bestProduct/BestProduct'
import Dashboard from '../../components/dashboard/Dashboard'
import Review from '../../components/review/Review'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div className='h-screen'>
        <div className='max-w-[1280px] mx-auto'>
          <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-full -z-[1]">
              <img className='w-full h-full' src="/images/top-image.png" alt="" />
          </div>
          <div className=' h-screen'>
            <h1 className='text-[80px] text-white leading-[130%] max-w-[860spx] mx-auto text-center mt-[50px] font-GilroyBold'>Make your interior more minimalistic & modern</h1>
            <div className='max-w-[600px] mx-auto mt-[10px] text-center text-white leading-[160%] text-[24px] font-GilroyRegular'>Turn your room with panto into a lot more minimalist and modern with ease and speed</div>
            <div className='flex items-center justify-between max-w-[345px] mx-auto mt-[45px] bg-[#ffffff26] border-[1px] border-[rgba(255,255,255,0.65)] rounded-[50px] pl-[25px] py-[10px] pr-[10px]'>
              <input className='text-[18px] w-full font-GilroyRegular bg-transparent outline-0 text-white' placeholder='Search furniture' type="text" />
              <img className='pl-[20px] cursor-pointer' src="/images/search.svg" alt="" />
            </div>
          </div>
        </div>
        
        <Choose />
        <BestProduct />
        <Dashboard />
        <Review />
        <Footer />
    </div>
  )
}

export default Home