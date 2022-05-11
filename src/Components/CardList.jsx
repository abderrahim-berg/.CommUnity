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
            titre: 'ENSMR',
          
          },
          {
            image:
              "http://www.inpt.ac.ma/sites/default/files/article/image/inpt%20.png",
            titre: "INPT",
          
          },
          {
          image:
          "https://seeklogo.com/images/E/ecole-hassania-des-travaux-publics-maroc-logo-B0A188A6BE-seeklogo.com.png",
        titre: "EHTP",
      
         },
        {
            image:
              "http://alwadifa-club.com/files/EMI_rabat_764890727.gif",
            titre: "EMI",
          
          },
          {
            image:
              "https://cdn-07.9rayti.com/rsrc/cache/widen_750/uploads/2016/05/Concours-ENSIAS-2016.jpg",
            titre: "ENSIAS",
          
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
