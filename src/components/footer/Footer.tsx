import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-[#F7F7F7] pt-[118px] pb-[56px]'>
        <div className='max-w-[1064px] mx-auto'>
            <div className='flex justify-between'>
                <div className='max-w-[300px]'>
                    <Link to={'/'}><img src="/images/logo-black.svg" alt="" /></Link>
                    <div className='text-[15px] pt-[30px]'>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities. </div>
                </div>
                <div className='grid grid-cols-3 gap-x-[110px]'>
                    <Link className='text-[#F6973F]' to={'/'}>Services</Link>
                    <Link className='text-[#F6973F]' to={'/'}>Furniture</Link>
                    <Link className='text-[#F6973F]' to={'/'}>Follow Us</Link>
                    <Link to={'/'}>Email Marketing</Link>
                    <Link to={'/'}>Beds</Link>
                    <Link to={'/'}>Facebook</Link>
                    <Link to={'/'}>Campaigns</Link>
                    <Link to={'/'}>Chair</Link>
                    <Link to={'/'}>Twitter</Link>
                    <Link to={'/'}>Branding</Link>
                    <Link to={'/'}>All</Link>
                    <Link to={'/'}>Instagram</Link>
                </div>
            </div>
            <div className='flex justify-between pt-[118px]'>
                <div className='text-[#1E2833]'>Copyright © 2021</div>
                <div>
                    <span className='pr-[40px]'>Terms & Conditions</span>
                    <span>Privacy Policy</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer