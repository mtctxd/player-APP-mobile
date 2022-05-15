import React from 'react';
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import './SliderContainer.scss'
import slides from '../../data/slides';

SwiperCore.use([EffectCoverflow, Pagination]);

const SliderContainer = () => {
  return (
    <div>
      <Swiper
        effect={'slide'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        className="mySwiper"
        initialSlide={1}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>{slide.content}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderContainer;
