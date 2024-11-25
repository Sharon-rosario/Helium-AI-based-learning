import React from 'react';
import Link from 'next/link';

const BecomeInstructorSection = () => {
    return (
        <div className="become-intructor-area pt-110 pb-120">
            <div className="container">
                <div className="row justify-content-center text-center">
                <div className="col-xl-6 col-md-8">
                    <div className="become-intructor-text">
                        <h2>Become an Instructor Today</h2>
                        <p>Join one of the world’s largest online learning marketplaces. Our Instructor Support Team is
                            ready to help you while our Teaching Center</p>
                        <Link href="/become-instructor" className="edu-btn">Get started now</Link>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default BecomeInstructorSection;