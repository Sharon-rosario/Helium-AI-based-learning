import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import AboutStudentChoose from './AboutStudentChoose';
import AboutFeatureSection from './AboutFeatureSection';
import AboutFeatureVideo from './AboutFeatureVideo';
import AboutCounterSection from './AboutCounterSection';
import KnowUsBetter from './KnowUsBetter';
import BecomeInstructorSection from './BecomeInstructorSection';
import AffiliateSection from './AffiliateSection';


const AboutMain = () => {
    return (
        <main>
            <Breadcrumb title="About" subTitle="About Us" />
            <AboutStudentChoose />
            <AboutFeatureSection />
            <AboutFeatureVideo />
            <AboutCounterSection />
            <KnowUsBetter />
            <BecomeInstructorSection />
            {/* <AffiliateSection /> */}
        </main>
    );
};

export default AboutMain;