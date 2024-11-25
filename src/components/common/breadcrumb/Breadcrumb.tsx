import React from 'react';
import Link from 'next/link';
import bgImage from '../../../../public/assets/img/slider/course-slider.jpg';
import helium from '../../../../public/assets/img/helium-logo/Rectangle.png';

interface PropsData {
   title: string | undefined,
   subTitle: string | undefined
}

const Breadcrumb = ({ title, subTitle }: PropsData) => {
   return (
      <>
        <div className="hero-arera course-item-height" style={{ backgroundImage: `url(${helium.src})`,  backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%'}}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="hero-course-1-text">
                            <h2>{title}</h2>
                        </div>
                        <div className="course-title-breadcrumb">
                            <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                <li className="breadcrumb-item"><span>{subTitle}</span></li>
                            </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
   );
};

export default Breadcrumb;