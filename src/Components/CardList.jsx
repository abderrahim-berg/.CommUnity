import React from 'react';
import SchoolCard from './SchoolCard'
import {Swiper,SwiperSlide} from 'swiper/react';
import  SwiperCore,{Pagination,Navigation,A11y } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import '../Styles/CardList.css'

SwiperCore.use([Navigation,Pagination]);
function CardList() {
    const cardInfo = [
        
        {
            image:
              "https://files.clubetudiants.ma/inline/1551028532",
            titre: 'Ecole nationale superieur des mines Rabat',
          
          },
        {
            image:
              "https://files.clubetudiants.ma/inline/1551028532",
            titre: "Ecole nationale superieur des mines Rabat",
          
          },
          {
            image:
              "https://files.clubetudiants.ma/inline/1551028532",
            titre: "Ecole nationale superieur des mines Rabat",
          
          },
          {
            image:
              "https://files.clubetudiants.ma/inline/1551028532",
            titre: "Ecole nationale superieur des mines Rabat",
          
          },
          {
            image:
              "https://files.clubetudiants.ma/inline/1551028532",
            titre: "Ecole nationale superieur des mines Rabat",
          
          },
      ]; 
      const Slides=cardInfo.map(SchoolCard);
     
       return  ( 
      <React.Fragment>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}>
      {Slides.map((item) => {
        return <SwiperSlide >{item}</SwiperSlide>
      })};
        </Swiper>
  </React.Fragment> );
}

export default CardList
