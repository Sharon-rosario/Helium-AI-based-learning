import counter_data from '@/data/counter-data';
import React from 'react';
import CountUpContent from '../common/counter/CountUpContent';



const AboutCounterSection = () => {
    return (
        <div className="counter-area pt-120 pb-75">
         <div className="container">
            <div className="row">
              {
                counter_data.slice(8,12).map((item)=>(
                    <div key={item.id} className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="counter-box text-center mb-40">
                       <div className="counter-icon">
                          {item.icon &&<item.icon/>}
                          <div className="count-number">
                           <span className="counters"><CountUpContent number={item.countNum} text={item.countPlus}></CountUpContent></span>
                             <p>{item.description}</p>
                          </div>
                       </div>
                    </div>
                 </div>
                ))
              }
            </div>
         </div>
      </div>
    );
};

export default AboutCounterSection;