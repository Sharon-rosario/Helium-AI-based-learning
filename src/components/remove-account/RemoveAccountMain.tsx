"use client";
import React, { useEffect } from "react";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Image from "next/image";


const RemoveAccountMain = () => {
 useEffect(() => {
   const form = document.querySelector("#yourFormId");
   if (form) {
     form.addEventListener("submit", handleSubmit);
   }
   return () => {
     if (form) {
       form.removeEventListener("submit", handleSubmit);
     }
   };
 }, []);


 const handleSubmit = (event: any) => {
   event.preventDefault();
 };
 return (
   <main>
     <Breadcrumb title="Remove Account" subTitle="Remove Account" />


     <div className="pt-80 pb-90">
       <div className="container mx-auto px-4">
         <div className="flex flex-col md:flex-row md:space-x-6">
           <div className="md:flex-1 mt-8 mb-8">
             <div className="mb-6">
               <h1 className="text-3xl mb-4">
                 Account Deletion Guidelines
               </h1>
               <div className="mt-3 text-xl font-bold text-black">Permanent Account Closure Impact:</div>


               <div className="my-2"> 👉🏼 Complete termination of account access</div>


               <div className="my-2">👉🏼 Irreversible loss of personal learning data</div>
             </div>
             <div className="mb-6">
               <h4 className="text-xl mb-4">
                 Account Deletion Process:
               </h4>
               <div className="my-2"> 👉🏼 Navigate to Helium Learning mobile application</div>


               <div className="my-2">👉🏼 Locate to the Profile section</div>


               <div className="my-2">👉🏼 Click on the three dots on top right corner</div>


               <div className="my-2">👉🏼 Click on the delete Account</div>
             </div>
           </div>
           <div className="flex md:w-1/4 justify-center md:justify-start mt-0 md:mt-0">
           <img
             src="/assets/img/remove-account-page/remove-account.png"
             alt="Remove Account"
             className="w-32 md:w-60 h-auto"
           />
         </div>
         </div>
       </div>
     </div>
   </main>
 );
};


export default RemoveAccountMain;
