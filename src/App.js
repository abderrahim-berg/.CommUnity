import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Components/NavbarComp';
import './App.css';
import SchoolCard from './Components/SchoolCard';
import HomePage from './Pages/HomePage';
import CardList from './Components/CardList';
import 'swiper/css';
import Footer from './Components/Footer';
import './App.css';
function App() {
  return (
    <>
    <div className='content-container'>
    <NavbarComp/>
    <CardList/> 
    </div>
    <div className='footer-pin'><Footer/> </div>
     </>
  );
}

export default App;
