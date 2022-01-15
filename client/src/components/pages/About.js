import React, { useEffect } from 'react';
import '../../App.css';
import aboutimg from "../img/aboutimg.JPG"
import img1 from "../img/1.png"
import img2 from "../img/2.png"
import img3 from "../img/3.png"
import img4 from "../img/4.png"
import img5 from "../img/5.png"
import img6 from "../img/6.png"
import img7 from "../img/7.png"
function About() {
  
  return (
    <>
      <div className="aboutpage">
        <div className="aboutpagecontainer-1">
            <img src={aboutimg} alt="ABOUT"/>
        </div>
        <div className="aboutpagecontainer-2">
            <div className="aboutheading">
            <h1 >RONNIN STUDIO</h1>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis illum eius eaque officiis recusandae, nobis dignissimos exercitationem doloribus fuga adipisci eos voluptatibus quam omnis saepe est accusamus debitis quo ea!</p>
            <button>Contact</button>

        </div>
    </div>
    <section id="slider" className="pt-5">
        <div className="container">
          <h1 className="text-center"><b>SKILLS TO OFFER</b></h1>
            <div className="slider">
                      <div className="owl-carousel">
                          <div className="slider-card">
                              <div className="d-flex justify-content-center align-items-center mb-4">
                                  <img src={img1} alt="" />
                              </div>
                              <h5 className="mb-0 text-center"><b>Story Boarding</b></h5>
                              <p className="text-center p-4"></p>
                          </div>
                          <div className="slider-card">
                              <div className="d-flex justify-content-center align-items-center mb-4">
                                  <img src={img2} alt=""/>
                              </div>
                              <h5 className="mb-0 text-center"><b>Set Design</b></h5>
                              <p className="text-center p-4"></p>
                          </div>
                          <div className="slider-card">
                              <div className="d-flex justify-content-center align-items-center mb-4">
                                  <img src={img3} alt=""/>
                              </div>
                              <h5 className="mb-0 text-center"><b>Production</b></h5>
                              <p className="text-center p-4"></p>
                          </div>
                          <div className="slider-card">
                              <div className="d-flex justify-content-center align-items-center mb-4">
                                  <img src={img4} alt=""/>
                              </div>
                              <h5 className="mb-0 text-center"><b>Editing</b></h5>
                              <p className="text-center p-4"></p>
                          </div>
                          <div className="slider-card">
                              <div className="d-flex justify-content-center align-items-center mb-4">
                                  <img src={img5} alt=""/>
                              </div>
                              <h5 className="mb-0 text-center"><b>Colour Grading</b></h5>
                              <p className="text-center p-4"></p>
                          </div>
                          <div className="slider-card">
                              <div className="d-flex justify-content-center align-items-center mb-4">
                                  <img src={img6} alt=""/>
                              </div>
                              <h5 className="mb-0 text-center"><b>SFX</b></h5>
                              <p className="text-center p-4"></p>
                          </div>
                          <div className="slider-card">
                              <div className="d-flex justify-content-center align-items-center mb-4">
                                  <img src={img7} alt=""/>
                              </div>
                              <h5 className="mb-0 text-center"><b>Review</b></h5>
                              <p className="text-center p-4"></p>
                          </div>
                          
                      </div>
                  </div>
        </div>
      </section>




    </>
  )
}

export default About
