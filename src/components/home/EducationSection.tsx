import React from 'react';
import Link from 'next/link';
import shapeImgOne from '../../../public/assets/img/shape/education-shape-04.png';
import shapeImgTwo from '../../../public/assets/img/shape/education-shape-01.png';
import shapeImgThere from '../../../public/assets/img/shape/education-shape-03.png';
import educationImg from '../../../public/assets/img/teacher/education.png';
import Image from 'next/image';

const EducationSection = () => {
    return (
        <section className="education-area position-relative pt-85">
         <div className="container">
            <Image className="education-shape-2" src={shapeImgOne} style={{width:'auto', height:'auto'}} alt="shape"/>
            <Image className="education-shape-3" src={shapeImgTwo} style={{width:'auto', height:'auto'}} alt="shape"/>
            <Image className="education-shape-4" src={shapeImgThere} style={{width:'auto', height:'auto'}} alt="shape"/>
            <div className="row">
               <div className="col-xl-4 col-lg-4 offset-xl-2 offset-lg-2">
                  <div className="education-img mb-30">
                     <Image src={educationImg} style={{width:'auto', height:'auto'}} alt="img not found"/>
                  </div>
               </div>
               <div className="col-xl-4 col-lg-4">
                  <div className="section-title mb-30">
                     <h2>Shape Your Future with <span className="down-mark-line">Helium!</span></h2>
                  </div>
                  <div className="education-content mb-30">
                     <p>Embark on a transformative educational journey with us! Beyond facts, education is your gateway to personal growth and a brighter future. Whether you&apos;re honing skills, pursuing passions, or gearing up for a career, join us on a simple yet powerful path to a fulfilling journey. Prep for IIT-JEE, NEET-UG, CUET-UG, and board exams – let&apos;s make your aspirations a reality!</p>
                     <Link
                     //   href="/about"
                       href={'/'}
                       className="edu-sec-btn">Watch how to start</Link>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
};

export default EducationSection;