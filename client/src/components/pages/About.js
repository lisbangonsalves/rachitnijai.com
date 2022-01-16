import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import aboutimg from "../img/aboutimg.JPG"
import img1 from "../img/1.png"
import img2 from "../img/2.png"
import img3 from "../img/3.png"
import img4 from "../img/4.png"
import img5 from "../img/5.png"
import img6 from "../img/6.png"
import img7 from "../img/7.png"
import { Link } from 'react-router-dom';

function About() {
    // useEffect(() => {
    //     const script = document.createElement('script');
    //     script.src = "./resource.js";
    //     script.async = true;
    //     document.body.appendChild(script);
      
    //   });
    return (
        <>
            <div className="aboutpage">
                <div className="aboutpagecontainer-1">
                    <img src={aboutimg} alt="ABOUT" />
                </div>
                <div className="aboutpagecontainer-2">
                    <div className="aboutheading">
                        <h1 >RONNIN FILMS</h1>
                    </div>
                    <p>We create high quality table top Product hero videos and Commercial videos.This video can make your brand stand out in market and help your targeted customers better understand and engage with your product or services.Also we make sure that we hit a certain quality.</p>
                    <Link to='/contact'>
                    <button>Contact</button>
                    </Link>

                </div>
            </div>
            <section id="slider" className="pt-5">
                <div className="container">
                    <h1 className="text-center"><b>PRODUCTION PROCESS</b></h1>
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
                                    <img src={img2} alt="" />
                                </div>
                                <h5 className="mb-0 text-center"><b>Set Design</b></h5>
                                <p className="text-center p-4"></p>
                            </div>
                            <div className="slider-card">
                                <div className="d-flex justify-content-center align-items-center mb-4">
                                    <img src={img3} alt="" />
                                </div>
                                <h5 className="mb-0 text-center"><b>Production</b></h5>
                                <p className="text-center p-4"></p>
                            </div>
                            <div className="slider-card">
                                <div className="d-flex justify-content-center align-items-center mb-4">
                                    <img src={img4} alt="" />
                                </div>
                                <h5 className="mb-0 text-center"><b>Editing</b></h5>
                                <p className="text-center p-4"></p>
                            </div>
                            <div className="slider-card">
                                <div className="d-flex justify-content-center align-items-center mb-4">
                                    <img src={img5} alt="" />
                                </div>
                                <h5 className="mb-0 text-center"><b>Colour Grading</b></h5>
                                <p className="text-center p-4"></p>
                            </div>
                            <div className="slider-card">
                                <div className="d-flex justify-content-center align-items-center mb-4">
                                    <img src={img6} alt="" />
                                </div>
                                <h5 className="mb-0 text-center"><b>SFX</b></h5>
                                <p className="text-center p-4"></p>
                            </div>
                            <div className="slider-card">
                                <div className="d-flex justify-content-center align-items-center mb-4">
                                    <img src={img7} alt="" />
                                </div>
                                <h5 className="mb-0 text-center"><b>Review</b></h5>
                                <p className="text-center p-4"></p>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </section>


<Footer></Footer>

        </>
    )
}

export default About
