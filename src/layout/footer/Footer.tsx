import Link from "next/link";
import React from "react";
import FooterLogo from "../../../public/assets/img/logo/helium-logo-wide.png";
import Image from "next/image";
import CopyrightArea from "./copyright-area";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-area pt-100">
          <div className="container">
            <div className="footer-main mb-60">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="footer-widget f-w1 mb-40">
                    <div className="footer-img">
                      <Link href="/">
                        <Image
                          src={FooterLogo}
                          style={{ width: "auto", height: "auto" }}
                          // className="w-[100px]"
                          alt="footer-logo"
                        />
                      </Link>
                      <p>
                        Levana Cyber Heights, 10th floor, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh- 226010 Bharat 🇮🇳
                      </p>
                    </div>
                    <div className="footer-icon">
                      <Link
                        // href="https://www.facebook.com/" 
                        href="https://m.facebook.com/heliumlearning"
                        target="_blank">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                      <Link
                        // href="https://twitter.com/"
                        href="https://x.com/heliumlearning"
                        target="_blank">
                        <i className="fab fa-twitter"></i>
                      </Link>
                      <Link
                        // href="https://instagram.com/" 
                        href="https://www.instagram.com/helium_learning/"
                        target="_blank">
                        <i className="fab fa-instagram"></i>
                      </Link>
                      <Link
                        //  href="https://www.linkedin.com"
                        href="https://www.linkedin.com/company/helium-edu-research-pvt-limited/mycompany/"
                        target="_blank">
                        {" "}
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="footer-widget f-w2 mb-40">
                    <h3>Useful Links</h3>
                    <ul>
                      <li>
                        <Link
                          href={{
                            pathname: '/policy-privacy',
                            query: { name: 'Terms & Conditions' },
                          }}
                        >Terms and Conditions</Link>
                      </li>
                      <li>
                        <Link
                          href={{
                            pathname: '/policy-privacy',
                            query: { name: 'Privacy & Policy' },
                          }}
                        >Privacy Policy</Link>
                      </li>
                      <li>
                        <Link
                          // href="/course"
                          href="/"
                        >
                          Compare Us</Link>
                      </li>
                      <li>
                        <Link
                          // href="/become-instructor"
                          href="/"
                        >Become Instructor</Link>
                      </li>
                      <li>
                        <Link
                          // href="/course"
                          href="/"
                        >
                          Build Career</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="footer-widget f-w3 mb-40">
                    <h3>Explore Courses</h3>
                    <ul>
                      <li>
                        <Link
                          // href="/course"
                          href="/"
                        >
                          IIT-JEE Advanced</Link>
                      </li>
                      <li>
                        <Link
                          // href="/course"
                          href="/"
                        >
                          JEE Main</Link>
                      </li>
                      <li>
                        <Link
                          // href="/course"
                          href="/"
                        >
                          NEET-UG</Link>
                      </li>
                      <li>
                        <Link
                          // href="/course"
                          href="/"
                        >
                          CUET-UG</Link>
                      </li>
                      <li>
                        <Link
                          // href="/course"
                          href="/"
                        >
                          Foundation (11th & 12th)</Link>
                      </li>
                      <li>
                        <Link
                          // href="/course"
                          href="/"
                        >
                          Board Examination</Link>
                      </li>
                      <li>
                        <Link
                          // href="/course"
                          href="/"
                        >
                          Early Lead (9th & 10th)</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="footer-widget f-w4 mb-40">
                    <h3 className="text-[#621562]">Insight Community</h3>
                    <ul>
                      <li>
                        <Link
                          // href="/course"
                          href="/"
                        >
                          Our Partners</Link>
                      </li>
                      <li>
                        <Link
                          // href="/contact"
                          href="/"
                        >Helium Blogs</Link>
                      </li>
                      <li>
                        <Link
                          href="/contact"
                          // href="/"
                        >Help and Support</Link>
                      </li>
                      <li>
                        <Link
                          // href="/contact"
                          href="/"
                        >Community</Link>
                      </li>
                      <li>
                        <Link
                          // href="/contact"
                          href="/"
                        >Helium e-Library</Link>
                      </li>
                      <li>
                        <Link
                          // href="/contact"
                          href="/"
                        >NCERT e-books</Link>
                      </li>
                      <li>
                        <Link
                          href="/faq-page"
                          // href="/"
                        >FAQ</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <CopyrightArea />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
