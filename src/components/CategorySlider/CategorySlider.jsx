import React from 'react';
import { useQuery } from 'react-query';
import Slider from "react-slick";
import axios from 'axios';

export default function CategorySlider () {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
    };

    const getCategories = () => {
        return axios.get('https://ecommerce.routemisr.com/api/v1/categories');
    };

    const { isLoading, isError, data } = useQuery('CategorySlider', getCategories);

    // Handle loading and error states
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching categories!</div>;

    return (
        <div className="py-5">
            {data?.data?.data && (
                <Slider {...settings}>
                    {data.data.data.map((category) => (
                        <div key={category.id}>
                            <img className="w-100" src={category.image} alt={category.title} height={200} />
                        </div>
                    ))}
                </Slider>
            )}
        </div>
    );
}
