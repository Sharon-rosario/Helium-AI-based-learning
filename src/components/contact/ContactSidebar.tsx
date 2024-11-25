
import ContactIconOne from '@/svg/contact-icon-one';
import ContactIconThree from '@/svg/contact-icon-three';
import ContactIconTwo from '@/svg/contact-icon-two';
import Link from 'next/link';
import React from 'react';

const ContactSidebar = () => {
    return (
        <div className="sidebar-widget-wrapper">
            <div className="support-contact mb-30">
                <div className="support-tittle">
                        <h4>Support Contact</h4>
                </div>
                <div className="support-contact-inner">
                <div className="support-item">
                    <div className="support-icon">
                      <ContactIconOne/>
                    </div>
                    <div className="support-info-phone">
                        <span>Phone</span>
                        <p>Mobile :<Link href="tel:(+88)872-670-780"> (+91) 98897 63777</Link></p>
                        <p>Mobile :<Link href="tel:(+91)422-655-793"> (+91) 099808 14445</Link></p>
                    </div>
                </div>
                <div className="support-item">
                    <div className="support-icon">
                       <ContactIconTwo/>
                    </div>
                    <div className="support-info-email">
                        <span>Email</span>
                        <Link href="mailto:connect@heliumlearn.com">connect@heliumlearn.com</Link>
                        <Link href="mailto:hr@heliumlearning.org">hr@heliumlearning.org</Link>
                    </div>
                </div>
                <div className="support-item">
                    <div className="support-icon">
                        <ContactIconThree/>
                    </div>
                    <div className="support-info-location">
                        <span>Location</span>
                        <Link href="#">Levana Cyber Heights, 10th floor, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh- 226010 Bharat 🇮🇳</Link>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSidebar;