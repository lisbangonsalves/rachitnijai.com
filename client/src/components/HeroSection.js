import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Video from "../videos/video-1.mp4"
import logow from "./img/logow.png"


function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={Video} autoPlay loop muted />
      <img src={logow}></img>
      <p>VIDEO PRODUCTION</p>
      <div className='hero-btns'>
        
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Contact
        </Button>
        
        
      </div>
    </div>
  );
}

export default HeroSection;
