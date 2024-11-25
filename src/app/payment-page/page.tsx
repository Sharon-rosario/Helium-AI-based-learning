"use client";
import CCAvenue from "@/config/CCAvenue";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import logo from "../../../public/assets/img/teacher/helium_edu.png";

export default function Payment() {
  const host = "https://adminapi.heliumlearn.com";
//   const host = "http://localhost:8000";
  const router = useRouter();

  const searchParams = useSearchParams();

  const paymentCCAvenue = () => {
    let paymentData = {
      merchant_id: searchParams.get("merchant_id"),
      order_id: searchParams.get("order_id"),
      amount: searchParams.get("amount"),
      currency: "INR",
      billing_email: searchParams.get("billing_email"),
      billing_name: searchParams.get("billing_name"),
      billing_address: searchParams.get("billing_address"),
      billing_city: searchParams.get("billing_city"),
      billing_state: searchParams.get("billing_state"),
      billing_zip: searchParams.get("billing_zip"),
      billing_country: "INDIA",
      redirect_url: `${host}/users/on-successfull-transaction`, // Success URL (Required)
      cancel_url: `${host}/users/on-successfull-transaction`, // Failed/Cancel Payment URL (Required)
      language: "EN",
      billing_tel: searchParams.get("billing_tel"),
      merchant_param1: searchParams.get("userId"),
      merchant_param2: searchParams.get("courseId"),
      merchant_param3: searchParams.get("batchId"),
      merchant_param4: searchParams.get("planId"),
      merchant_param5: searchParams.get("plan_type"),
    };

    console.log(paymentData, "------------------------------paymentData");

    let encReq = CCAvenue.getEncryptedOrder(paymentData);
    let accessCode = "AVHW60LB29BA64WHAB";
    let URL = `https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction&merchant_id=${paymentData.merchant_id}6&encRequest=${encReq}&access_code=${accessCode}`;

    console.log(URL, "------------------------------URL");

    setTimeout(() => {
      router.push(URL);
    }, 5000);
  };

  useEffect(() => {
    paymentCCAvenue();
  }, []);

  return (
    <>
         <div id="loading">
            <div id="loading-center">
               <div id="loading-center-absolute">
                  <div className="loading-icon text-center d-flex flex-column align-items-center justify-content-center">
                     <Image style={{ width: 'auto', height: 'auto' }} src={logo} alt="logo" />
                     <div>
                        <div className="preloader">
                           <span></span>
                           <span></span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
  );
}
