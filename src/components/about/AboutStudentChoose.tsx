import React from 'react';
import studentShapeImgOne from '../../../public/assets/img/shape/student-shape-03.png';
import studentShapeImgTwo from '../../../public/assets/img/shape/student-shape-04.png';
import studentShapeImgThree from '../../../public/assets/img/shape/student-shape-05.png';
import studentShapeImgFour from '../../../public/assets/img/shape/student-shape-06.png';
import studentShapeImgFive from '../../../public/assets/img/shape/student-shape-07.png';
import studentImg from '../../../public/assets/img/student-choose/student.png';
import Image from 'next/image';

const AboutStudentChoose = () => {
    return (
        <div className="student-choose-area fix pt-110 pb-90">
         <div className="container">
            <div className="row">
               <div className="col-xl-5 col-lg-5">
                  <div className="student-wrapper mb-30">
                     <div className="section-title mb-30">
                        <h2>Why Students <span className="down-mark-line">Choose</span> Us for Level Up Their Score</h2>
                     </div>
                     <div className="sitdent-choose-content">
                        <h5>Vision</h5>
                        <p>
                        Helium envisions a future where every student, regardless of their background or location in India, has equal access to extraordinary and valuable education. We strive to revolutionize the learning experience by leveraging advanced AI-powered technology to identify and address the unique needs of individual students. Our vision is to empower educators and tutors, laying the foundation for a nation where quality education is a fundamental right for everyone.
                        </p>
                        <h5>Mission</h5>
                        <p>
                        At Helium, our mission is to provide exceptional and personalized learning content that caters to the diverse needs of students across India. We are committed to using cutting-edge AI technology to create a learning platform that goes beyond traditional boundaries. By offering courses for JEE Main, JEE Advance, NEET(UG), CUET, and Foundation, we aim to make quality education accessible to all. We are dedicated to fostering a community where students, teachers, and parents collaborate, ensuring a holistic and effective learning journey.
                        </p>

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
                  <div className="student-choose-wrapper position-relative mb-30">
                     <div className="shap-02">
                     </div>
                     <div className="shap-03">
                        <Image src={studentShapeImgOne} style={{width:'auto', height:'auto'}} alt="img not found"/>
                     </div>
                     <div className="shap-04">
                     <Image src={studentShapeImgTwo} style={{width:'auto', height:'auto'}} alt="img not found"/>
                     </div>
                     <div className="shap-05">
                     <Image src={studentShapeImgThree} style={{width:'auto', height:'auto'}} alt="img not found"/>
                     </div>
                     <div className="shap-06">
                     <Image src={studentShapeImgFour} style={{width:'auto', height:'auto'}} alt="img not found"/>
                     </div>
                     <div className="shap-07">
                     <Image src={studentShapeImgFive} style={{width:'auto', height:'auto'}} alt="img not found"/>
                     </div>

                     <div className="student-choose-thumb">
                     <Image src={studentImg} style={{width:'auto', height:'auto'}} alt="img not found"/>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    );
};

export default AboutStudentChoose;