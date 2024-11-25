"use client"
import React, { useEffect } from 'react';

const StudentContactForm = () => {
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
        <>
              <form onSubmit={handleSubmit} action="#">
                <div className="row">
                  <div className="col-md-6">
                    <div className="contact-from-input mb-20">
                      <label htmlFor="FirstName">First Name</label>
                      <input
                        id="FirstName"
                        type="text"
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="contact-from-input mb-20">
                      <label htmlFor="LastName">Last Name</label>
                      <input
                        id="LastName"
                        type="text"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="contact-from-input mb-20">
                      <label htmlFor="User">User Name</label>
                      <input id="User" type="text" placeholder="User Name" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="contact-from-input mb-20">
                      <label htmlFor="Email">Email</label>
                      <input id="Email" type="email" placeholder="Email" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="contact-from-input mb-20">
                      <label htmlFor="Phone">Phone </label>
                      <input id="Phone" type="text" placeholder="Phone" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="contact-from-input mb-20">
                      <label htmlFor="Occupation">Occupation </label>
                      <input
                        id="Occupation"
                        type="text"
                        placeholder="Occupation "
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="contact-from-input mb-20">
                      <label htmlFor="Bio">Biography </label>
                      <textarea id="Bio" placeholder="Biography"></textarea>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="cont-btn mb-20 mt-10">
                      <button type="button" className="cont-btn">
                        Update Profile
                      </button>
                    </div>
                  </div>
                </div>
              </form>
        </>
    );
};

export default StudentContactForm;