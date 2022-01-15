import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Video from "../videos/video-1.mp4"

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={Video} autoPlay loop muted />
      <h1>RONNIN</h1>
      <p>PROFESSIONAL FILMMAKER</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Contact
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          
        >
          WATCH FILMS <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
