import React, { useState } from 'react';
import useAxios from "../../hooks/useAxios";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import './InstaCarousel.css';

const InstaCarousel = () => {
  //Llamada a la API que tiene las imágenes de insta-carousel
    const { data: dataInstaCarousel, isLoading: isLoadingInstaCarousel, error: errorInstaCarousel } = useAxios('https://run.mocky.io/v3/20358d50-419d-4b69-acce-5d85e8e4d745');

    const [sliderRef, setSliderRef] = useState(null)
//Usa librería slick-react
    const sliderSettings = {
      arrows: false,
      slidesToShow: 4,
      slidesToScroll: 4,
      infinite: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }
  
  return (
    <div className='contenedor-instacarousel'>
      <div className='controles-instacarousel'>
          <button onClick={sliderRef?.slickPrev}>
            <FaChevronCircleLeft />
          </button>
      </div>
      <Slider className='contenedor-slide' ref={setSliderRef} {...sliderSettings}>
        {
            errorInstaCarousel.isError ? <h4>Error: {errorInstaCarousel.message}</h4> :
            isLoadingInstaCarousel ? <h4>Cargando... </h4> :
            dataInstaCarousel.length !== 0 && dataInstaCarousel.items.map((e) => (
                <div className='contenedor-img' key={e.id}>
                    <img src={e.img} alt="" />
                </div>
            ))
        }
      </Slider>
      <div className='controles-instacarousel'>
          <button onClick={sliderRef?.slickNext}>
            <FaChevronCircleRight  />
          </button>
      </div>
    </div>
  )
}

export default InstaCarousel;
