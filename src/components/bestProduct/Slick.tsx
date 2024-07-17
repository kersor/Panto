import React from 'react'
import Slider from "react-slick";
import { ISlickItems } from '../../Types';
import SlickItem from './SlickItem';

const Slick = () => {
    const slickItems: ISlickItems[] = [
        {
            id: 1,
            image: 'sakarias.png',
            type: 'chair',
            name: 'Sakarias Armchair',
            star: 5,
            cash: 392
        },
        {
            id: 2,
            image: 'baltsar.png',
            type: 'chair',
            name: 'Baltsar Chair',
            star: 5,
            cash: 299
        },
        {
            id: 3,
            image: 'anjay.png',
            type: 'chair',
            name: 'Anjay Chair',
            star: 5,
            cash: 392
        },
        {
            id: 4,
            image: 'nyantuy.png',
            type: 'chair',
            name: 'Nyantuy Chair',
            star: 5,
            cash: 921
        },
        {
            id: 5,
            image: 'anjay.png',
            type: 'chair',
            name: 'Anjay Chair',
            star: 5,
            cash: 519
        }
    ]
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <img src='/images/slick-arrow-left.png' />,
        nextArrow: <img className='right-arrow' src='/images/slick-arrow-right.png' />,
    };
    
    return (
        <div className='max-w-[1200px] mx-auto mt-[80px]'> 
            <Slider {...settings}>
                {slickItems.map((item) => <SlickItem key={item.id} item={item} />)}
            </Slider>
        </div>
    )
}

export default Slick