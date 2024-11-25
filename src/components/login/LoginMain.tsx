"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import SignUpImg from '../../../public/assets/img/sing-up/sign-up.png';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import Link from 'next/link';
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch } from 'react-redux';
import { save_access_token, set_seconds, set_timer_active, user_credentils } from '@/redux/slices/userSlice';
import { Box, Button, TextField } from '@mui/material';
import { userInfo } from './interface'
import { useSelector } from 'react-redux';
import OTPInput from 'react-otp-input';
import { ConfirmationResult, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from "../../app/firebase/firebase.config"
import signup from '../../../public/assets/img/sing-up/signup-login.png';

const LoginMain = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
    const userdata = useSelector(
        (state: any) => state.user
    );
    const [timer, setTimer] = useState(30)

    const [userInfo, setUserInfo] = useState<userInfo>({
        next: 0,
        phone_number: '',
        otp: '',
        base64: ''
    })

    const verifyOTP = () => {
        if (confirmationResult && userInfo.otp) {
            console.log(userInfo.otp, confirmationResult, "---------------------------------------------------otp")
            confirmationResult.confirm(userInfo.otp)
                .then((result: any) => {
                    // User has been successfully authenticated
                    dispatch(save_access_token(result.user.accessToken))
                    toast.success("OTP verify successfully!");
                    console.log("Authentication successful", result.user);
                    router.push('/');
                })
                .catch((error) => {
                    toast.error("Wrong OTP");
                    console.log("Authentication failed", error);
                    // Handle authentication failure, e.g., show an error message to the user
                });
        } else {
            // Handle the case where confirmationResult is not available or OTP is not entered
            toast.success("Confirmation result or OTP is missing");
        }
    };

    const formatTime = (time: number): string => {
        const minutes = Math.floor(time / 60);
        const remainingSeconds = time % 60;

        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(remainingSeconds).padStart(2, '0');

        return `${formattedMinutes}:${formattedSeconds}`;
    };

    const timerActivate = () => {
        let intervalForTimer: NodeJS.Timeout;

        intervalForTimer = setInterval(() => {
            if (timer > 0) {
                console.log("Come One-----")
                setTimer((timer) => timer - 1)
            } else {
                setTimer(30)
            }
        }, 1000);

        // Automatically clear the interval after 30 seconds
        setTimeout(() => {
            clearInterval(intervalForTimer)
            setTimer(30)
        }, 30000);

        // Cleanup function to clear interval when component unmounts or conditions are met
        return () => clearInterval(intervalForTimer);
    };

    const resendCode = () => {
        onCaptchVerify()

        const appVerifier = (window as any).recaptchaVerifier;

        const formatPh = `+91 ${userInfo.phone_number}`;

        signInWithPhoneNumber(auth, formatPh, appVerifier)
            .then((confirmationResult) => {
                (window as any).confirmationResult = confirmationResult;
                setConfirmationResult(confirmationResult);
                console.log(confirmationResult, '-------------------------------------------confirmationResult')
                toast.success("OTP sended successfully!");
                timerActivate();
            })
            .catch((error: any) => {
                toast(
                    "Too many request otp. \n\n Please wait 2 hours to register.",
                    {
                        duration: 6000,
                    }
                );
                console.log(error, "----------------------------error mahendra----------");
            });

    }

    function onCaptchVerify() {
        if (!(window as any).recaptchaVerifier) {
            (window as any).recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
                'size': 'invisible',
                'callback': (response: any) => {
                    // reCAPTCHA solved, allow signInWithPhoneNumber.
                    onSignup()
                },
                'expired-callback': () => {
                    // Response expired. Ask user to solve reCAPTCHA again.
                    // ...
                }
            }), auth;
        }
    }

    function onSignup() {
        onCaptchVerify()

        const appVerifier = (window as any).recaptchaVerifier;

        const formatPh = `+91 ${userInfo.phone_number}`;

        console.log(formatPh, '----------------------phone number formate')

        signInWithPhoneNumber(auth, formatPh, appVerifier)
            .then((confirmationResult) => {
                (window as any).confirmationResult = confirmationResult;
                setConfirmationResult(confirmationResult);
                timerActivate();
                setUserInfo({ ...userInfo, next: userInfo.next + 1 });
                console.log(confirmationResult, '-------------------------------------------confirmationResult')
                toast.success("OTP sended successfully!");
            })
            .catch((error: any) => {
                toast(
                    "Too many request otp. \n\n Please wait 2 hours to login.",
                    {
                        duration: 6000,
                    }
                );
                console.log(error, "----------------------------error mahendra----------");
            });
    }

    const onsubmit = (e: any) => {
        e.preventDefault()

        if (userInfo.next === 0) {
            axios
                .post('http://13.232.73.53:8000/users/exist', { "phoneNumber": userInfo.phone_number })
                .then((response: any) => {
                    if (response.data.message == "Phone number already registered") {
                        onSignup()
                    } else {
                        return toast.error("Phone number is not registered with us.")
                    }
                })
                .catch((e: any) => {
                    console.log(e, 'some error ocuure when checking exist')
                })
        } else {
            verifyOTP()
        }

    }

    return (
        <>
            <div id="recaptcha-container"></div>
            <Breadcrumb title='Sign in' subTitle='Sign in' />
            <Toaster toastOptions={{ duration: 4000 }} />
            <div className="signin-page-area pt-120 pb-60">
                <section className="flex flex-wrap justify-center items-center max-md:flex-col mx-3">
                    <div className={`w-[50%] max-md:w-[100%] max-md:h-[300px] h-[300px]`}>
                        <h1 className='text-center'>Sign in</h1>
                        <Image className="h-full object-contain object-center rounded" src={signup} alt="img not found" />
                    </div>
                    <div className={`w-[40%] max-md:w-[100%] h-[500px]`}>
                        <div className="signup-form-wrapper">
                            <div className="flex flex-col w-full justify-center items-center mb-12">
                                <span className='Signup-header-text text-black p-3'>Welcome Back!</span>
                                <span className='Signup-header-base-text text-black p-3'>Enter your Phone Number to sign in to your account</span>
                            </div>

                            {
                                userInfo.next == 0 ?
                                    <Box
                                        component="form"
                                        noValidate
                                        autoComplete="off"
                                        className='space-x-5'
                                    >
                                        <TextField disabled className='max-sm:w-[25%] sm:w-[15%] md:w-[15%] lg:w-[15%]' id="filled-hidden-label-small" defaultValue="+91" variant="filled" size="small" />
                                        <TextField name='phone_number' onChange={(e) => { setUserInfo({ ...userInfo, [e.target.name]: e.target.value }); }} className='max-sm:w-[65%] sm:w-[78%] md:w-[79%]' id="standard-basic" label="Phone Number" variant="standard" />
                                    </Box>
                                    :

                                    <>
                                        <div className='otp-container'>
                                            <p>Varification Code</p>
                                            {(timer < 30) ? (
                                                <p>Resend code in <span className='display-timer'>{formatTime(timer)}</span></p>
                                            ) : (
                                                <p className='resend-btn' onClick={() => resendCode()}>Resend</p>
                                            )}
                                        </div>
                                        <OTPInput
                                            value={userInfo.otp}
                                            onChange={(e) => { setUserInfo({ ...userdata, otp: e }) }}
                                            numInputs={6}
                                            renderInput={(props) => <input {...props} style={{ width: '100%', height: '50px', margin: '2px', border: 'none', borderBottom: "1px solid black" }} />}
                                        />
                                    </>
                            }


                            <Button variant="contained" size="large" style={{ width: '100%', borderRadius: 20, marginTop: 20, backgroundColor: '#621562' }} onClick={(e) => onsubmit(e)}>
                                Next
                            </Button>

                            {/* <div className="signup-wrapper">
                                                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email or Username"/>
                                            </div>
                                            <div className="signup-wrapper">
                                                <input type="text" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                                            </div> */}
                            {/* <div className="signup-action">
                                                <div className="course-sidebar-list">
                                                    <input className="signup-checkbo" type="checkbox" id="sing-in"/>
                                                    <label className="sign-check" htmlFor="sing-in"><span>Remember me</span></label>
                                                </div>
                                            </div> */}
                            {/* <div className="sing-buttom mb-20">
                                                <button type="submit" className="sing-btn" onClick={(e)=> onsubmit(e)}>Signin now</button>
                                            </div> */}



                            <div className="flex flex-row justify-around my-5">
                                <div className="not-register">
                                    <span>Not registered?</span><span><Link href="/registration">Signup</Link></span>
                                </div>
                                <div className="forget-password">
                                    <Link href="/forgot-password">Forgot password?</Link>
                                </div>
                            </div>
                            {/* <div className="sign-social text-center">
                                                <span>Or Sign- in with</span>
                                            </div>
                                            <div className="sign-social-icon">
                                                <div className="sign-facebook">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="9.034"
                                                        height="18.531" viewBox="0 0 9.034 18.531">
                                                        <path id="Path_212" data-name="Path 212"
                                                            d="M183.106,757.2v-1.622c0-.811.116-1.274,1.39-1.274h1.621v-3.127h-2.664c-3.243,0-4.285,1.506-4.285,4.169v1.969h-2.085v3.127h1.969v9.265h4.054v-9.265h2.664l.347-3.243Z"
                                                            transform="translate(-177.083 -751.176)" fill="#2467ec" />
                                                    </svg>
                                                    <Link href="#">Facebook</Link>
                                                </div>
                                                <div className="sign-gmail">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="21.692"
                                                        height="16.273" viewBox="0 0 21.692 16.273">
                                                        <g id="gmail" transform="translate(0 -63.953)">
                                                            <path id="Path_8685" data-name="Path 8685"
                                                                d="M1.479,169.418H4.93v-8.381l-2.26-3.946L0,157.339v10.6a1.479,1.479,0,0,0,1.479,1.479Z"
                                                                transform="translate(0 -89.192)" fill="#0085f7" />
                                                            <path id="Path_8686" data-name="Path 8686"
                                                                d="M395.636,169.418h3.451a1.479,1.479,0,0,0,1.479-1.479v-10.6l-2.666-.248-2.264,3.946v8.381Z"
                                                                transform="translate(-378.874 -89.192)"
                                                                fill="#00a94b" />
                                                            <path id="Path_8687" data-name="Path 8687"
                                                                d="M349.816,65.436,347.789,69.3l2.027,2.541,4.93-3.7V66.176A2.219,2.219,0,0,0,351.2,64.4Z"
                                                                transform="translate(-333.054)" fill="#ffbc00" />
                                                            <path id="Path_8688" data-name="Path 8688"
                                                                d="M72.7,105.365l-1.932-4.08L72.7,98.956l5.916,4.437,5.916-4.437v6.409L78.619,109.8Z"
                                                                transform="translate(-67.773 -33.52)" fill="#ff4131"
                                                                fillRule="evenodd" />
                                                            <path id="Path_8689" data-name="Path 8689"
                                                                d="M0,66.176v1.972l4.93,3.7V65.436L3.55,64.4A2.219,2.219,0,0,0,0,66.176Z"
                                                                transform="translate(0)" fill="#e51c19" />
                                                        </g>
                                                    </svg>
                                                    <Link href="#">Google</Link>
                                                </div>
                                            </div> */}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default LoginMain;