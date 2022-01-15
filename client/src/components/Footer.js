import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import Logo from "../components/img/logo.png"

function Footer() {
  return (
    <div className='footer-container'>
      
      
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
            <img src={Logo} alt='logo'></img>
            </Link>
          </div>
          <small className='website-rights'>RONNIN © {new Date().getFullYear()}</small>
          <div className='social-icons'>
            
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
 
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
