"use client"
import Link from 'next/link';
import React from 'react';
import mentorOne from '../../../public/assets/img/gallery/mentor-1.png';
import mentorTwo from '../../../public/assets/img/gallery/mentor-2.png';
import Image from 'next/image';

const CourseDetails = () => {
   return (
      <>
         <section className="text-gray-600 body-font">
            <div className="px-10 py-20 mx-auto">
               <div className="flex flex-wrap -mx-4 -mb-10 text-center">
                  <div className="max-md:w-full max-md:pb-20 w-1/2 mb-10 px-2">
                     <div className="rounded-lg h-96 max-md:h-auto overflow-hidden">
                        <Image src={mentorOne} style={{width:'auto', height:'auto'}} alt="img not found"/>
                     </div>
                     <h2 className="title-font text-3xl font-medium text-black-900 mt-6 mb-3">🇮🇳Bharat&apos;s First Online Live Classes with Behaviour Analysis</h2>
                     <p className="leading-relaxed text-base text-black">Step into the future of learning! Our cutting-edge platform introduces a groundbreaking experience – 🇮🇳 Nation&apos;s First Online Live Classes with AI-Powered Behaviour Analysis. Unleash personalized, intelligent education for a more engaging future. Welcome to a smarter way of learning!</p>
                     <button className="flex mx-auto mt-6 text-white bg-[#410241] hover:bg-[#621562] border-0 py-2 px-5 focus:outline-none rounded">MORE→</button>
                  </div>

                  <div className="max-md:w-full w-1/2 mb-10 px-2">
                     <div className="rounded-lg h-96 max-md:h-auto overflow-hidden">
                        <Image src={mentorTwo} style={{width:'auto', height:'auto'}} alt="img not found"/>
                     </div>
                     <h2 className="title-font text-3xl font-medium text-gray-900 mt-6 mb-3">1:1 Doubt Solving Support</h2>
                     <p className="leading-relaxed text-base text-black">Elevate your understanding with AI-powered Doubt Solving! Get 1:1 Online Live Class Doubt Solving and Exclusive 1:1 Offline Doubt Solving at Your Home by your city&apos;s best teachers. Unmatched support, exclusively at Bharat&apos;s Only EdTech innovator!</p>
                     <button className="flex mx-auto mt-6 text-white bg-[#410241] hover:bg-[#621562] border-0 py-2 px-5 focus:outline-none rounded">MORE→</button>
                  </div>

               </div>
            </div>
         </section>
      </>
   );
};

export default CourseDetails;