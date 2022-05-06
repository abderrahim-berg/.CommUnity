import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComp from './Components/NavbarComp';
import './App.css';
import CardList from './Components/CardList';
import Footer from './Components/Footer';
import LoginForm from './Components/LoginForm'
import Profil from './Pages/Profil';
import SchoolProfilHeader from './Components/SchoolProfilHeader';
import ShowPost from './Components/ShowPost';
import { useState } from 'react';
import { Container } from '@material-ui/core';


function App() {
  
  
  return (<>
   <NavbarComp isLoggedIn={false}/>
   <div className='content-container'>
   
     <Profil/>
     
     </div>
    <Footer />
        
       
      </>
    );
}
export default App;
