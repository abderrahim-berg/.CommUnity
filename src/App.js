import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Components/NavbarComp';
import './App.css';
import SchoolCard from './Components/SchoolCard';
import HomePage from './Pages/HomePage';
import CardList from './Components/CardList';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function App() {
  return (
    <>
    <NavbarComp/>
    
   <CardList/>  
    </>
  );
}

export default App;
