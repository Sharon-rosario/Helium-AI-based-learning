import React from 'react';
import Link from 'next/link';
import CourseImg from '../../../public/assets/img/browser-course/browser-course-01.jpg';
import ImgOne from '../../../public/assets/img/browser-course/bg-one.png';
import ImgTwo from '../../../public/assets/img/browser-course/bg-two.png';
import CourseImgTwo from '../../../public/assets/img/browser-course/browser-course-02.jpg';
import Image from 'next/image';

const BrowserCourseSection = () => {
    return (
        <div className="browser-course-area">
         <div className="container">
            <div className="row">
               <div className="col-xl-6 col-lg-6 col-md-12 mb-30">
                  <div className="browser-course-wrapper course-height">
                     <div className="browser-course-bg">
                        <Image src={window.innerWidth <= 580 ? ImgOne : CourseImg} style={{width:'100%', height:'auto'}} alt="img not found"/>
                     </div>
                     <div className="browser-course-content">
                        <span>Embark on a Teaching Journey with Us!</span>
                        <div className="browser-course-tittle">
                           <Link
                           //   href="/instructor"
                             href={'/'}
                             >Let&apos;s start shaping futures today! Join us in guiding the next generation.</Link>
                        </div>
                        <div className="browser-btn">
                           <Link 
                           //   href="/become-instructor" 
                             href={'/'} 
                             className="course-btn">Explore Now</Link>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-xl-6 col-lg-6 col-md-12 mb-30">
                  <div className="browser-course-wrapper course-height">
                     <div className="browser-course-bg">
                     <Image src={window.innerWidth <= 580 ? ImgTwo :CourseImgTwo} style={{width:'100%', height:'auto'}} alt="img not found"/>
                     </div>
                     <div className="row">
                        <div className="col-xl-7 col-lg-7">
                           <div className="browser-course-content">
                              <span>Unlock Your Potential!</span>
                              <div className="browser-course-tittle">
                                    <Link 
                                    //   href="/course-details"
                                      href={'/'}
                                      >Elevate your academic scores for competitive excellence.</Link>
                              </div>
                              <div className="browser-btn">
                                 <Link 
                                 // href="/course" 
                                 href={'/'}
                                 className="course-btn">Learn Now</Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    );
};

export default BrowserCourseSection;