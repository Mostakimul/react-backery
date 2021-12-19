import React from 'react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from '../../img/slide-1.jpg';
import slide2 from '../../img/slide-2.jpg';
import slide3 from '../../img/slide-3.jpg';
import './Hero.css';
SwiperCore.use([Navigation]);

const slides = [
  { id: 1, img: slide1, text1: 'Milan Bakery shop', text2: 'Your family baker since 1955' },
  {
    id: 2,
    img: slide2,
    text1: 'A Delicious Range of Bread',
    text2: 'Always fresh and crafted right in front of you',
  },
  { id: 3, img: slide3, text1: 'Spread Cheer', text2: 'Reacive an artisan loaf with purchase' },
];

const Hero = () => {
  return (
    <div>
      <Swiper navigation={true}>
        {slides.map((sl) => (
          <SwiperSlide key={sl.id}>
            <div
              style={{ backgroundImage: `url(${sl.img})` }}
              className="min-h-[85vh] flex flex-col justify-center items-center">
              <h2 className=" text-gray-50 text-3xl sm:text-5xl font-bold mb-5">{sl.text1}</h2>

              <p className=" text-gray-50 sm:text-lg">{sl.text2}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
