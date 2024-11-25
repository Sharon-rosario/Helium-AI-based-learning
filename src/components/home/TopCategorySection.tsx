"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import categories_data from '@/data/categories-data';

const TopCategorySection = () => {
   const [courseDetail, setCouseDetail] = useState({
      title: "",
      description: "",
      isModalOpen: false
   })

   const onClickedCourse = ({ description, title }: any) => {
      console.log(description, title, "--------------------------------------------------------")
      setCouseDetail({ ...courseDetail, title,description, isModalOpen:true });
   }

   useEffect(() => {
      const handleEscapeKey = (event:any) => {
        if (event.key === 'Escape' || event.keyCode === 27) {
         setCouseDetail({...courseDetail,isModalOpen:false})
          console.log('Escape key pressed!');
        }
      };
  
      // Add event listener when the component mounts
      document.addEventListener('keydown', handleEscapeKey);

    }, []);

   return (
      <>
         <div className="top-catagory-area py-110 pb-10">
            <div className="bg-[#f6f8fb]">
               <div className="row">
                  <div className="col-xl-4 offset-xl-4 col-lg-6 offset-lg-3 col-md-12 col-sm justify-content-center mb-30 mt-40 pt-40">
                     <div className="section-title mb-20 text-center">
                        <h2>Explore <br /> Our Top <span className="down-mark-line">Courses</span></h2>
                     </div>
                  </div>
               </div>
               <div className="row px-20 max-sm:px-0 mx-1">
                  {
                     categories_data.slice(0, 9).map((item) => (
                        <div key={item.id} className="col-xl-4 col-lg-6 col-md-6">
                           <Link
                              //  href="/course"
                              href={'/'}
                           >
                              <div className="catagory-wrapper mb-30" onClick={() => onClickedCourse(item)}>
                                 <div className="catagory-thumb">
                                    {item.icon && <item.icon />}
                                 </div>
                                 <div className="catagory-content">
                                    <h3>{item.title}</h3>
                                    <span>{item.description.slice(0, 70)}...</span>
                                 </div>
                              </div>
                           </Link>
                        </div>
                     ))
                  }
               </div>
            </div>

            <div id="default-modal" tabIndex={-1} aria-hidden="true" className={`${courseDetail.isModalOpen ? "" : "hidden"} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
               <div className="relative p-4 w-full max-w-2xl max-h-full m-auto top-28">
                  {/* <!-- Modal content --> */}
                  <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                     {/* <!-- Modal header --> */}
                     <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                           {courseDetail?.title}
                        </h3>
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal" onClick={()=>setCouseDetail({...courseDetail,isModalOpen:false})}>
                           <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                           </svg>
                           <span className="sr-only">Close modal</span>
                        </button>
                     </div>
                     {/* <!-- Modal body --> */}
                     <div className="p-4 md:p-5 space-y-4">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        {courseDetail?.description}
                        </p>
                     </div>

                     {/* <!-- Modal footer --> */}
                     {/* <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button data-modal-hide="default-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                        <button data-modal-hide="default-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Decline</button>
                     </div> */}

                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default TopCategorySection;