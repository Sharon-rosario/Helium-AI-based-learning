"use client"
import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import { useSearchParams } from 'next/navigation'

const PrivacyPolicyMain = () => {

  const searchParams = useSearchParams()

  return (
    <>
      <Breadcrumb title={`${searchParams.get("name") ? searchParams.get("name"):'Privacy & Policy'}`} subTitle={`${searchParams.get("name") ? searchParams.get("name"):'Privacy & Policy'}`} />
      <section className="terms_conditions_section section_space_lg pt-120 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <ul
                className="nav tabs_nav_boxed unordered_list_block mb-60"
                role="tablist"
              >
                <li role="presentation">
                  <button
                    className="active"
                    data-bs-toggle="tab"
                    data-bs-target="#tab_privacy_policy"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    <i className="fas fa-circle"></i>
                    <span>Policy & Privacy</span>
                  </button>
                </li>
                <li role="presentation">
                  <button
                    data-bs-toggle="tab"
                    data-bs-target="#tab_terms_conditions"
                    type="button"
                    role="tab"
                    aria-selected="true"
                  >
                    <i className="fas fa-circle"></i>
                    <span>Helium Terms & Conditions</span>
                  </button>
                </li>
              </ul>
            </div>
            <div className="col-lg-9">
              <div className="tab-content mb-60">
                {/* Privacy Policy */}
                <div
                  className="tab-pane fade show active"
                  id="tab_privacy_policy"
                  role="tabpanel"
                >
                  <div className="terms_conditions_content">
                    <h3 className="warpper_title text-center">Privacy Policy</h3>
                    <h5 className='warpper_title text-center'>Helium Edu Research Private Limited</h5>
                    <p>
                      Effective On 1st February 2024 <br /><br />

                      This Privacy Policy (“Privacy Policy/Policy”) discloses the privacy practices for Helium Edu Research
                      Private Limited (“Helium”, “We/we” or “Us/us”) with regard to the collection and use of the Personal
                      Information (defined hereunder) of the customers, vendors, employees and the users (“You/you” or
                      “Your/your”) and use of the online platform www.heliumlearn.com (“Website”). This Privacy Policy along
                      with Terms of Use describes our practices regarding, including your choices in relation to how we collect,
                      store, use, share and secure your Personal Information across our Website. It also describes your
                      choices regarding use, access and correction of your Personal Information and your rights in relation to
                      your Personal Information and how to contact us or supervisory authorities in the event you have a
                      complaint. <br />
                      By providing your consent to this Privacy Policy and accepting the Terms of Use, you agree to the
                      collection, use and transfer of your Personal Information as set out in this Privacy Policy. If you do not
                      agree with the terms of this Privacy Policy, please do not use/access this Website.
                      We will review this Privacy Policy from time to time to make sure it is up to date. If you are just a visitor,
                      then please note that this Privacy Policy is subject to change at any time without notice. To make sure
                      you are aware of any changes, please review this Policy periodically. If you are our registered user, we
                      will notify you before we make changes to this Policy and give you the opportunity to review the revised
                      Policy before you choose to continue using our services.
                      By Personal Information, we mean any information that can either itself identify you as an individual
                      (&quot;Personally Identifying Information&quot;) or that can be connected to you indirectly by linking it to Personally
                      Identifying Information. Please note that usage of the term Personal Information in this Privacy Policy
                      includes sensitive personal data or information, wherever appropriate and/or mandated under applicable
                      laws. <br /><br />

                      COLLECTION OF INFORMATION <br />
                      As a visitor, you can browse our Website to find out more about our Website. You are not required to
                      provide us with any Personal Information as a visitor. When you visit the Website, we collect and store
                      certain information to improve security, analyze trends and administer the Website with a view to assist us
                      in improving customer experience. We use this information to evaluate traffic patterns on our Website so
                      that we can make it more useful to our visitors. <br />
                      We collect your Personal Information when you register with us, when you express an interest in
                      obtaining information about us or our products and services, when you participate in activities on our
                      Website or otherwise contact us. <br />
                      We will only collect your Personal Information if we have a proper reason for doing so, e.g.: to comply
                      with our legal and regulatory obligations; for the performance of our contract with you or to take steps at
                      your request before entering into a contract; for our legitimate interests (where permitted by law) or those
                      of a third party; or where you have given consent. <br />
                      In some cases, we may also have a legal obligation to collect Personal Information from you or may
                      otherwise need the Personal Information to protect your vital interests or those of another person (for
                      example, to prevent payment fraud or confirm your identity.) <br />
                      Our primary goal in collecting your Personal Information is to provide you a safe, efficient, smooth, and
                      customized experience. This allows us to provide courses, study material, tutorials that most likely meet
                      your needs and to customize our Website to make your experience safer and easier. We also use your
                      Personally Identifiable Information together with other information to help us better understand our users
                      and to improve the content and functionality of our Website. The information we learn from you helps us
                      personalize and continually improve your experience at our Website. We do not voluntarily make this
                      information available to third parties, nor do we use it for any other purpose, except as set out herein. <br /><br />

                      When you visit our Website, as part of a purchase of one of our courses or registering on our Website, we
                      may collect a variety of Personal Information that you will voluntarily provide to us via one of our contact
                      forms, via a chat or phone session, such as:

                      <ul className="icon_list unordered_list_block my-5">
                        <li>
                          <strong>1. Contact Information, such as name, email address, display picture, mailing address, phone
                            number, IP address, geographic location, or phone number.</strong>
                        </li>
                        <li>
                          <strong>2. Information to enable us to check and verify your identity, e.g., your date of birth, mark-sheets,
                            Passport/Aadhar/Voter ID details.</strong>
                        </li>
                        <li>
                          <strong>3. Billing Information, such as debit card number, credit card number and billing address.</strong>
                        </li>
                        <li>
                          <strong>4. Unique Identifiers, such as username or password.</strong>
                        </li>
                        <li>
                          <strong>5. Reviews or ratings, syllabus and course preferences, account settings, (including preferences set
                            in the &quot; Account &quot; section of our Website);</strong>
                        </li>
                        <li>
                          <strong>6. Information provided to us through our service, interaction with our customer service, participation
                            in surveys or marketing promotions.</strong>
                        </li>
                      </ul><br /><br />

                    </p>
                    <h4 className="info_title">
                      If you are an employee of Helium, we collect the following Personal Information:
                    </h4>

                    <ul className="icon_list unordered_list_block">
                      <li>
                        <strong>1. Name</strong>
                      </li>
                      <li>
                        <strong>2. Address</strong>
                      </li>
                      <li>
                        <strong>3. Email address.</strong>
                      </li>
                      <li>
                        <strong>4. Contact number.</strong>
                      </li>
                      <li>
                        <strong>5. Date of birth</strong>
                      </li>
                      <li>
                        <strong>6. Gender</strong>
                      </li>
                      <li>
                        <strong>7. Pan card number</strong>
                      </li>
                      <li>
                        <strong>8. Aadhar number</strong>
                      </li>
                      <li>
                        <strong>9. Passport number</strong>
                      </li>
                      <li>
                        <strong>10. Marital status</strong>
                      </li>
                      <li>
                        <strong>11. Nationality</strong>
                      </li>
                      <li>
                        <strong>12. Details of family members and dependents</strong>
                      </li>
                      <li>
                        <strong>13. Bank account details.</strong>
                      </li>
                      <li>
                        <strong>14. Education details</strong>
                      </li>
                      <li>
                        <strong>15. Blood group</strong>
                      </li>
                    </ul>

                    <p>
                      We collect information about you and your use of our service, your interactions with us as well as
                      information regarding your computer or other device used to access our service. This information includes
                      your activity on our Website, such as classes, study materials, courses and search queries; details of
                      your interactions with customer service , such as the date , time and reason for contacting us, transcripts
                      of any chat conversations, and if you call us , your phone number and call recordings; device IDs or other
                      unique identifiers, device and software characteristics (such as type and configuration), connection
                      information, statistics on page views , referring source (for example, referral URLs), IP address (which
                      may tell us your general location), browser and standard web server log information, information
                      collected via the use of cookies, web beacons and other technologies. <br />
                      With the help of backend applications, we aim at providing better services and better interaction with
                      teachers, depending on the beneficiary’s line of interest. We also may ask for this information at other
                      times, such as when you enter contests or other promotions sponsored by us and/or our partners.
                      If you use a feature that requires payment of a fee options like NEFT, or Card will appear. In case of
                      payments via credit or debit card, we will redirect you to registered payment gateways such as razorpay,
                      ccavenue, and other such registered gateways. You may store and save your payment details like card
                      numbers with the gateway. We do not have access to this data. All payment transactions are processed
                      through secure payment gateway providers. We do not store any card information (other than the last 4
                      digits of your card) in our servers. <br /><br />

                      When you use one of our paid products, we track the web pages, and information that has been
                      accessed by you, and store it on our servers. This enables us to track items that you have completed,
                      and those that you need to see.<br />
                      The user  &apos;s full name and his/her display picture can be publicly displayed on the Website. Depending on
                      what profile and what services they are seeking, Helium can ask for more information relating to address,
                      billing information, certificates, past employment information etc. <br />
                      Helium can use technologies such as cookies, clear gifs, log files, and flash cookies for several
                      purposes, including to help understand how you interact with our Website and services, to provide a
                      better experience. <br /><br />

                      USAGE AND RETENTON OF INFORMATION <br />
                      We use the Personal Information we collect, where it is necessary to deliver the services you have
                      requested, where it is necessary to exercise or comply with legal rights or obligations or for normal
                      business purposes of the kind set out in this Policy. <br /><br />
                      We will use your Personal Information to provide, analyze, administer, and improve our services, to
                      provide you with a personalized experience on our Website (especially, by offering you services that is
                      best suited for you), to contact you about your account and our services, to provide you customer service,
                      to provide you with personalized marketing and to detect, prevent, mitigate and investigate fraudulent or
                      illegal activities. <br /><br />


                      We further use your Personal Information to determine your general geographic location, provide
                      localized courses and classes, provide you with customized and personalized study material,
                      recommendations, determine your internet service provider, and help us quickly and efficiently respond
                      to inquiries and requests and enforcing our terms (such as determining free trial eligibility) and
                      communicate with you concerning our service (for example by email, push notifications, text messaging
                      ,and online messaging channels), so that we can send you details about new features and content
                      available on the Website, special offers, promotional announcements, surveys, and to assist you with
                      operational requests such as password reset requests. <br /><br />
                      If you are an employee, we use your Personal Information for purposes of payrolling and recording
                      attendance, deduction of taxes, payment of remuneration, providing employee benefits (including making
                      contributions to the provident fund, procuring medical insurance, etc.).<br /><br />
                      If you are a vendor/supplier, we use your Personal Information and for the purpose of making payments
                      and deducting taxes. <br />
                      Helium is a community. We offer several features that allow members to connect and communicate in
                      public or semi-public spaces, such as Forums and Teams. Please be sensible and judge before posting
                      in these community spaces or sharing your Personal Information with others on Helium. Be aware that
                      any Personal Information you submit there can be read, collected, or used by others, or could be used to
                      send you unsolicited messages. <br /><br />

                      SHARING AND DISCLOSING PERSONAL INFORMATION <br /><br />
                      We use other companies, agents, or contractors (&quot;Service Providers&quot;) to perform services on our behalf
                      or to assist us with the provision of services to you. We engage Service Providers to provide marketing,
                      advertising, communications, infrastructure, and IT services, to personalize and optimize our service, to
                      process credit card transactions or other payment methods, to provide customer service, to collect debts,
                      to analyze and enhance data (including data about user&apos;s interactions with our service), and to process
                      and administer consumer surveys. In the course of providing such services, these Service Providers may
                      have access to your Personal Information or other information. We do not authorize them to use or
                      disclose your Personal Information except in connection with providing their services.
                      If you are an employee, vendor/supplier of Helium, your Personal Information may be shared internally
                      with the relevant departments on a need-to-know basis. <br /><br />
                      If you are a user of Helium services, your personal information such as information related to name,
                      testimonials, scores obtained and all the relevant details pertaining to the competitive examination(s)
                      pursued or to be pursued in future by user, may be shared in any and all forms of media, including but not
                      limited to Social media, TVC, Digital space, hoardings, interviews, LIVE talks and in our mobile app and
                      websites. The parent/ guardian for and on behalf of the user, consents to share and disclose personal
                      information mentioned hereinabove, for promoting user’s success and for the purpose of commercial,
                      promotional publicity, business plan/strategy of Helium. <br /><br />
                      Note to our customers in Europe: We transfer your Personal Information from the European Economic
                      Area and Switzerland to India. By submitting your data and/or using our services, you consent to the
                      transfer, storing, and processing of your Personal Information in India. <br /><br />


                      SECURITY <br />
                      We shall try to take all precautions to protect the Personal Information both online and offline. We will try
                      to protect your information using technical and administrative security measures to reduce the risks of
                      loss, misuse, unauthorized access, disclosure, and alteration. We have standard SSL certification which
                      basically helps us create a secure connection between our server and user to render any information or
                      action. Some of the safeguards we use are firewalls and data encryption, physical access controls to our
                      data centers and information access authorization controls. Only user passwords are encrypted in 64-bit
                      encryption and stored because generally users use the same password on multiple sites, to prevent any
                      kind of theft, piracy, or unauthorized access. If you believe your account has been abused or hacked,
                      please contact us by sending us an email at connect@heliumlearn.com. <br />
                      We do not sell, transfer, or rent your Personal Information to third parties for their marketing purposes
                      without your explicit consent and we only use your information as described in the Privacy Policy. We
                      view protection of your privacy as a very important community principle. We understand clearly that you
                      and your Personal Information is one of our most important assets. <br />
                      We store and process your Personal Information on computers located in India that are protected by
                      physical as well as technological security devices. We use third parties to verify and certify our privacy
                      principles. If you object to your Personal Information being transferred or used in this way, please do not
                      accept this Privacy Policy. <br />
                      Under no circumstances, we rent, trade, transfer or share your Personal Information that we have
                      collected with any other company for their marketing purposes without your consent. We reserve the right
                      to communicate your Personal Information to any third party that makes a legally compliant request for its
                      disclosure. <br /><br />


                      KEEPING YOUR PERSONAL INFORMATION SECURE <br />
                      We have appropriate security measures to prevent your Personal Information from being accidentally lost
                      or used or accessed unlawfully. Processing your Personal Information will be done only in an authorized
                      manner and subject to a duty of confidentiality. We also have procedures in place to deal with any
                      suspected data security breach. We will notify you about any applicable regulator of a suspected data
                      security breach where we are legally required to do so. <br /><br />


                      Notwithstanding anything contained anywhere in this Policy; we cannot assure absolute security to your
                      Personal Information and by entering or by logging into our Website, you explicitly agree not to sue us for
                      any data breach. <br /><br />

                      COOKIES <br />
                      We transfer cookies, which are small files containing a string of character, to your IP address, giving the
                      browser distinct identification, to keep track of the user&apos;s preferences. Furthermore, these files also help
                      in logging-in faster and they act as a mechanism to determine user trends. The data thus retrieved from
                      the user&apos; s IP address, enables us to enhance our offers, including but not limited to more content in areas
                      the user s IP address, enables us to enhance our offers, including but not limited to more content in areas
                      of greater interest to most users. <br />
                      Our Website uses &quot;Cookies&quot; to identify the areas of our Website that you have visited. A Cookie is a small
                      piece of data stored on your computer or mobile device by your web browser. We use Cookies to
                      personalize the Content that you see on our Website. Most web browsers can be set to disable the use
                      of Cookies. However, if you disable Cookies, you may not be able to access functionality on our Website
                      correctly or at all. We never place Personally Information in Cookies. <br /><br />

                      THIRD PARTIES AND LINKS <br />
                      We may pass your details to other companies in our group. We may also pass your details to our agents
                      and subcontractors to help us with any of our uses of your data set out in our Privacy Policy. For
                      example, we may use third parties to assist us with delivering services to you, to help us to collect
                      payments from you, to analyses data and to provide us with marketing or customer service assistance. <br /><br />

                      We may exchange information with third parties for the purposes of fraud protection and credit risk
                      reduction. We may transfer our databases containing your Personal Information if we sell our business or
                      part of it. Other than as set out in this Privacy Policy, we shall NOT sell or disclose your Personal
                      Information to third parties without obtaining your prior consent unless it is necessary for the purposes set
                      out in this Privacy Policy or unless we are required to do so by law. The Website may contain advertising
                      of third parties and links to other sites or frames of other sites. Please be aware that we are not
                      responsible for the privacy practices or content of those third parties or other sites, nor for any third party
                      to whom we transfer your data in accordance with our Privacy Policy. <br /><br />
                      Our Website may contain links to other websites that are not under our direct control. These websites
                      may have their own policies regarding privacy. We have no control of or responsibility for linked websites
                      and provide these links solely for the convenience and information of our visitors. You are accessing such
                      linked websites shall be at your own risk. These websites are not subject to this Privacy Policy. You
                      should check the privacy policies, if any, of those individual websites to see how the operators of those
                      third-party websites will utilize your personal information. In addition, these websites may contain a link to
                      websites of our affiliates. The websites of our affiliates are not subject to this Privacy Policy, and you
                      should check their individual privacy policies to see how the operators of such websites will utilize your
                      personal information. <br /><br />

                      CONSULTING <br />
                      We use third parties to help us provide services to You including the fulfilment of service, processing of
                      payments, monitoring site activity, conducting surveys, maintaining our database, administering emails,
                      and administering contents, and to provide aggregate, comparative information on the performance of our
                      Website to us and a select group. <br /><br />

                      CHOICE <br />
                      It is open for you to customize our usage of your personal information to communicate with you, to send
                      you marketing information, how we provide you with customized and relevant advertising, and whether
                      you want to stay signed into your account. <br />
                      If you do not wish to receive marketing communications from us, you can unsubscribe from the link in the
                      email you would receive or change your communication preferences or indicate your communication
                      preferences. You can also reach us via chat, WhatsApp, call or email to block promotional communication
                      to you. Keep in mind, we do not sell or rent your personal information to third parties for their marketing
                      purposes without your explicit consent. <br /><br />


                      OWNERSHIP OF RIGHTS <br />
                      All rights, including copyright, in this Website are owned by or licensed to us. Any use of this Website or
                      its contents, including copying or storing it or them in whole or part, other than for your own personal, non-
                      commercial use is prohibited without our permission. You are prohibited from modifying, copying,

                      distributing, transmitting, displaying, printing, publishing, selling, licensing, creating derivative works or
                      using any content available on or through our Website for commercial or public purposes. You may not
                      modify, distribute or re-post something on this Website for any purpose. <br />
                      The Site contains copyrighted material, trademarks, and other proprietary information, including, but not
                      limited to, text, software, photos, video, graphics, music, sound, and the entire contents of Helium’s
                      protected by copyright as a collective work under the applicable copyright laws. Helium owns a copyright
                      in the selection, coordination, arrangement, and enhancement of such content, as well as copyright or
                      license to use in the content original to it. You may not modify, publish, transmit, participate in the transfer
                      or sale, create derivative works, or in any way exploit, any of the content, in whole or in part. You may
                      download / print / save copyrighted material for your personal use only. Except as otherwise expressly
                      stated under copyright law, no copying, redistribution, retransmission, publication, or commercial
                      exploitation of downloaded material without the express permission of Helium is permitted. If copying,
                      redistribution, or publication of copyrighted material is expressly permitted by Helium, then no changes in
                      or deletion of author attribution, trademark legend or copyright notice shall be made. <br />
                      You acknowledge that you do not acquire any ownership rights by downloading copyrighted material.
                      Trademarks that are located within or on our Website or a website otherwise owned or operated in
                      conjunction with Helium shall not be deemed to be in the public domain but rather the exclusive property
                      of Helium, unless such site is under license from the trademark owner thereof in which case such license
                      is for the exclusive benefit and use of Helium unless otherwise stated. <br />
                      Helium does not have any express burden or responsibility to provide you with indications, markings, or
                      anything else that may aid you in determining whether the material in question is copyrighted or
                      trademarked. You shall be solely liable for any damage resulting from any infringement of copyrights,
                      trademarks, proprietary rights or any other harm resulting from such a submission. By submitting material
                      to any public area of the Website, you warrant that the owner of such material has expressly granted
                      Helium the royalty-free, perpetual, irrevocable, non-exclusive right and license to use, reproduce, modify,
                      adapt, publish, translate and distribute such material (in whole or in part) worldwide and/or to incorporate
                      it in other works in any form, media or technology now known or hereafter developed for the full term of
                      any copyright that may exist in such material. You also permit any other end user to access, view, store or
                      reproduce the material for that end user&apos;s personal use. You hereby grant Helium the right to edit, copy,
                      publish and distribute any material made available on the Website by you. If you come across any abuse
                      or violation of these Terms, please report to connect@heliumlearn.com <br /><br />

                      YOUR RIGHTS IN RELATION TO PERSONAL INFORMATION COLLECTED BY US <br />

                      You have the right to withdraw your consent at any time in writing by sending an e-mail to us at
                      connect@heliumlearn.com, in accordance with the terms of this Privacy Policy. However, please note that
                      withdrawal of consent will not be retrospective in nature and shall be applicable prospectively.
                      You may write to us at connect@heliumlearn.com to access, review, modify or correct your Personal
                      Information or withdraw your consent to provide Personal Information. We are not responsible for the
                      authenticity of the information provided by you. <br />
                      You agree and acknowledge that Your right to access, modify and/or withdrawing Your consent to provide
                      Personal Information as mentioned above may be denied or limited by us, as may be required under any
                      applicable law, law enforcement requests or under any judicial proceedings. <br /><br />


                      CONDITIONS OF USE <br />
                      Licensee does not warrant that this Website, its servers, or email sent by us or on our behalf are virus
                      free. We will not be liable for any damages of any kind arising from the use of this Website, including, but
                      not limited to compensatory, direct, indirect, incidental, punitive, special, or consequential damages, loss
                      of data, goodwill, business opportunity, income or profit, loss of or damage to property and claims of third
                      parties. <br /><br />
                      DATA PROTECTION OFFICER <br />
                      Any discrepancies and grievances with respect to processing of Personal Information shall be informed to
                      the designated Data Protection Team as mentioned below:
                      Name: Pradeep <br />
                      Designation: Co-founder <br />
                      Email ID: director@heliumlearn.com <br /><br />
                      CONSENT TO THE POLICY <br />
                      The Terms of Use Agreement is incorporated herein by reference in its entirety.

                      GENERAL <br />
                      Modification: <br />
                      We may at any time modify the Terms of Use of our Website without any prior notification to you. Should
                      you wish to terminate your account due to a modification to the Terms or the Privacy Policy, you may do
                      so email us at connect@heliumlearn.com. However, if you continue to use the service you shall be
                      deemed to have agreed to accept and abide by the modified Terms of this Website.<br /><br />
                      Privileged/Exclusive Service: <br />
                      By having a Helium account, you have explicitly given consent for us to capture images (followed by
                      analysis), camera/mic permissions to make video calls and record the same.
                      Helium May Disclose Information: <br />
                      <ul className="icon_list unordered_list_block my-5">
                        <li>
                          <strong>1. As required by law, such as to comply with a subpoena, or similar legal process;</strong>
                        </li>
                        <li>
                          <strong>2. To enforce applicable ToU (Terms of Use), including investigation of potential violations thereof;</strong>
                        </li>
                        <li>
                          <strong>3. When we believe in good faith (doctrine of uberrima fides) that the disclosure is necessary to
                            protect our rights, protect your safety or the safety of others, investigate fraud, address security or
                            technical issues or respond to a government request;</strong>
                        </li>
                        <li>
                          <strong>4. With our trusted service providers who work on our behalf and do not have an independent use of
                            the information we disclose to them and have agreed to and adhered to the rules set forth in this</strong>
                        </li>
                      </ul>
                      <br /><br />

                      Policy: <br /><br />

                      <ul className="icon_list unordered_list_block my-5">
                        <li>
                          <strong>1. to protect against imminent harm to the rights, property or safety of the Application/Website or our
                            users or the public as required or permitted by law;</strong>
                        </li>
                        <li>
                          <strong>2. with third party service providers in order to personalize the
                            Application/Website/Services/products for a better user experience and to perform behavioral
                            analysis;</strong>
                        </li>
                        <li>
                          <strong>3. internally with the relevant departments to facilitate payments of salary, deduction of taxes,
                            procuring medical insurance, etc.</strong>
                        </li>
                      </ul>

                      Governing Law and Jurisdiction: <br />
                      In the event of any dispute arising between the parties with respect to this Agreement, the same shall be
                      referred to the Sole Arbitrator and the arbitration shall be in accordance with Arbitration and Conciliation
                      Act of 1996. The language of arbitration proceedings shall be English. The seat and place of arbitration
                      shall be Gorakhpur, Uttar Pradesh and the decision of the Arbitrator shall be final and binding on both
                      parties herein. <br />
                      This contract shall be subject to the exclusive jurisdiction of courts in Gorakhpur, Uttar Pradesh, India and
                      shall be governed by the Indian laws.

                    </p>
                  </div>
                </div>

                {/* Term and Condition */}
                <div
                  className="tab-pane fade"
                  id="tab_terms_conditions"
                  role="tabpanel"
                >
                  <div className="terms_conditions_content">
                    <h3 className="warpper_title">
                      Helium Terms and Conditions Agreement
                    </h3>
                    <p>
                      <b className='text-black text-sm'>HELIUM EDU RESEARCH PRIVATE LIMITED </b>having its registered office at Ambeypuram
                      Phase 2, Beside GM Academy, Khorabar, Gorakhpur, UP 273010, IN (hereinafter referred to as
                      &quot;  Helium&quot; , &quot; we&quot; , &quot; us&quot; , or &quot;  our&quot; ) provides online courses, e-library and conducts online classes,
                      live demo, doubt clearing sessions for the students seeking to enroll for such courses (the &quot; 
                      Services&quot; ), which Services are accessible at heliumlearn.com and Helium App and any other
                      websites through which  <b className='text-black text-sm'>Helium</b> makes the Services available (collectively, the &quot; Site &quot; ) and as
                      applications for mobile, tablet and other smart devices and application program interfaces
                      (collectively, the &quot; Applications&quot; ).
                    </p>
                    <p>
                      By accessing or using the Site, Application or Services or by downloading or posting any
                      content from or on the Site, via the Applications, you would be indicating that you have read,
                      and that you understand and agree to be bound by these terms and receive our Services (&quot; 
                      Terms of Services&quot;  or &quot; Terms&quot; ), whether or not you have registered with the Site and/or
                      Application.
                    </p>
                    <p>
                      Therefore, please read these Terms of service before accessing or using the Site, Application or<br />
                      Services or downloading or posting any content from or on the Site, via the Application or<br />
                      through the Services, carefully as they contain important information regarding your legal rights,<br />
                      remedies and obligations.
                    </p>
                    <p>
                      If you do not agree to these Terms, then you have no right to access or use the Site,
                      Application, Services, or Collective Content (as defined below).
                    </p>
                    <p>
                      Definition <br />
                      In addition to other words and expressions that may be defined elsewhere in these Terms,
                      unless the context otherwise requires, the following capitalized terms wherever used in the
                      Agreement shall have the meanings as ascribed hereunder:
                    </p>
                    <p>
                      &quot;Courses&quot; means educational courses listed on the Site or Application.<br />
                      &quot;Course Fees&quot; means the amounts that are due and payable by a Student for enrolment of
                      Course.<br />
                      &quot;ollective Content&quot; means Member Content and <b className='text-black text-sm'>Helium</b> Content.<br />
                      Content&quot; means text, graphics, images, music, software (excluding the Application), audio,
                      video, information or other materials.<br />
                      &quot;Listing&quot; means Courses that are listed by <b className='text-black text-sm'>Helium</b> as available via the Site, Application, and
                      Services.
                    </p>
                    <p>
                      &quot;Member&quot; means a person who completes the <b className='text-black text-sm'>Helium</b> account registration process, including
                      but not limited to Teachers and Students, Parents as described under &quot;Account Registration &quot; in
                      Clause 7 below.
                    </p>
                    <p>
                      &quot; Member Content &quot;  means all Content that a Member posts, uploads, publishes, submits,
                      transmits, or includes in their Listing, Member profile or <b className='text-black text-sm'>Helium</b> promotional campaign to be
                      made available through the Site, Application or Services.
                    </p>
                    <p>
                      &quot; Payment Method&quot;  means a payment method that you have added to your <b className='text-black text-sm'>Helium</b> Account,
                      such as a credit card, debit card, UPI or net banking and others.
                    </p>
                    <p>
                      &quot; Student &quot;  means a Member who enrolls for Courses on Application or Site, in case of minor
                      (below 18 Years old child) student the parent or guardian who enroll their child or ward for the
                      Courses on Application or Site.
                    </p>
                    <p>
                      &quot; Tax&quot;  or &quot; Taxes &quot;  mean any sales taxes, value added taxes (VAT), goods and services taxes
                      (GST), service tax, that <b className='text-black text-sm'>Helium</b> may be required by law to collect and remit to governmental
                      agencies, and other similar municipal, state, federal and national indirect or other withholding
                      and personal or corporate income taxes.
                    </p>
                    <p>
                      “Teacher” means a Member who has been selected by <b className='text-black text-sm'>Helium</b> in order to provide services
                      through the Site or Application
                    </p>
                    <p>
                      &quot; Parents&quot;  means the parents of enrolded students with Helium who are involving in the students
                      performance measurements dashboard through the websit or Application.
                    </p>
                    <p>
                    &quot; <b className='text-black text-sm'>Helium</b> Content &quot;  means all Content that <b className='text-black text-sm'>Helium</b> makes available through the Site,
                      Application, Services, or its related promotional campaigns and official social media channels,
                      including any Content licensed from a third party, but excluding Student Content.
                    </p>
                    <p>
                      Terms of Service
                    </p>
                    <p>
                      We believe that every user of our Application/Services/products/Website must be in a position to
                      provide informed consent prior to providing any Information required for the use of the
                      Application/Services/products/Website. By registering with us, you are expressly consenting to
                      our collection, processing, storing, disclosing, and handling of your information set forth in our
                      Privacy Policy now and as amended by us. Processing your information in any way, including,
                      but not limited to, collecting, storing, deleting, using, combining, sharing, transferring, and
                      disclosing information, all of which activities will take place in India. If you reside outside India
                      your information will be transferred, processed, and stored in accordance with the applicable
                      data protection laws of India.
                    </p>
                    <p>
                      By using the Site, Applications or Services, you agree to comply with and be legally bound by
                      the terms and conditions of these Terms, whether or not you become a registered user of the
                      Services. These Terms govern your access to and use of the Site, Application and Services and
                      all Collective Content (defined above), and constitute a binding legal agreement between you
                      and <b className='text-black text-sm'>Helium</b>. The user further accepts to allow <b className='text-black text-sm'>Helium</b> Edu Research Private Limited to reach
                      them through Call, SMS, Email, Whatsapp for providing existing services and for providing
                      information on new products and services and it will supersede the registry of NDNC & DND as
                      per the regulation of TRAI under the guidelines of TCCPR
                    </p>
                    <p>
                      I hereby authorize to receive SMS, Whatsapp, Email and other communications via <b className='text-black text-sm'>Helium</b> and
                      it supersedes the registry of NDNC & DND as per the regulation of TRAI
                    </p>
                    <p>
                      In addition, certain areas of the Site and Application (and your access to or use of certain
                      aspects of the Services or Collective Content) may have different terms and conditions,
                      standards, guidelines, or policies posted or may require you to agree with and accept additional
                      terms and conditions. If there is a conflict between these Terms and terms and conditions
                      posted for a specific area of the Site, Application, Services, or Collective Content, the latter
                      terms and conditions will take precedence with respect to your use of or access to that area of
                      the Site, Application, Services, or Collective Content.
                    </p>
                    <p>
                      If you do not agree to these Terms, you have no right to obtain information from or otherwise
                      continue using the Site, Application or Services. Failure to use the Site, Application or Services
                      in accordance with these Terms may subject you to civil and criminal liabilities.
                    </p>
                    <p>
                      The Site, Application and Services comprise an online platform which creates Listings for
                      Courses and Students may learn about and enroll for the course directly through the Site and
                      Application.
                    </p>
                    <p>
                      You acknowledge and agree that, by accessing or using the Site, Application or Services or by
                      downloading or posting any content from or on the Site or via the Application, you are indicating
                      that you have read, and that you understand and agree to be bound by these Terms and
                      receive our Services, whether or not you have registered with the Site and Application. If you do
                      not agree to these terms, then you have no right to access or use the Site, Application,
                      Services, or Collective Content. If you accept or agree to these Terms on behalf of a company
                      or other legal entity, you represent and warrant that you have the authority to bind that company
                      or other legal entity to these Terms and, in such event, you and your will refer and apply to
                      that company or other legal entity.
                    </p>
                    <p>
                      GDPR COMPLIANCE STATEMENT <br />
                      <b className='text-black text-sm'>Helium Edu Research Pvt. Ltd.</b> respects and complies with the EU General Data Protection
                      Regulations (GDPR). Some of the key ways we comply with these regulations are:
                    </p>
                    <p>
                      Consent <br />
                      We explain what you &apos;   re consenting to clearly and without  &apos;   legalese &apos;   , and ask that you explicitly
                      consent to contact from us.
                    </p>
                    <p>
                      Breach Notification <br />
                      In the event of a breach, we will notify affected users within 72 hours of first having become
                      aware of the breach.
                    </p>
                    <p>
                      Right to Access <br />
                      Users can request confirmation as to whether or not personal data concerning them is being
                      processed, where and for what purpose. Further, we shall provide a copy of the personal data,
                      in an electronic format.
                    </p>
                    <p>
                      Right to be Forgotten <br />
                      Once we have compared your (the subjects) rights to &quot; the public interest in the availability of the
                      data &apos;  , we may delete your personal data where you have requested this.
                    </p>
                    <p>
                      Data Portability <br />
                      We allow you to receive the personal data concerning you, which we will provide in a  &apos;commonly
                      used and machine readable format and you have the right to transmit that data to another
                       &apos;controller &apos;.
                    </p>
                    <p>
                      Privacy by Design <br />
                      We implement appropriate technical and organizational measures, in an effective way and
                      protect the rights of data subjects &apos;. We hold and process only the data absolutely necessary for
                      the completion of our duties (data minimisation), as well as limiting the access to personal data
                      to those needing to act out the processing.
                    </p>
                    <p>
                      Eligibility <br />
                      Use of the Site, Application and Services is available only to persons who can form legally
                      binding contracts under Indian laws. The Site, Application and Services are intended solely for
                      persons who are 18 years of age or older. If you are below 18, then ONLY your parent or
                      guardian can open an account and help you enroll in courses that are appropriate for you. The
                      use of the Site, Application and Services is also not available to persons whose membership
                      has been suspended or terminated by <b className='text-black text-sm'>Helium</b> for any reason whatsoever. Any access to or use
                      of the Site, Application or Services by anyone under 18 years is expressly prohibited. By
                      accessing or using the Site, Application or Services you represent and warrant that you are 18
                      years or older.
                    </p>
                    <p>
                      Usage of Site, Application or Services <br /><br />
                      The Site, Application and Services can be used to facilitate the Students to enroll for Courses.
                      Such Courses are included in Listings on the Site, Application and Services by <b className='text-black text-sm'>Helium</b>. You
                      may view Listings as an unregistered visitor to the Site, Application and Services; however, if
                      you wish to enroll for the Courses, you must first register to create a <b className='text-black text-sm'>Helium</b> Account (defined
                      below).
                    </p>
                    <p>
                      <b className='text-black text-sm'>Helium</b> makes available an online platform which provides various online Courses for the
                      Students. Unless explicitly specified otherwise in the <b className='text-black text-sm'>Helium</b> platform, <b className='text-black text-sm'>Helium</b> &apos;s responsibilities
                      are limited to facilitating the availability of the Courses through the Site, Application and
                      Services.
                    </p>
                    <p>
                      Account Registration <br /><br />

                      In order to access certain features of the Site and Application, and to enroll for Courses, you
                      must register to create an account (&quot;<b className='text-black text-sm'>Helium</b> Account &quot; ) and become a Member. You may
                      register to join the Services directly via the Site or Application or as described in this section. A
                      Teacher is also registered and an account (&quot;  <b className='text-black text-sm'>Helium</b> Account&quot; ) created once selected by
                      <b className='text-black text-sm'> Helium</b> for providing services through the Site or Application. <br /><br />

                      You can also register to join by logging into your account with certain third-party social
                      networking sites (&quot; SNS &quot; ) (including, but not limited to, Facebook; each such account, a &quot; Third-
                      Party Account&quot;), via our Site or Application, as described below. As part of the functionality of
                      the Site, Application and Services, you may link your <b className='text-black text-sm'>Helium</b> Account with Third-Party
                      Accounts, by either: (i) providing your Third-Party Account login information to <b className='text-black text-sm'>Helium</b> through
                      the Site, Services or Application; or (ii) allowing <b className='text-black text-sm'>Helium</b> to access your Third-Party Account, as
                      permitted under the applicable terms and conditions that govern your use of each Third-Party
                      Account. You represent that you are entitled to disclose your Third-Party Account login
                      information to <b className='text-black text-sm'>Helium</b> and/or grant <b className='text-black text-sm'>Helium</b> access to your Third-Party Account (including, but
                      not limited to, for use for the purposes described herein), without breach by you of any of the
                      terms and conditions that govern your use of the applicable Third-Party Account and without
                      obligating <b className='text-black text-sm'>Helium</b> to pay any fees or making <b className='text-black text-sm'>Helium</b> subject to any usage limitations imposed
                      by such third-party service providers. By granting <b className='text-black text-sm'>Helium</b> access to any Third-Party Accounts,
                      you understand that <b className='text-black text-sm'>Helium</b> will access, make available and store (if applicable) any Content
                      that you have provided to and stored in your Third-Party Account (&quot;  SNS Content &quot; ) so that it is
                      available on and through the Site, Services and Application via your <b className='text-black text-sm'>Helium</b> Account and
                      <b className='text-black text-sm'> Helium</b> Account profile page. Unless otherwise specified in these Terms, all SNS Content, if
                      any, will be considered to be Member Content for all purposes of these Terms. Depending on
                      the Third-Party Accounts you choose and subject to the privacy settings that you have set in
                      such Third-Party Accounts, personally identifiable information that you post to your Third-Party
                      Accounts will be available on and through your <b className='text-black text-sm'>Helium</b> Account on the Site, Services and
                      Application.

                      Please note that if a Third-Party Account or associated service becomes
                      unavailable or <b className='text-black text-sm'>Helium</b>&quot;s access to such Third-Party Account is terminated by the third-party
                      service provider, then SNS Content will no longer be available on and through the Site, Services
                      and Application. You have the ability to disable the connection between your <b className='text-black text-sm'>Helium</b> Account
                      and your Third-Party Accounts, at any time, by accessing the &quot;Settings&quot; section of the Site and
                      Application. Please note that your relationship with the third-party service providers associated
                      with your third-party accounts is governed solely by your agreement(s) with such third-party
                      service providers. <b className='text-black text-sm'>Helium</b> makes no effort to review any SNS Content for any purpose,
                      including but not limited to for accuracy, legality or non-infringement and <b className='text-black text-sm'>Helium</b> is not
                      responsible for any SNS Content. <br /><br />


                      Your <b className='text-black text-sm'>Helium</b> Account and your <b className='text-black text-sm'>Helium</b> Account profile page will be created for your use of the
                      Site and Application based upon the personal information you provide to us or that we obtain via
                      an SNS as described above. You may not have more than one (1) active <b className='text-black text-sm'>Helium</b> Account. You
                      agree to provide accurate, current and complete information during the registration process and
                      to update such information to keep it accurate, current and complete. <b className='text-black text-sm'>Helium</b> reserves the right
                      to suspend or terminate your <b className='text-black text-sm'>Helium</b> Account and your access to the Site, Application and
                      Services if you create more than one (1) <b className='text-black text-sm'>Helium</b> Account, or if any information provided during
                      the registration process or thereafter proves to be inaccurate, fraudulent, not current,
                      incomplete, or otherwise in violation of these Terms. <br /><br />
                      You are responsible for safeguarding your password. You agree that you will not disclose your
                      password to any third party and that you will take sole responsibility for any activities or actions
                      under your <b className='text-black text-sm'>Helium</b> Account, whether or not you have authorized such activities or actions. You
                      will immediately notify <b className='text-black text-sm'>Helium</b> of any unauthorized use of your <b className='text-black text-sm'>Helium</b> Account. <br /><br />
                      Course Listings <br /><br />
                      <b className='text-black text-sm'>Helium</b> will create Listing of various online Courses and the details about the Course, including,
                      but not limited to, the subject, topic, number of sessions, mode of conduct, and time slots of the
                      lectures and pricing and related rules and financial terms will be listed on the Site and the Application. Listings will be made publicly available via the Site, Application and Services. You
                      understand and agree that the placement or ranking of Listings in search results may depend on
                      a variety of factors, including, but not limited to Students preferences, ratings.
                      Students will be able to view Courses via the Site, Application and Services based upon the
                      information provided in the Listing, Students requirements, and Students search parameters
                      and preferences. We understand and agree that once a Student requests enrolment for Course,
                      We may not request the Student to pay a higher price than that mentioned in the Site or
                      Application. <br /><br />

                      Please note that <b className='text-black text-sm'>Helium</b> assumes no responsibility for a Student&quot;s compliance with any
                      agreements with or duties to third parties, applicable laws, rules and regulations. <b className='text-black text-sm'> Helium </b>
                      reserves the right, at any time and without prior notice, to remove or disable access to any
                      Student for any reason, that <b className='text-black text-sm'>Helium</b>, in its sole discretion, considers to be objectionable for any
                      reason, in violation of these Terms or <b className='text-black text-sm'>Helium</b>&apos;s then-current Standards, Trademark & Branding
                      Guidelines, or otherwise harmful to the Site, Application or Services.<br /><br />


                      If you are a Teacher, you understand and agree that your relationship with <b className='text-black text-sm'>Helium</b> is limited to
                      being a Member and an independent, third-party contractor, and not an employee, agent, joint-
                      venturer or partner of <b className='text-black text-sm'>Helium</b> for any reason, and you act exclusively on your own behalf andfor your own benefit, and not on behalf of or for the benefit of <b className='text-black text-sm'>Helium</b>. <b className='text-black text-sm'>Helium</b> does not control
                      your offline activities. As a Member you agree not to do anything to create a false impression
                      that you are endorsed by, partnering with, or acting on behalf of or for the benefit of, including
                      by inappropriately using any <b className='text-black text-sm'>Helium</b> intellectual property.<br /><br />


                      When you enroll for a Course, you will also be required to upload certain information, such as,
                      uploading a profile picture or verifying phone number. Any Member wishing to enroll for any of
                      the Courses must meet these requirements.<br /><br />

                      No Endorsement <br />
                      By using the Site, Application or Services, you agree that any legal remedy or liability that you
                      seek to obtain for actions or omissions of other Members or other third parties will be limited to a
                      claim against the particular Members or other third parties who caused you harm. You agree not
                      to attempt to impose liability on or seek any legal remedy from <b className='text-black text-sm'>Helium</b> with respect to such
                      actions or omissions. <br /><br />

                      Payment Terms<br />
                      If an enrolment is requested for any Course via the Site, Application or Services, We will either
                      pre-approve, confirm or reject the enrolment request within the period of 7 days from the date of
                      request for enrolment ( &apos;   Enrolment Request Period &apos;   ), otherwise the enrolment request will
                      automatically expire. If We are unable to confirm or decide to reject an enrolment request within
                      the Enrolment Request Period, any amounts collected by <b className='text-black text-sm'>Helium</b> for the requested enrolment
                      will be refunded to the concerned Student. When We confirm an enrolment requested by a
                      Student, <b className='text-black text-sm'>Helium</b> will send the Student an email, text message or message via e-mail and the
                      Application confirming such enrolment, depending on the selections you make via the Site,
                      Application and Services. <br /><br />
                      The Course Fees payable will be displayed to the Student before the Student sends an
                      enrolment request to <b className='text-black text-sm'>Helium</b>. Upon receipt of the Students enrolment request, <b className='text-black text-sm'>Helium</b> may
                      initiate a pre-authorization and/or charge a nominal amount to Student &apos;  s Payment Method
                      pursuant to the Payments Terms. If a requested enrolment is canceled (before any tuition fees
                      are provided), any amounts collected by <b className='text-black text-sm'>Helium</b> will be refunded to such Student, depending on
                      the selections the Student makes via the Site and Application, and any pre-authorization of
                      Student&apos;s Payment Method will be released, if applicable. <br />
                      <b className='text-black text-sm'>Helium</b> will collect the Course Fees from Students at the time of the enrolment request.
                      <b className='text-black text-sm'>Helium</b> agrees that no refund will be permitted in respect of tuitions already provided, access
                      given of others content and in accordance with the cancellation policy reflected in the relevant
                      Listing, (i) permit the Student to cancel the enrolment and (ii) refund to the Student that portion
                      of the Course Fees specified in the applicable cancellation policy. In case relevant Listing does
                      not have a specified cancellation policy, the refund amount would be pro-rata to the
                      unconsumed portion of the tuition. <br />
                      You agree that <b className='text-black text-sm'>Helium</b> through its Site or Application would raise system generated invoices to
                      the Student in relation to the Course for which the Student has enrolled or in relation to any
                      kind of payment done, as per applicable laws. <b className='text-black text-sm'>Helium</b> will raise an invoice for the above which
                      shall be inclusive of all applicable Taxes. <br />
                      You as a Student agree to pay the Course/ content Fees for any enrolment requested, in
                      connection with your <b className='text-black text-sm'>Helium</b> Account. <b className='text-black text-sm'>Helium</b> will collect the Course Fees pursuant to the <br />
                      Payments Terms. <br />
                      Once your confirmed enrollment transaction is complete you will receive a confirmation email
                      summarizing your confirmed enrolment. <br /><br />

                      Cancellations and Refunds <br /><br />
                      If, as a Student, you wish to cancel a confirmed enrolment made via the Site or the Application,
                      after enrolment to the Course, the cancellation policy contained in the applicable Listing will
                      apply to such cancellation provided that no refund will be made in respect of tuitions already
                      provided. Our ability to refund the Course Fees and other amounts charged to you will depend
                      upon the terms of the applicable cancellation policy and financial charges applicable in case of
                      course payment through No Cost EMI options. Details regarding refunds and cancellation
                      policies are available via the Site and Application. <b className='text-black text-sm'>Helium</b> will initiate any refunds due pursuant
                      to the Payments Terms. Please refer to the Refunds section of FAQs for latest updated terms
                      and conditions for various categories of listings/courses. <br /><br />
                      If we cancel a confirmed enrolment made via the Site, Services, and Application, (i) <b className='text-black text-sm'>Helium</b> will
                      refund the Course Fees paid by the Student for such enrolment to the applicable Student
                      pursuant to the Payments Terms which shall not exceed the total amount paid by the Student. <br /><br />
                      Taxes <br />
                      You understand and acknowledge that appropriate governmental agencies, departments or
                      authorities (the &apos;Tax Authority &apos;) where your office or residence is located may require Taxes to
                      be collected from Students on the amount paid for the Course and to be remitted to the
                      respective Tax Authority. The laws in jurisdictions may vary, but these Taxes may be required to
                      be collected and remitted as a percentage of the Course Fees set by <b className='text-black text-sm'>Helium</b>. <br /><br />
                      User Conduct <br /><br />
                      You understand and agree that you are solely responsible for compliance with any and all laws,
                      rules, regulations, and Tax obligations that may apply to your use of the Site, Application,
                      Services and Collective Content. In connection with your use of the Site, Application, Services
                      and Collective Content, you may not and you agree that you will not:violate any local, state, national, or other law or regulation, or any order of a court, including,
                      without limitation, Tax regulations; <br /><br />

                      use manual or automated software, devices, scripts, robots, backdoors or other means or
                      processes to access, &quot;scrape,&quot; &quot;crawl&quot; or &quot;spider&quot; any web pages or other services contained in
                      the Site, Application, Services or Collective Content; <br /><br />
                      access or use our Site, Application, Services expose or allow to be used or exposed, any
                      <b className='text-black text-sm'> Helium</b> Content: (i) that is not publicly displayed by <b className='text-black text-sm'>Helium</b> in its search results pages or listing
                      pages before an enrolment is confirmed; (ii) in any way that is inconsistent with
                      the <b className='text-black text-sm'>Helium</b>&apos;s Privacy Policy or Terms of Service; or (iii) in any way that otherwise violates the
                      privacy rights or any other rights of Helium&quot;s users or any other third party; <br /><br />
                      use the Site, Application, Services or Collective Content for any commercial or other purposes
                      that are not expressly permitted by these Terms or in a manner that falsely implies <b className='text-black text-sm'>Helium </b>
                      endorsement, partnership or otherwise misleads others as to your affiliation with <b className='text-black text-sm'>Helium</b>.
                      dilute, tarnish or otherwise harm the <b className='text-black text-sm'>Helium</b> brand in any way, including through unauthorized
                      use of Collective Content, registering and/or using <b className='text-black text-sm'>Helium</b> or derivative terms in domain names,
                      trade names, trademarks or other source identifiers, or registering and/or using domains names,
                      trade names, trademarks or other source identifiers that closely imitate or are confusingly similar
                      to <b className='text-black text-sm'>Helium</b> domains, trademarks, taglines, promotional campaigns or Collective Content; <br /><br />
                      copy, store or otherwise access or use any information contained on the Site, Application,
                      Services or Collective Content for purposes not expressly permitted by these Terms; <br /><br />
                      infringe the rights of <b className='text-black text-sm'>Helium</b> or the rights of any other person or entity, including without
                      limitation, their intellectual property, privacy, publicity or contractual right <br /><br />
                      interfere with or damage our Site, Application or Services, including, without limitation, through
                      the use of viruses, cancel bots, Trojan horses, harmful code, flood pings, denial-of-service
                      attacks, backdoors, packet or IP spoofing, forged routing or electronic mail address information
                      or similar methods or technology; <br /><br />
                      use our Site, Application or Services to transmit, distribute, post or submit any information
                      concerning any other person or entity, including without limitation, photographs of others without
                      their permission, personal contact information or credit, debit, calling card or account numbers; <br /><br />
                      use our Site, Application, Services or Collective Content in connection with the distribution of
                      unsolicited commercial email (&quot;spam &quot;) or advertisements unrelated to lodging in a private
                      residence; <br /><br />
                      &apos;stalk&apos; or harass any other user of our Site, Application, Services or Collective Content, or
                      collect or store any personally identifiable information about any other user other than for
                      purposes of transacting as an <b className='text-black text-sm'>Helium</b> Student; <br /><br />
                      register for more than one <b className='text-black text-sm'>Helium</b> Account or register for an <b className='text-black text-sm'>Helium</b> Account on behalf of an
                      individual other than yourself, except in case where the parent is registering the account for its
                      child or guardian for its ward; <br /><br />

                      contact another Member for any purpose other than asking a question related to an Enrolment,
                      Course, Listing, or the Member&apos;s use of the Site, Application and Services; <br /><br />
                      recruit or otherwise solicit any Member to join third-party services or websites that are
                      competitive to <b className='text-black text-sm'>Helium</b>, without <b className='text-black text-sm'>Helium</b>&apos;s prior written approval; <br /><br />
                      recruit or otherwise solicit any Member to join third-party services, applications or websites,
                      without Our prior written approval; <br /><br />
                      impersonate any person or entity, or falsify or otherwise misrepresent yourself or your affiliation
                      with any person or entity; <br /><br />
                      use automated scripts to collect information from or otherwise interact with the Site, Application,
                      Services or Collective Content; <br /><br />
                      use the Site, Application, Services or Collective Content to find a Student and then complete an
                      enrolment of Course independent of the Site, Application or Services, in order to circumvent the
                      obligation to pay any Fees related to <b className='text-black text-sm'>Helium</b>&apos;s provision of the Services or for any other
                      reasons; <br /><br />
                      violate these Terms or <b className='text-black text-sm'>Helium</b>&apos;s then-current Policies and or Standards; <br /><br />
                      engage in disruptive, circumventive, abusive or harassing behavior in any area or aspect of our
                      Platform, Application, or Services; <br /><br />
                      post, upload, publish, submit or transmit any Content that: (i) infringes, misappropriates or
                      violates a third party&apos;s patent, copyright, trademark, trade secret, moral rights or other
                      intellectual property rights, or rights of publicity or privacy; (ii) violates, or encourages any
                      conduct that would violate, any applicable law or regulation or would give rise to civil liability; (iii)
                      is fraudulent, false, misleading (directly or by omission or failure to update information) or
                      deceptive; (iv) is defamatory, obscene, pornographic, vulgar or offensive; (v) promotes
                      discrimination, bigotry, racism, hatred, harassment or harm against any individual or group; (vi)
                      is violent or threatening or promotes violence or actions that are threatening to any other
                      person; or (vii) promotes illegal or harmful activities or substances; <br /><br />
                      systematically retrieve data or other content from our Site, Application or Services to create or
                      compile, directly or indirectly, in single or multiple downloads, a collection, compilation,
                      database, directory or the like, whether by manual methods, through the use of bots, crawlers,
                      or spiders, or otherwise; <br /><br />
                      use, display, mirror or frame the Site, Application, Services or Collective Content, or any
                      individual element within the Site, Application, Services or Collective Content, <b className='text-black text-sm'>Helium</b>&apos;s name,
                      any <b className='text-black text-sm'>Helium</b> trademark, logo or other proprietary information, or the layout and design of any
                      page or form contained on a page in the Site, Application or Services, without <b className='text-black text-sm'>Helium</b>&apos;s express
                      page or form contained on a page in the Site, Application or Services, without &apos;s express
                      written consent; <br /><br />
                      access, tamper with, or use non-public areas of the Site, Application or Services,
                      <b className='text-black text-sm'>Helium</b>&apos;s computer systems, or the technical delivery systems of  <b className='text-black text-sm'>Helium</b>&apos;s providers; <br /><br />
                      attempt to probe, scan, or test the vulnerability of any <b className='text-black text-sm'>Helium</b>&apos;s system or network or breach
                      any security or authentication measures;

                      avoid, bypass, remove, deactivate, impair, descramble, or otherwise circumvent any
                      technological measure implemented by <b className='text-black text-sm'>Helium</b> or any of <b className='text-black text-sm'>Helium</b>&apos;s providers or any other third
                      party (including another user) to protect the Site, Services, Application or Collective Content; <br /><br />
                      forge any TCP/IP packet header or any part of the header information in any email or
                      newsgroup posting, or in any way use the Site, Services, Application or Collective Content to
                      send altered, deceptive or false source-identifying information; <br /><br />
                      attempt to decipher, decompile, disassemble or reverse engineer any of the software used to
                      provide the Site, Services, Application or Collective Content;
                      advocate, encourage, or assist any third party in doing any of the foregoing; or
                      accept or make a payment for Course Fees outside <b className='text-black text-sm'>Helium</b>. If you do so, you acknowledge and
                      agree that you: (i) would be in breach of these Terms; (ii) accept all risks and responsibility for
                      such payment, and (iii) hold <b className='text-black text-sm'>Helium</b> harmless from any liability for such payment.
                      <b className='text-black text-sm'>Helium</b> has the right to investigate and prosecute violations of any of the above to the fullest
                      extent of the law. In addition, and as set in these Terms, <b className='text-black text-sm'>Helium</b> may take a range of actions
                      against you, including but not limited to deactivating or canceling <b className='text-black text-sm'>Helium</b> Account, for a violation
                      of this Section or these Terms. <br /><br />
                      <b className='text-black text-sm'>Helium</b> may access, preserve and disclose any of your information if we are required to do so
                      by law, or if we believe in good faith that it is reasonably necessary to (i) respond to claims
                      asserted against <b className='text-black text-sm'>Helium</b> or to comply with legal process (for example, summons or warrants),
                      (ii) enforce or administer our agreements with users, such as these Terms, (iii) for fraud
                      prevention, risk assessment, investigation, customer support, product development and
                      debugging purposes, or (iv) protect the rights, property or safety of <b className='text-black text-sm'>Helium</b>, its users, or
                      members of the public. <br /><br />
                      You acknowledge that <b className='text-black text-sm'>Helium</b> has no obligation to monitor your access to or use of the Site,
                      Application, Services or Collective Content or to review or edit any Member Content, but has the
                      right to do so for the purpose of operating and improving the Site, Application and Services
                      (including without limitation for fraud prevention, risk assessment, investigation and customer
                      support purposes), to ensure your compliance with these Terms, to comply with applicable law
                      or the order or requirement of a court, administrative agency or other governmental body, to
                      respond to content that it determines is otherwise objectionable or as set forth in these Terms. <br /><br />
                      <b className='text-black text-sm'>Helium</b> reserves the right, at any time and without prior notice, to remove or disable access to
                      any Collective Content that <b className='text-black text-sm'>Helium</b> at its sole discretion, considers to be objectionable for any
                      reason, in violation of these Terms or otherwise harmful to the Site, Application or Services.
                      Child Safety Policy
                      This policy is applicable to all persons and organizations associated with <b className='text-black text-sm'>Helium</b>, referred to as
                      <b className='text-black text-sm'>Helium</b>  &apos;s Stakeholders, including: <br /><br />

                      Employees of <b className='text-black text-sm'>Helium</b>, who maybe full-time or part-time employees, permanent or temporary
                      employee, regular permanent employee or employed on contract <br /><br />
                      Organizations and persons belonging to that organization, who may partner and/ or work with
                      <b className='text-black text-sm'> Helium </b> in any capacity, even for a limited time period or job Volunteers who may work with <b className='text-black text-sm'>Helium</b>, in whichever capacity, even for a limited period of time<br /><br />

                      Children enrolled as students of <b className='text-black text-sm'>Helium</b> and their parents or guardians who associate with the
                      child in the official records of <b className='text-black text-sm'>Helium</b> <br /><br />
                      Children who may not be enrolled but are reached out through marketing or sales of the product
                      and their parents or guardians who associate with the Child <br /><br />
                      Any other person or organizations who may be officially associated with <b className='text-black text-sm'>Helium</b> and its ambit of
                      work and activity <br /><br />
                      In instances and circumstances where <b className='text-black text-sm'>Helium</b> may not have required control over the person
                      alleged of any concern under this policy, including an instance of child abuse, <b className='text-black text-sm'>Helium</b> shall
                      provide the required cooperation, assistance and support to such parent or guardian of the
                      affected child, in approaching any external, legal mechanism including the Police and/or the
                      Courts, though <b className='text-black text-sm'>Helium</b> is itself not personally liable in such instances. <br /><br />

                      <b className='text-black text-sm'>Helium</b> expects all its stakeholders falling within the scope of this policy [Part A (II)] to adhere to
                      the following child safety code of conduct : <br /><br />

                      Expected Behaviour and Actions <br /><br />
                      Listen to the child and, their views and opinions <br /><br />
                      Have a non-judgmental attitude<br /><br />
                      Treat every child with empathy and respect regardless of his/her race, color, gender, sexuality,
                      religion, language, heritage, religious belief, social origin, or any point that discriminated a child
                      Use appropriate language, behaviors while interacting with the child <br /><br />
                      Use appropriate language, behaviors in any online medium used by the organization to
                      communicate or engage with children <br /><br />
                      Create an environment that enables children to share and express freely<br /><br />
                      Always take permission and written consent from guardian before taking photos or videos of a
                      child<br /><br />
                      Keep all personal information of children, their parents and guardians confidential and secure,
                      such information shall only be shared with authorized individuals <br /><br />
                      The live online classes and the content, including but not limited to audio visual content is age
                      appropriate and culturally appropriate<br /><br />
                      Prohibited Behaviors and Actions <br /><br />

                      Do not develop, induce or support any emotional, online/offline physical abuse or sexual
                      relationship with children in any way<br /><br />
                      Do not use or encourage the use of alcohol, drugs, cigarettes or other intoxicating substance in
                      any of your interaction with children<br /><br />
                      Do not develop any form of relationship or arrangement with children including but not limited to
                      financial, which could be deemed to be exploitative or abusive<br /><br />
                      Do not share with or show children online/offline any inappropriate content including
                      pornographic material or material that encourages crime, violence, racism, sexism, self-harm,
                      suicide, cruelty<br /><br />
                      Do not use language or behavior towards children that is inappropriate, harassing, abusive,
                      sexually provocative, demeaning, intimidating, discriminatory, or culturally insensitive
                      Reporting Misconduct<br /><br />
                      If anyone who you feel is acting or has acted inappropriately, including but not limited to anyone
                      who (i) engages in offensive, violent or sexually inappropriate behavior, or (ii) engages in any
                      other disturbing conduct, you should immediately report such person to the appropriate
                      authorities and then to <b className='text-black text-sm'>Helium</b> by contacting us with your police station and report number;
                      provided that your report will not obligate us to take any action beyond that required by law (if
                      any) or cause us to incur any liability to you.<br /><br />
                      Privacy<br />
                      In order to provide the services to you we collect some of your Personal Information. We
                      describe our collection and use of personal information in our Privacy Policy . Please review
                      this policy. You must agree to the processing of your personal information as laid out in
                      <b className='text-black text-sm'> Helium</b>  &apos;s Privacy Policy (as may be updated from time to time). You agree that <b className='text-black text-sm'>Helium</b> may
                      disclose personal information provided to us, including the data entered into the Website, if
                      required to by law or government request such as a warrant, or as specified in the Privacy
                      Policy . You must be 18 years or older to use this service. You are responsible for preventing
                      unauthorized access to your account. <br /><br />
                      Intellectual Property Ownership and Rights Notices<br />
                      The Site, Application, Services, and Collective Content are protected by copyright, trademark,
                      and other laws of India. You acknowledge and agree that the Site, Application, Services and
                      Collective Content, including all associated intellectual property rights, are the exclusive
                      property of <b className='text-black text-sm'>Helium</b> and its licensors. You will not remove, alter or obscure any copyright,
                      trademark, service mark or other proprietary rights notices incorporated in or accompanying the
                      Site, Application, Services, or Collective Content. All trademarks, service marks, logos, trade
                      names, and any other proprietary designations of <b className='text-black text-sm'>Helium</b> used on or in connection with the Site,
                      Application, Services, and <b className='text-black text-sm'>Helium</b> Content are trademarks or registered trademarks of <b className='text-black text-sm'>Helium</b>
                      in India and abroad. Trademarks, service marks, logos, trade names and any other proprietary
                      designations of third parties used on or in connection with the Site, Application, Services, and
                      <b className='text-black text-sm'> Helium</b> Content are used for identification purposes only and may be the property of their
                      respective owners. As a Member, you understand and agree that you are bound by the
                      additional Terms, Guidelines and Policies that apply to your use of the Site, Application,
                      Services and Collective Content, including <b className='text-black text-sm'>Helium</b>  &apos;s Trademark & Branding Guidelines (as may
                      be updated from time to time).<br /><br />

                      Additional Terms<br />
                      Our Site, Application and Services have different products, features and offerings, so
                      sometimes additional terms or product requirements may apply to your use of those products,
                      features or offerings. If additional terms are available for the relevant product or Services you
                      use, those additional terms become part of these Terms.<br /><br />

                      Application License<br />

                      Subject to your compliance with these Terms, <b className='text-black text-sm'>Helium</b> grants you a limited non-exclusive, non-
                      transferable license to download and install a copy of the Application on each mobile device or

                      computer that you own or control and run such copy of the Application solely for your own
                      personal use.<br /><br />
                      <b className='text-black text-sm'>Helium</b> Content and Member Content License<br /><br />

                      Subject to your compliance with these Terms,<b className='text-black text-sm'>Helium</b> grants you a limited, non-exclusive, non-
                      transferable license, to (a) access and view any <b className='text-black text-sm'>Helium</b> Content solely for your personal and

                      non-commercial purposes and (b) access and view any Member Content to which you are
                      permitted access, solely for your personal and non-commercial purposes. You have no right to
                      sublicense the license rights granted in this section.<br /><br />
                      You will not use, copy, adapt, modify, prepare derivative works based upon, distribute, license,
                      sell, transfer, publicly display, publicly perform, transmit, broadcast or otherwise exploit the Site,
                      Application, Services, or Collective Content, except as expressly permitted in these Terms. No
                      licenses or rights are granted to you by implication or otherwise under any intellectual property
                      rights owned or controlled by <b className='text-black text-sm'>Helium</b> or its licensors, except for the licenses and rights
                      expressly granted in these Terms.<br /><br />
                      Member Content<br /><br />
                      We may, in our sole discretion, permit you to post, upload, publish, submit or transmit Member
                      Content. By making available any Member Content on or through the Site, Application,
                      Services, or through <b className='text-black text-sm'>Helium</b> promotional campaigns, you hereby grant to <b className='text-black text-sm'>Helium</b> a worldwide,
                      irrevocable, perpetual (or for the term of the protection), non-exclusive, transferable, royalty-free
                      license, with the right to sublicense, to use, view, copy, adapt, modify, distribute, license, sell,
                      transfer, publicly display, publicly perform, transmit, stream, broadcast, access, view, and
                      otherwise exploit such Member Content on, through, by means of or to promote or market the
                      Site, Application and Services. <b className='text-black text-sm'>Helium</b> does not claim any ownership rights in any such
                      Member Content and nothing in these Terms will be deemed to restrict any rights that you may
                      have to use and exploit any such Member Content.<br /><br />
                      You acknowledge and agree that you are solely responsible for all Member Content that you
                      make available through the Site, Applications, Services or through <b className='text-black text-sm'>Helium</b> promotional
                      campaigns. Accordingly, you represent and warrant that: (i) you either are the sole and
                      exclusive owner of all Member Content that you make available through the Site, Application,
                      Services or through <b className='text-black text-sm'>Helium</b> promotional campaigns or you have all rights, licenses, consents
                      and releases that are necessary to grant to <b className='text-black text-sm'>Helium</b> the rights in such Member Content, as
                      contemplated under these Terms; and (ii) neither the Member Content nor your posting,
                      uploading, publication, submission or transmittal of the Member Content or <b className='text-black text-sm'>Helium</b>  &apos;s use of the
                      Member Content (or any portion thereof) on, through or by means of the Site, Application, the
                      Services or <b className='text-black text-sm'>Helium</b> promotional campaigns will infringe, misappropriate or violate a third party  &apos;s
                      patent, copyright, trademark, trade secret, moral rights or other proprietary or intellectual
                      property rights, or rights of publicity or privacy, or result in the violation of any applicable law or
                      regulation. <br /><br />

                      Hyperlinks <br />
                      The Site, Application and Services may contain links to third-party websites or resources. You
                      acknowledge and agree that <b className='text-black text-sm'>Helium</b> is not responsible or liable for: (i) the availability or
                      accuracy of such websites or resources; or (ii) the content, products, or services on or available
                      from such websites or resources. Links to such websites or resources do not imply any
                      endorsement by <b className='text-black text-sm'>Helium</b> of such websites or resources or the content, products, or services
                      available from such websites or resources. You acknowledge sole responsibility for and assume
                      all risk arising from your use of any such websites or resources or the Content, products or
                      services on or available from such websites or resources. <br /><br />
                      Feedback <br />
                      We welcome and encourage you to provide feedback, comments and suggestions for
                      improvements to the Site, Application and Services (  &apos;Feedback   &apos;). You may submit Feedback
                      by emailing us, through the   &apos; Contact  &apos;  section of the Site and Application, or by other means of
                      communication. You acknowledge and agree that all Feedback you give us will be the sole and
                      exclusive property of <b className='text-black text-sm'>Helium</b> and you hereby irrevocably assign to <b className='text-black text-sm'>Helium</b> and agree to
                      irrevocably assign to <b className='text-black text-sm'>Helium</b> all of your right, title, and interest in and to all Feedback, including
                      without limitation all worldwide patent, copyright, trade secret, moral and other proprietary or
                      intellectual property rights therein, and waive any moral rights you may have in such Feedback.
                      At <b className='text-black text-sm'>Helium</b>  &apos;   s request and expense, you will execute documents and take such further acts as
                      <b className='text-black text-sm'>Helium</b> may reasonably request to assist Helium to acquire, perfect, and maintain its
                      intellectual property rights and other legal protections for the Feedback. <br /><br />
                      Copyright Policy <br />
                      <b className='text-black text-sm'>Helium</b> respects copyright law and expects its users to do the same. It is <b className='text-black text-sm'>Helium</b>  &apos;   s policy to
                      terminate in appropriate circumstances the <b className='text-black text-sm'>Helium</b> Accounts of Members or other account
                      holders who repeatedly infringe or are believed to be repeatedly infringing the rights of copyright
                      holders. <br /><br />
                      Term and Termination, Suspension and Other Measures <br /><br />
                      Term <br />
                      This Agreement shall be effective for till the time Members access or use the Site, Application or
                      Services or by downloading or posting any content from or on the Site, via the Application or
                      through the Services Until such time when you or <b className='text-black text-sm'>Helium</b> terminate the Agreement as
                      described below. <br /><br />
                      Termination for convenience <br />
                      You may terminate this Agreement at any time via the   &apos;   Cancel Account  &apos;    feature on the Site or
                      by sending us an email. If you cancel your <b className='text-black text-sm'>Helium</b> Account, any confirmed enrolment will be
                      automatically canceled and any refund will depend upon the terms of the applicable cancellation
                      policy. Without limiting our rights specified below, <b className='text-black text-sm'>Helium</b> may terminate this Agreement for
                      convenience at any time by giving you 30 days  &apos;    notice via email to your registered email
                      address. <br /><br />
                      Termination for breach, suspension and other measures <br /><br />

                      <b className='text-black text-sm'>Helium</b> may immediately, without notice terminate this Agreement if (i) you have materially
                      breached these Terms or our Policies, including but not limited to any breach of your warranties
                      outlined in these Terms or breach of the   &apos;    User Conduct   &apos;    provisions in these Terms, (ii) you
                      have provided inaccurate, fraudulent, outdated or incomplete information during the <b className='text-black text-sm'>Helium</b>
                      Account registration, or Listing process or thereafter, (iii) you have violated applicable laws,
                      regulations or third party rights, or (iv)<b className='text-black text-sm'>Helium</b> believes in good faith that such action is
                      reasonably necessary to protect the safety or property of other Members, <b className='text-black text-sm'>Helium</b> or third
                      parties, for fraud prevention, risk assessment, security or investigation purposes.
                      In addition <b className='text-black text-sm'>Helium</b> may deactivate or delay reviews, or other Member Content, cancel any
                      pending or confirmed enrolments, limit your use of or access to your <b className='text-black text-sm'>Helium</b> Account and the
                      Site, Application or Services, temporarily or permanently revoke any special status associated
                      with your <b className='text-black text-sm'>Helium</b> Account, or temporarily or permanently suspend your <b className='text-black text-sm'>Helium</b> Account if (i)
                      you have breached these Terms or our Policies, including material and nonmaterial breaches
                      and receiving poor ratings from Students, or (ii) <b className='text-black text-sm'>Helium</b> believes in good faith that such action is
                      reasonably necessary to protect the safety or property of Members, <b className='text-black text-sm'>Helium</b> or third parties, for
                      fraud prevention, risk assessment, security or investigation purposes. <br /><br />
                      In case of non-material breaches and where appropriate, you will be given notice of any
                      measure by <b className='text-black text-sm'>Helium</b> and an opportunity to resolve the issue to <b className='text-black text-sm'>Helium</b>  &apos;s reasonable satisfaction. <br /><br />
                      Consequences of Termination <br /><br />
                      If we take any of the measures described above we may (i) communicate to the Students that a
                      pending or confirmed enrolment has been canceled, (ii) refund the Students in full for any and
                      all confirmed enrolments, irrespective of pre-existing cancellation policies, (iii) support the
                      Students, on an exceptional basis, in finding potential alternative Courses, and (iv) you will not
                      be entitled to any compensation for confirmed enrolments that were canceled. <br /><br />
                      If You or We terminate this Agreement, we do not have an obligation to delete or return to you
                      any of your Member Content, including but not limited to any reviews or Feedback. When this
                      Agreement has been terminated, you are not entitled to a restoration of your <b className='text-black text-sm'>Helium</b> Account or
                      any of your Member Content. If your access to or use of the Site, Application and Services has
                      been limited or your <b className='text-black text-sm'>Helium</b> Account has been suspended or this Agreement has been
                      terminated by us, you may not register a new <b className='text-black text-sm'>Helium</b> Account or attempt to access and use the
                      Site, Application and Services through other <b className='text-black text-sm'>Helium</b> Accounts. <br /><br />
                      Survival <br />
                      If you or we terminate this Agreement, the clauses of these Terms that reasonably should
                      survive termination of the Agreement will remain in effect. <br /><br />
                      Disclaimers <br /><br />
                      If you choose to use the Site, Application, Services or Collective Content, you do so at your sole
                      risk. You acknowledge and agree that <b className='text-black text-sm'>Helium</b> does not have an obligation to conduct
                      background or character checks on any Member, but may conduct such background or
                      character checks in its sole discretion. If we choose to conduct such checks, to the extent
                      permitted by applicable law, we disclaim warranties of any kind, either express or implied, that
                      such checks will identify prior misconduct by a user or guarantee that a user will not engage in
                      misconduct in the future. <br /><br />
                      The Site, Application, Services and Collective Content are provided &quot; as is&quot; , without warranty of
                      any kind, either express or implied. Without limiting the foregoing, <b className='text-black text-sm'>Helium</b> explicitly disclaims
                      any warranties of merchantability, fitness for a particular purpose, quiet enjoyment or non-
                      infringement, and any warranties arising out of course of dealing or usage of trade. <b className='text-black text-sm'>Helium</b>
                      makes no guarantee that the site, application, services, collective content, including, but not
                      limited to, any Courses, will meet your requirements or be available on an uninterrupted, secure,
                      or error-free basis. <b className='text-black text-sm'>Helium</b> makes no warranty regarding the quality of any Listings, Courses,
                      teachers, Students, the Services or Collective Content or the accuracy, timeliness, truthfulness,
                      completeness or reliability of any collective content obtained through the Site, Application or
                      Services. <br /><br />
                      No advice or information, whether oral or written, obtained from <b className='text-black text-sm'>Helium</b> or through the Site,
                      Application, Services or Collective Content, will create any warranty not expressly made herein. <br /><br />
                      You are solely responsible for all of your communications and interactions with other users of
                      the Site, Application or Services and with other persons with whom you communicate or interact
                      as a result of your use of the Site, Application or Services, including, but not limited to, any
                      Students. You understand that <b className='text-black text-sm'>Helium</b> does not make any attempt to verify the statements of
                      users of the Site, Application or Services or to review any Course. <b className='text-black text-sm'>Helium</b> makes no
                      representations or warranties as to the conduct of users of the Site, Application or Services or
                      their compatibility with any current or future users of the Site, Application or Services. You agree
                      to take reasonable precautions in all communications and interactions with other users of the
                      site, application or services and with other persons with whom you communicate or interact as a
                      result of your use of the Site, Application Or Services, including, but not limited to, Students,
                      particularly if you decide to meet offline or in person regardless of whether such meetings are
                      organized by <b className='text-black text-sm'>Helium</b>. <b className='text-black text-sm'>Helium</b> explicitly disclaims all liability for any act or omission of any
                      Student or other third party. <br /><br />
                      Limitation of Liability <br /><br />
                      You acknowledge and agree that, to the maximum extent permitted by law, the entire risk
                      arising out of your access to and use of the Site, Application, Services and Collective Content,
                      your enrolment of any Course via the Site, Application and Services, and any contact you have
                      with other users of <b className='text-black text-sm'>Helium</b> whether in person or online remains with you. Neither <b className='text-black text-sm'>Helium</b> nor
                      any other party involved in creating, producing, or delivering the Site, Application, Services,
                      Collective Content will be liable for any incidental, special, exemplary or consequential
                      damages, including lost profits, loss of data or loss of goodwill, service interruption, computer
                      damage or system failure or the cost of substitute products or services, or for any damages for
                      personal or bodily injury or emotional distress arising out of or in connection with these terms,
                      from the use of or inability to use the Site, Application, Services or Collective Content, from any
                      communications, interactions or meetings with other users of the Site, Application, or Services
                      or other persons with whom you communicate or interact as a result of your use of the Site,
                      Application, Services, or from your Enrolment of any Course via the Site, Application And
                      Services, whether based on warranty, contract, tort (including negligence), product liability or
                      any other legal theory, and whether or not <b className='text-black text-sm'>Helium</b> has been informed of the possibility of such
                      damage, even if a limited remedy set forth herein is found to have failed of its essential purpose.

                      In no event will <b className='text-black text-sm'>Helium</b>  &apos;s aggregate liability arising out of or in connection with these Terms and
                      your use of the Site, Application and Services including, but not limited to, your enrolment of any
                      course via the Site, Application and Services, or from the use of or inability to use the Site,
                      Application, Services, or Collective Content and in connection with any course or interactions
                      with any other members, exceed the amounts you have paid or owe for enrolments via the Site,
                      Application and Services as a student in the three (3) month period prior to the event giving rise
                      to the liability. The limitations of damages set forth above are fundamental elements of the basis
                      of the bargain between <b className='text-black text-sm'>Helium</b> and you. <br /><br />
                      Indemnification <br />
                      You agree to release, defend, indemnify, and hold <b className='text-black text-sm'>Helium</b> and its affiliates and subsidiaries,
                      and their officers, directors, employees and agents, harmless from and against any claims,
                      liabilities, damages, losses, and expenses, including, without limitation, reasonable legal and
                      accounting fees, arising out of or in any way connected with (a) your access to or use of the
                      Site, Application, Services, or Collective Content or your violation of these Terms; (b) your
                      Member Content; (c) your (i) interaction with any Member, (ii) enrolment of an Course; including
                      but not limited to any injuries, losses, or damages (compensatory, direct, incidental,
                      consequential or otherwise) of any kind arising in connection with or as a result of an enrolment
                      or attending of a Course. <br /><br />
                      Entire Agreement <br />
                      Except as they may be supplemented by additional <b className='text-black text-sm'>Helium</b> policies, guidelines, standards, or
                      terms for a specific product, feature, service or offering, these Terms constitute the entire and
                      exclusive understanding and agreement between <b className='text-black text-sm'>Helium</b> and you regarding the Site,
                      Application, Services, Collective Content (excluding Payment Services), and any enrolments
                      made via the Site, Application and Services (excluding Payment Services), and these Terms
                      supersede and replace any and all prior oral or written understandings or agreements between
                      <b className='text-black text-sm'>Helium</b> and you regarding enrolments, the Site, Application, Services, and Collective Content
                      (excluding Payment Services). <br /><br />
                      Notices <br />
                      Any notices or other communications permitted or required hereunder, including those regarding
                      modifications to these Terms, will be in writing and given by <b className='text-black text-sm'>Helium</b> (i) via email (in each case
                      to the address that you provide) or (ii) by posting to the Site or via the Application. For notices
                      made by e-mail, the date of receipt will be deemed the date on which such notice is transmitted. <br /><br />
                      Governing Law and Jurisdiction <br /><br />
                      These Terms and your use of the Services will be interpreted in accordance with the laws of
                      India excluding its rules on conflicts of laws. You and we agree to submit any dispute arising
                      under these Terms to the personal jurisdiction of a court located in Bangalore for any actions for
                      which the parties retain the right to seek injunctive or other equitable relief in a court of
                      competent jurisdiction to prevent the actual or threatened infringement, misappropriation or
                      violation of a party  &apos; s copyrights, trademarks, trade secrets, patents, or other intellectual property
                      rights. <br /><br />
                      Any dispute, claim or controversy arising out of or relating to this Terms including the
                      determination of the scope or applicability of this Terms to arbitrate, or your use of the
                      Application or information to which it gives access, shall be determined by arbitration in India,

                      conducted in accordance with the Arbitration and Conciliation Act, 1996. The seat of such
                      arbitration shall be Gorakhpur. All proceedings of such arbitration, including, without limitation,
                      any awards, shall be in the Hindi/English language. The award shall be final and binding on the
                      parties to the dispute.
                      If you are a resident of the European Economic Area (EEA) you have the right to complain to a
                      Data Protection Authority about our collection and use of your personal information. For more
                      information, please contact your local data protection authority in the EEA.
                      No Waiver
                      The failure of <b className='text-black text-sm'>Helium</b> to enforce any right or provision of these Terms will not constitute a
                      waiver of future enforcement of that right or provision. The waiver of any such right or provision
                      will be effective only if in writing and signed by a duly authorized representative of <b className='text-black text-sm'>Helium</b>.
                      Except as expressly set forth in these Terms, the exercise by either party of any of its remedies
                      under these Terms will be without prejudice to its other remedies under these Terms or
                      otherwise. If for any reason a court of competent jurisdiction finds any provision of these Terms
                      invalid or unenforceable, that provision will be enforced to the maximum extent permissible and
                      the other provisions of these Terms will remain in full force and effect. <br /><br />
                      Miscellaneous <br /><br />
                      <b className='text-black text-sm'>Helium</b> shall have no liability of any nature, whether in contract, or otherwise, for any losses
                      whatsoever and howsoever caused, from or in any manner connected with any of the Services
                      provided by Us. <br /><br />
                      <b className='text-black text-sm'>Helium</b> is not liable for any failure or delay of performance (or otherwise) arising out of a cause
                      beyond <b className='text-black text-sm'>Helium</b>  &apos; s reasonable control. <br /><br />
                      You may not assign or transfer these Terms, by operation of law or otherwise, without <b className='text-black text-sm'>Helium</b>  &apos;s
                      prior written consent. Any attempt by you to assign or transfer these Terms, without such
                      consent, will be null and of no effect. <b className='text-black text-sm'>Helium</b> may assign or transfer these Terms, at its sole
                      discretion, without restriction. Subject to the foregoing, these Terms will bind and inure to the
                      benefit of the parties, their successors and permitted assigns.<br /><br />
                      <b className='text-black text-sm'>Helium</b> reserves the right at any time and from time to time to modify or discontinue, temporarily
                      or permanently, the Services (or any part thereof) provided by Us with or without notice. You
                      agree that <b className='text-black text-sm'>Helium</b> shall not be liable to You or to any third party for any modification,
                      suspension or discontinuance of such Services. It is Your responsibility to review these Terms
                      periodically for updates/changes. <br /><br />
                      You agree not to reproduce, duplicate, copy, sell, resell or exploit for any commercial purposes,
                      any portion of the information provided by us, including any intellectual property rights of <b className='text-black text-sm'>Helium </b>
                      or any person firm or corporation having posted information for availability through the Services
                      provided by us.<br /><br />
                      You agree that in the event Your post or Your information violates any provision of these Terms,
                      We shall have the right to refuse to provide You or any person acting on Your behalf, access to
                      the Site and Application, terminate and/ or suspend Your access if applicable in the future.<br /><br />

                      <b className='text-black'>YOU HAVE READ THESE TERMS OF USE AND AGREE TO ALL OF THE PROVISIONS
                        CONTAINED ABOVE.</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyMain;