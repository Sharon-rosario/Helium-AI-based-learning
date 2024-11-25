import education_data from '@/data/education-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const KnowUsBetter = () => {
    return (
        <div className="know-us-better-area pb-90">
         <div className="container">
            <div className="know-us-border pt-110">
               <div className="row justify-content-center">
                  <div className="col-xl-10 col-lg-12">
                     <div className="row">
                        <div className="col-xl-6 col-lg-6">
                           <div className="section-title mb-55">
                              <h2>Know us <span className="down-mark-line-2">Better</span> Than<br/>
                                 Other Education Platform </h2>
                           </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 justify-content-end">
                           <div className="know-us-tittle mb-55">
                              <p>Helping employees gain skills and providing career development often take a back seat
                                 to business priorities but workplace better right now. Seventy percent of workers think
                                 that.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row">
                {
                    education_data.map((item)=>(
                        <div key={item.id} className="col-xl-4 col-lg-4 col-md-6">
                        <div className="know-us-wrapper mb-30">
                           <div className="know-us-better-thumb">
                              <Link href="/about">{item.image && <Image src={item.image} style={{width:'100%', height:'auto'}} alt="know-us-img"/>}</Link>
                           </div>
                           <div className="know-us-text text-center">
                              <Link href="/about">
                                 <h3>{item.title}</h3>
                              </Link>
                           </div>
                        </div>
                     </div>
                    ))
                }
               </div>
            </div>
         </div>
      </div>
    );
};

export default KnowUsBetter;