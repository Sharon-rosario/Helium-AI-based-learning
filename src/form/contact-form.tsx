import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';
import { useRouter } from "next/navigation";
import cogoToast from 'cogo-toast';

const ContactForm = () => {
    const router = useRouter();
    const [contactDetails, setContactDetails] = useState({
        name: "",
        phoneNumber: "",
        email: "",
        course: "",
        class: "",
        message: ""
    })

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (!contactDetails.name) {
            cogoToast.error('name cannot be blank.');
        } else if (!contactDetails.phoneNumber) {
            cogoToast.error('phone Number cannot be blank.');
        } 
        else if (contactDetails.phoneNumber.length < 10 || contactDetails.phoneNumber.length > 10) {
            cogoToast.error('phone Number must be 10 digit.');
        } 

        // else if (!contactDetails.email) {
        //     toast.error('email cannot be blank.', {
        //         position: "top-center",
        //         autoClose: 5000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //         theme: "light",
        //     });
        // } 
        else if (!contactDetails.course) {
            cogoToast.error('Please select course.');
        } else if (!contactDetails.class) {
            cogoToast.error('Please select class.');
        } else {
            cogoToast.success('Thank you for providing Information. we will reach you soon.');

            emailjs.sendForm('service_c6l7o8b', 'template_vx7j2i3', e.target, 'H5yuR3cLDiRsjrOqh')
                .then((result) => {


                    console.log(result,"--------------------------resuilt")

                    setTimeout(()=>{
                        router.push("/")
                        setContactDetails({
                            name: "",
                            phoneNumber: "",
                            email: "",
                            course: "",
                            class: "",
                            message: ""
                        })
                    },1000)
                }, (error) => {
                    console.log(error.text);
                });

        }
    };
    return (
        <div>

            <form action="#" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-xl-6">
                        <div className="contact-from-input mb-20">
                            <input type="text" value={contactDetails.name} onChange={(e) => setContactDetails({ ...contactDetails, name: e.target.value })} name="username" id="username" placeholder="Student Name" />
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="contact-from-input mb-20">
                            <input type="text" value={contactDetails.phoneNumber} onChange={(e) => setContactDetails({ ...contactDetails, phoneNumber: e.target.value })} placeholder="Mobile Number" name="number" id="number"/>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="contact-from-input mb-20">
                            <input type="text" value={contactDetails.email} onChange={(e) => setContactDetails({ ...contactDetails, email: e.target.value })} name="email" id="email" placeholder="Email" />
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="contact-select">
                            <select className="mb-20" name="course" id="course" onChange={(e) => setContactDetails({ ...contactDetails, course: e.target.value })}>
                                <option value="Subject"> Select Course</option>
                                <option value="IIT-JEE Advanced">JEE Main</option>
                                <option value="IIT-JEE Advanced">IIT-JEE Advanced</option>
                                <option value="NEET-UG">NEET-UG</option>
                                <option value="CUET-UG">CUET-UG</option>
                                <option value="Early Lead (9th & 10th)">Early Lead (9th & 10th)</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="contact-select">
                            <select className="mb-20" name="class" id="class" onChange={(e) => setContactDetails({ ...contactDetails, class: e.target.value })}>
                                <option value="Subject">Select Class</option>
                                <option value="9th class">9th class</option>
                                <option value="10th class">10th class</option>
                                <option value="11th class">11th class</option>
                                <option value="12th class Dropper">12th class Dropper</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <div className="contact-from-input mb-20">
                            <textarea value={contactDetails.message} onChange={(e) => setContactDetails({ ...contactDetails, message: e.target.value })} placeholder="Message" name="message"></textarea>
                        </div>
                    </div>
                    <div className="colxl-2 ">
                        <div className="cont-btn mb-20">
                            <button type="submit" className="cont-btn" id="button" value="Send Email">Submit</button>
                        </div>
                    </div>
                </div>
            </form>

            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

        </div>
    );
};

export default ContactForm;
