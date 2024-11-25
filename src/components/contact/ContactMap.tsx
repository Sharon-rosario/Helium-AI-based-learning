import React from 'react';

const ContactMap = () => {
    return (
        <div className="google-map-area contact-map pt-100 mb-30">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.122085689392!2d81.0099591!3d26.867862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be295be3524a9%3A0x329fad3755217788!2sLevana%20Cyber%20Heights!5e0!3m2!1sen!2sin!4v1709270115392!5m2!1sen!2sin" width="600" height="450" style={{border:0}} loading="lazy"></iframe>
        </div>
    );
};

export default ContactMap;