import React from 'react';
import Link from 'next/link';
import ErrorThumb from '../../../public/assets/img/bg/error-thumb.png';
import Image from 'next/image';


const ErrorPageMain = () => {
    return (
        <main>
            <div className="content-error-area pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <div className="content-error-item text-center">
                                <div className="error-thumb">
                                    <Image src={ErrorThumb} style={{width:'auto', height:'auto'}} alt="img not found"/>
                                </div>
                                <div className="section-title">
                                    <h2 className="mb-20">Oops! That page can not be found.</h2>
                                    <p>We {`couldn't`} find any results for your search. Use more generic words or double check your
                                    spelling.</p>
                                </div>
                                <div className="error-btn">
                                    <Link href="/" className="edu-btn">Back to homepage</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ErrorPageMain;