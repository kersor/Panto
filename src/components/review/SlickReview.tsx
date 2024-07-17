import React, { FC } from 'react'
import { IReviews } from '../../Types'
import Slider from 'react-slick'
import SlickReviewItem from './SlickReviewItem'

interface ISlickReview {
    item: IReviews[]
}

const SlickReview: FC<ISlickReview> = ({item}) => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <img src='/images/slick-arrow-left.png' />,
        nextArrow: <img className='right-arrow' src='/images/slick-arrow-right.png' />,
    };

    return (
        <div className='mt-[60px]'>
            <Slider {...settings}>
                {item.map((item) => <SlickReviewItem key={item.id} item={item} />)}
            </Slider>
        </div>
    )
}

export default SlickReview