import React, { FC } from 'react'
import { Link } from 'react-router-dom'

interface ICustomLink {
    item: {
        link: string,
        text: string
    }
}

const CustomLink: FC<ICustomLink> = ({item}) => {
  return (
    <Link to={item.link} className='text-[#E58411] flex items-center gap-[13px]'>
      {item.text}
      <img src={`/images/grommet-icons_form-next-link.svg`} alt="" />
    </Link>
  )
}

export default CustomLink