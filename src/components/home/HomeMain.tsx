"use client";
import React, { useEffect } from 'react';
import HeroSection from './HeroSection';
import TopCategorySection from './TopCategorySection';
import FeatureSection from './FututreSection';
import StudentChooseSection from './StudentChooseSection';
import BrowserCourseSection from './BrowserCourseSection';
import EducationSection from './EducationSection';
import dynamic from 'next/dynamic';
const BrandSlider = dynamic(() => import('../Elements/Slider/BrandSlider'), {
    ssr: false
  })
  const TestimonialSlider = dynamic(() => import("../Elements/Slider/TestimonialSlider"), {
    ssr: false
  })
import HeaderOne from '@/layout/header/HeaderOne';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import CourseDetails from './CourseDetails';
import ExploreCourse from './ExploreCourse';

const HomeMain = () => {
  const router = useRouter();

  const userdata = useSelector(
    (state: any) => state.user
);

// console.log(userdata,"------------------------------user data")

//   useEffect(() => {
//      if (userdata.email && userdata.password) {
//       router.push('/');
//      } else {
//       router.push('/login');
//      }
//   }, [userdata])

    return (
        <div>
            <HeaderOne />
            <HeroSection />
            <CourseDetails/>
            <TopCategorySection/>
            <ExploreCourse/>
            {/* <CourseTab/> */}
            <FeatureSection/>
            <StudentChooseSection/>
            <TestimonialSlider/>
            <BrowserCourseSection/>
            <EducationSection/>
            {/* <BrandSlider/> */}
        </div>
    );
};

export default HomeMain;