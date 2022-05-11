import React from 'react';
import '../Styles/Footer.css';

function Footer() {
    var today = new Date();
    var y = today.getFullYear();
  return (
<div className='footer-pin'>
<footer >  
        <div className='row primary'>
        <div className="column about">

        <h3>.commUnity</h3>

        <p>
        This application is developed by a group of students of the National 
        School of Mines in Rabat with the aim of bringing together engineering schools in Morocco.
        </p>
        </div>

        <div className="column-links">
        <h3>Some Links</h3>

        <ul>

        <li>
        <a href="#faq">F.A.Q</a>
        </li>
        <li>
        <a href="#cookies-policy">Cookies Policy</a>
        </li>
        <li>
        <a href="#terms-of-services">Terms Of Service</a>
        </li>
        <li>
        <a href="#support">Support</a>
        </li>
        </ul>

        </div>
        
        </div>

        <div className="row copyright">
        <div className="footer-menu">

        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Social</a>

        </div>
        <p>Copyright &copy; {y} .commUnity</p>
        </div>
</footer>
</div>
  )
}

export default Footer
