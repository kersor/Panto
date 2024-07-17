import React from 'react'
import styles from './Header.module.scss'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import App from '../../App'

const Header = () => {
  return (
    <div className='max-w-[1280px] mx-auto flex items-center justify-between h-[115px] '>
      <Link to={'/'}><img src='/images/logo.svg' /></Link>
      <div className='flex gap-[60px] text-[18px] text-white'>
        <Link className='flex items-center gap-[8px] relative' to={'/furniture'}>Furniture <img className='w-[18px] h-[18px]' src="/images/arrow-white-outline.png" alt="" /></Link>
        <Link to={'/shop'}>Shop</Link>
        <Link to={'/about'}>About us</Link>
        <Link to={'/contact'}>Contact</Link>
      </div>
      <Link className='relative' to={'/'}>
        <div className='absolute -right-[50%] top-[50%] -translate-y-[50%] -translate-x-[50%] w-[25px] h-[25px] rounded-[50%] bg-[#E58411] flex justify-center items-center text-white'>1</div>
        <img className='' src="/images/bag.png" alt="" />
      </Link>
    </div>
  )
}

export default Header