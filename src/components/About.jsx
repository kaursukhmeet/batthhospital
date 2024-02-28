import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const sliderImages=['https://swiperjs.com/demos/images/nature-1.jpg',
'https://swiperjs.com/demos/images/nature-2.jpg',
'https://swiperjs.com/demos/images/nature-3.jpg',
'https://swiperjs.com/demos/images/nature-4.jpg',
'https://swiperjs.com/demos/images/nature-5.jpg',
'https://swiperjs.com/demos/images/nature-6.jpg',
'https://swiperjs.com/demos/images/nature-7.jpg'];

// import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { Container } from 'react-bootstrap';
import { Parallax } from 'react-scroll-parallax';

export default function About(){
    return(
      <section id='about'>
      <h1>Welcome to Batth Hospital</h1>

    </section>
    );
}

   /*   <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'2'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={true}
        modules={[EffectCoverflow]}
      >

        {sliderImages.map((image, index) => (
            <SwiperSlide key={index}>
            <img className='responsiveImage' src={image} />
          </SwiperSlide>
        ))}
      </Swiper>*/