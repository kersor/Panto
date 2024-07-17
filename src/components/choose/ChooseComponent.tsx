import React, { FC } from 'react'
import { IChooseContainer } from '../../Types'
import { Link } from 'react-router-dom'

interface IChooseComponent {
    key: number, 
    item: IChooseContainer
}

const ChooseComponent: FC<IChooseComponent> = ({item}) => {
  return (
    <div className='max-w-[284px]'>
        <h3 className='text-[#1E1E1E] font-GilroyBold text-[24px] pb-[20px]'>{item.title}</h3>
        <div className='text-[#1E1E1E] text-[14px] pb-[15px] font-GilroyRegular'>{item.description}</div>
        <Link className='flex gap-[13px] text-[14px] text-[#E58411]' to={item.link}>More Info <img src="/images/grommet-icons_form-next-link.svg" alt="" /></Link>
    </div>
  )
}

export default ChooseComponent