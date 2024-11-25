import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import StudentShapeOne from '../../../public/assets/img/shape/student-shape-03.png';
import StudentShapeTwo from '../../../public/assets/img/shape/student-shape-04.png';
import StudentShapeThere from '../../../public/assets/img/shape/student-shape-05.png';
import StudentShapeFour from '../../../public/assets/img/shape/student-shape-06.png';
import StudentShapeFive from '../../../public/assets/img/shape/student-shape-07.png';
import StudentShapeSix from '../../../public/assets/img/student-choose/student.png';

const StudentChooseSection = () => {
   return (
      <div className="student-choose-area fix pt-120 pb-110">
         <div className="container">
            <div className="row">
               <div className="col-xl-5 col-lg-5">
                  <div className="student-wrapper">
                     <div className="section-title mb-30">
                        <h2>Why Choose Us to <span className="down-mark-line">Ace</span> Exams?</h2>
                     </div>
                     <div className="sitdent-choose-content">
                        <p>Transform your learning journey with us! Our unique approach goes beyond knowledge acquisition – we empower students to sharpen critical thinking for the challenges ahead. Benefit from our team of experienced educators, ensuring expert guidance through complex concepts.
                        </p>
                     </div>
                     <div className="student-choose-list">
                        <ul>
                           <li>🚀 Easy Enrollment</li>
                           <li>🌎 Learn Anywhere</li>
                           <li>🧠 AI-Enhanced Live Classes</li>
                           <li>🤖 AI-Driven Performance Support</li>
                           <li>📚 Unlimited Practice</li>
                           <li>🎮 Gamified Tests</li>
                           <li>📖 Access to e-Library</li>
                           <li>🌟 World-Class Teachers</li>
                           <li>🗂️ Flash Cards</li>
                        </ul>
                     </div>
                     <div className="student-btn">
                        <Link
                           //   href="/about"
                           href={'/'}
                           className="edu-sec-btn">Learn Now</Link>
                     </div>
                  </div>
               </div>
               <div className="col-xl-2 col-lg-2">
                  <div className="student-wrapper position-relative">
                     <div className="shap-01">
                     </div>
                  </div>
               </div>
               <div className="col-xl-5 col-lg-5">
                  <div className="student-choose-wrapper position-relative">
                     <div className="shap-02">
                     </div>
                     <div className="shap-03">
                        <Image src={StudentShapeOne} style={{ width: '100%', height: 'auto' }} alt="img not found" />
                     </div>
                     <div className="shap-04">
                        <Image src={StudentShapeTwo} style={{ width: '100%', height: 'auto' }} alt="img not found" />
                     </div>
                     <div className="shap-05">
                        <Image src={StudentShapeThere} style={{ width: '100%', height: 'auto' }} alt="img not found" />
                     </div>
                     <div className="shap-06">
                        <Image src={StudentShapeFour} style={{ width: '100%', height: 'auto' }} alt="img not found" />
                     </div>
                     <div className="shap-07">
                        <Image src={StudentShapeFive} style={{ width: '100%', height: 'auto' }} alt="img not found" />
                     </div>
                     <div className="student-choose-thumb">
                        <Image src={StudentShapeSix} style={{ width: '100%', height: 'auto' }} alt="img not found" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default StudentChooseSection;