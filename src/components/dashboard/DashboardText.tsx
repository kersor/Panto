import React, { FC } from 'react'
import { IDashboardText } from '../../Types'
import CustomLink from '../../UI/CustomLink'

interface IDashboardTextItem {
    item: IDashboardText
}

const DashboardText: FC<IDashboardTextItem> = ({item}) => {

  return (
    <div className='text-[#1E1E1E] max-w-[556px] flex flex-col gap-[20px] pt-[20px]'>
        <div className='text-[#E58411] uppercase'>{item.type}</div>
        <div className='font-GilroyBold text-[42px] max-w-[413px]'>{item.title}</div>
        <div className='font-GilroyRegular text-[18px]'>{item.description}</div>
        <CustomLink item={item.customLink} />
    </div>
  )
}

export default DashboardText