"use client"
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import featureShapeImg from '../../../public/assets/img/shape/features-shape.png';
import featureShapeImgTwo from '../../../public/assets/img/shape/features-shape-2.png';
import videoThumb from '../../../public/assets/img/features/features.jpg';
import Image from 'next/image';

const AboutFeatureVideo = () => {

   const [isOpen, setIsOpen] = useState(false);
   const openVideoModal = () => setIsOpen(!isOpen);

    return (
      <div className="features-video-area">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-10 col-md-9">
                  <div className="">
                  <ModalVideo channel='youtube' isOpen={isOpen} videoId='vWLcyFtni6U' onClose={() => { openVideoModal(); }} />
                     <div className="features-video-wrapper">
                        <div className="features-shape-wrapper-1">
                           <Image className="features-shape" src={featureShapeImg} style={{width:'auto', height:'auto'}} alt="features-shape"/>
                           Get <span>help</span> from <br/> this video

                        </div>
                        <div className="features-shape-werapper-2">
                           <span>65k+</span> <br/>views daily
                           <Image className="features-shape-2" src={featureShapeImgTwo} style={{width:'auto', height:'auto'}} alt="features-shape-2"/>
                        </div>
                        <div className="reatures-video-thumb">
                           <Image src={videoThumb} style={{width:'100%', height:'auto'}} alt="features-img"/>
                        </div>
                        <div className="features-video-content">
                           <div className="features-btn">
                              <span className="popup-video" onClick={() => { openVideoModal(); }}><i className="fas fa-play"></i></span>
                           </div>
                           <div className="video-btn-text">
                              <span>Watch Video
                                 <br/>Intro</span>
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

export default AboutFeatureVideo;