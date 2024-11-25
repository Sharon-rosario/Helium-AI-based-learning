"use client"
import React, { useEffect } from 'react';

const StudentPasswordForm = () => {
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
                    <label htmlFor="Current">Current Password</label>
                    <input
                      id="Current"
                      type="password"
                      placeholder="Type password"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="contact-from-input mb-20">
                    <label htmlFor="New">New Password</label>
                    <input
                      id="New"
                      type="password"
                      placeholder="Type password"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="contact-from-input mb-20">
                    <label htmlFor="Retype">Re-type New Password</label>
                    <input
                      id="Retype"
                      type="password"
                      placeholder="Type password"
                    />
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

export default StudentPasswordForm;