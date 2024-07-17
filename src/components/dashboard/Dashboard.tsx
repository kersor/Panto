import React from 'react'
import DashboardText from './DashboardText'

const Dashboard = () => {
    const experiance = {
        type: "experiences",
        title: "We provide you the best experience",
        description: "You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials",
        customLink: {
            text: 'More Info',
            link: '/'
    }
    }
    const materials = {
        type: "materials",
        title: "Very serious materials for making furniture",
        description: "Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price",
        customLink: {
            text: 'More Info',
            link: '/'
    }
    }
  return (
    <div className='max-w-[1280px] mx-auto mt-[285px]'>
        <div className='flex items-start'>
            <div className='mr-[80px]'>
                <img src="/images/experiences.png" alt="" />
            </div>
            <DashboardText item={experiance}  />
        </div>
        <div className='flex items-start mt-[270px]'>
            <DashboardText item={materials}  />
            <div className='ml-[80px]'>
                <img src="/images/materials.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Dashboard