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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            voluptatem corporis error non,
        </p>

        <div className="social">
            <i className="fa-brands fa-facebook-square"></i>
            <i className="fa-brands fa-instagram-square"></i>
            <i className="fa-brands fa-twitter-square"></i>
            <i className="fa-brands fa-youtube-square"></i>
            <i className="fa-brands fa-whatsapp-square"></i>
        </div>
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
        <a href="">Blog</a>
        <a href="">Social</a>

        </div>
        <p>Copyright &copy; {y} .commUnity</p>
        </div>
</footer>
</div>
  )
}

export default Footer
