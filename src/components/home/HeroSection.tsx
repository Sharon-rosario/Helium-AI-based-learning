import Link from "next/link";
import React from "react";
import shapeImg from "../../../public/assets/img/shape/shape-03.png";
import shapeImgTwo from "../../../public/assets/img/shape/shape-01.png";
import shapeImgThere from "../../../public/assets/img/shape/shape-02.png";
import shapeImgFour from "../../../public/assets/img/shape/slider-shape-6.png";
import shapeImgFive from "../../../public/assets/img/shape/shape-04.png";
import sliderCardImgOne from "../../../public/assets/img/shape/slider-card-1.png";
import sliderCardImgTwo from "../../../public/assets/img/shape/slider-card-2.png";
import sliderCardImgThere from "../../../public/assets/img/shape/slider-card-3.png";
import sliderCardImgFour from "../../../public/assets/img/shape/slider-card-4.png";
import abstroeImg from "../../../public/assets/img/bg/appstore-1.png";
import plstroeImg from "../../../public/assets/img/bg/appstore-2.png";
import Image from "next/image";
import { IoMdHeart } from "react-icons/io";


const HeroSection = () => {
  return (
    <section
      className="slider-area hero-height position-relative fix max-sm:pt-[180px]"
      style={{ background: "url(assets/img/slider/Image.jpg)" }}
    >
      <Image className="shape-3 d-none d-xxl-block hidden" src={shapeImg} style={{ width: 'auto', height: 'auto' }} alt="img not found" />
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-9">
            <div className="hero-text">
              <h6 className="text-[26px] text-[#575757] max-sm:hidden">Make your online preparation perfect with Bharat&apos;s best Ai-Powered Technology + Tutors</h6>
              <h2 style={{display:'none'}}>
                 Helium- AI-Powered Learning App for IIT-JEE, NEET-UG, & CUET-UG
              </h2>
              <p style={{display:'none'}}>
                Join Helium online live classes & supercharge your learning with AI! Excel in IIT-JEE, NEET-UG, CUET-UG, and Boards. Our platform tailors paths for K12 brilliance.
              </p>
              <h2>
                I<IoMdHeart style={{color:"red", display:"inline"}}/>AI-Powered Learning App 
              </h2>
              <p>
                Supercharge your learning with AI! Excel in IIT-JEE, NEET-UG, CUET-UG, and Boards. Our platform tailors paths for K12 brilliance.
              </p>
              <p>
                Master concepts effortlessly, solving challenges and achieving excellence. Experience personalized, dynamic learning that adapts to your pace. Propel towards success with us – unlock limitless possibilities for a brighter future.
              </p>

              {/* <div className="hero-btn">
                <Link href="/course" className="edu-btn">
                  View all course
                </Link>
              </div> */}

              {/* <h3>Download App</h3> */}
              <div className="app-store">
                <Image
                  src={abstroeImg}
                  style={{ maxWidth: "40%", height: "auto", cursor: 'pointer', position: 'relative', left: -20 }}
                  alt="img not found"
                />
                <Image
                  src={plstroeImg}
                  style={{ maxWidth: "37%", height: "auto", cursor: 'pointer' }}
                  alt="img not found"
                />
              </div>

            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="hero-right position-relative">
              <Image data-depth="0.2" className="shape shape-1" src={shapeImgTwo} style={{ width: '90px' }} alt="shape" />
              <Image data-depth="0.2" className="shape-2" src={shapeImgThere} style={{ width: 'auto', height: 'auto' }} alt="shape" />
              <Image data-depth="0.2" className="shape-6" src={shapeImgFour} style={{ width: 'auto', height: 'auto' }} alt="shape" />
              <div className="shape-4">
                <Image className="" src={shapeImgFive} style={{ width: 'auto', height: 'auto' }} alt="shape" />
                <h5 className="hero-shape-text">Top Class Lecturers</h5>
              </div>
              <div className="shape-5">
                <div className="course-card">
                  <Image src={sliderCardImgOne} style={{ width: 'auto', height: 'auto' }} alt="img not found" />
                  <Image src={sliderCardImgTwo} style={{ width: 'auto', height: 'auto' }} alt="img not found" />
                  <Image src={sliderCardImgThere} style={{ width: 'auto', height: 'auto' }} alt="img not found" />
                  <Image src={sliderCardImgFour} style={{ width: 'auto', height: 'auto' }} alt="img not found" />
                  <span className="mt-5">
                    <i className="far fa-plus  text-white"></i>
                  </span>
                </div>
                <h5>
                  More than <span>5000+</span> students enrolled with Helium & enrolling continue
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
