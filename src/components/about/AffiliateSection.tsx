import Brand_data from '@/data/brand-data';
import Image from 'next/image';
import React from 'react';

const AffiliateSection = () => {
    return (
        <div className="affiliates-area pt-120 pb-120">
            <div className="container">
                <div className="row">
                <div className="col-xl-12">
                    <div className="affiliates-wrapper">
                        {
                            Brand_data.slice(7,17).map((item)=>(
                                <div key={item.id} className="singel-affiliates-img">
                               {item.image &&  <Image src={item.image} style={{width:'100%', height:'auto'}} alt="affiliates-img"/>}
                            </div>
                            ))
                        }
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default AffiliateSection;