import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComp from './Components/NavbarComp';
import './App.css';
import HomePage from './Pages/HomePage';
import ProfilSettingsPage from './Pages/ProfilSettingsPage';
import LoginPage from './Pages/LoginPage';
import Profil from './Pages/Profil';
function App() {
  return (<>
   <NavbarComp isLoggedIn={true}/>
     <Profil/> 
      </>
    );
}
export default App;
