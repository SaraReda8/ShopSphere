import React from 'react';
import Style from './CategorySlider.module.css';
import { useQuery } from 'react-query';
import Slider from "react-slick";
import axios from 'axios';
import Home from './../Home/Home';

export default function CategorySlider () {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
      };
    function getCategories(){
        return axios.get('https://ecommerce.routemisr.com/api/v1/categories')
       
    }
    let{isLoading,isError,data}=useQuery('CategorySlider',getCategories)
console.log(data?.data.data)

return (
    <>
        
    <div className="py-5">
      {data?.data?.data ? (
        <Slider {...settings}>
          {data.data.data.map((category) => (
            <div key={category.id}>
              <img className="w-100" src={category.image} alt={category.title} height={200} />
            </div>
            
          ))}
        </Slider>
      ) : (
        ''
      )}</div>
 
    
    </>
  );
  
}

 