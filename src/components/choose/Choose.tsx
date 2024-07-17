import React, { useState } from 'react'
import styles from './Choose.module.scss'
import ChooseComponent from './ChooseComponent'
import { IChooseContainer } from '../../Types'


const Choose = () => {
    const [choosing, setChoosing] = useState<IChooseContainer[]>([
        {
            id: 1,
            title: 'Luxury facilities',
            description: 'The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.',
            link: '/'
        },
        {
            id: 2,
            title: 'Affordable Price',
            description: 'You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.',
            link: '/'
        },
        {
            id: 3,
            title: 'Many Choices',
            description: 'We provide many unique work space choices so that you can choose the workspace to your liking.',
            link: '/'
        }
    ])
    return (
        <div className="max-w-[1280px] mx-auto">
            <div className='mt-[120px] flex justify-between pb-[120px]'>
                <div className='text-[42px] text-[#1E1E1E] max-w-[242px] text-GilroyBold'>Why Choosing Us</div>
                <div className='flex gap-[25px]'>
                    {
                        choosing.map(item => <ChooseComponent key={item.id} item={item} />)
                    }
                </div>
            </div>
        </div>

    )
}

export default Choose