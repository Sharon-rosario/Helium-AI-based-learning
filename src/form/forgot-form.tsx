
"use client"
import Email from "@/svg/forgot-email-svg";
import React, {useEffect} from "react";

const ForgotForm = () => {
  const handleSubmit = (event:any) => {
    event.preventDefault();
  }

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
    
  return (
    <form className="text-center" onSubmit={handleSubmit}>
      <div className="login__input-wrapper">
        <div className="login__input-item">
          <div className="signup-wrapper">
            <input type="email" placeholder="Email" />
          </div>
        </div>
      </div>
      <div className="sing-buttom d-inline-block mx-auto px-5 mb-20">
        <button type="submit">
        Send Request
        </button>
      </div>
    </form>
  );
};

export default ForgotForm;
