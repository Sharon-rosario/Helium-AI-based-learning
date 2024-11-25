"use client";
import { useEffect, useState } from 'react';
import * as React from 'react';
import SignUpMassageImg from '../../../public/assets/img/sing-up/sign-up-message.png';
import UserPngImage from '../../../public/assets/img/users/user.png';
import SignUpImg from '../../../public/assets/img/sing-up/sign-up.png';
import signup from '../../../public/assets/img/sing-up/signup-login.png';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import { useDispatch } from 'react-redux';
import { user_credentils, save_access_token, set_seconds, set_timer_active } from "@/redux/slices/userSlice";
import { auth } from "../../app/firebase/firebase.config"
import { RecaptchaVerifier, signInWithPhoneNumber, ConfirmationResult } from 'firebase/auth'
import { toast, Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import SignupTerm from '../terms-conditions/TermsConditionMain'
import axios from "axios";
import { useRouter } from "next/navigation";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import OtpInput from 'react-otp-input';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { MenuProps } from './constant'
import { useTheme } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import { FormControl } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import CameraAltIcon from '@mui/icons-material/PhotoCameraRounded';
import { CountryData, userInfo } from './interface'
import dayjs from 'dayjs';
import { SiMaildotru } from 'react-icons/si';
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { PiGenderIntersexBold } from "react-icons/pi";

const RegistrationSection = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const regex = /^[0-9]{6}$/;
    const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
    const [selectedState, setSelectedState] = React.useState<string>('');
    const [cityName, setCityName] = useState<any>([])
    const [selectedCity, setSelectedCity] = useState<string>('')
    const [isStateSelected, setIsStateSelected] = useState<boolean>(true)
    const [countryData, setCountryData] = useState<CountryData[]>([])
    const accessToken = useSelector(
        (state: any) => state.user.accessToken
    );
    const [timer, setTimer] = useState(30)

    console.log(accessToken)

    const [userDetail, setUserDetail] = useState<userInfo>({
        next: 0,
        phone_number: '',
        email: '',
        user_name: '',
        password: '',
        otp: '',
        checkBox: false,
        dob: '',
        gender: '',
        referral: '',
        base64: ''
    })

    const handleFileChange = (event: any) => {
        const file = event.target.files[0];

        if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
            const reader = new FileReader();

            reader.onloadend = () => {
                const base64String = reader.result;
                setUserDetail({ ...userDetail, base64: base64String });
                console.log(base64String, '-----------------------------------base64String');

                // You can handle the base64String here or pass it to a parent component
            };

            reader.readAsDataURL(file);
        } else {
            alert("Please select a JPG or PNG file.");
        }
    };

    const userdata = useSelector(
        (state: any) => state.user
    );
    console.log(timer, "---------------------------timer start")

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

    useEffect(() => {

        axios
            .get('http://13.232.73.53:8000/location')
            .then((response: any) => {
                setCountryData(response.data)
                console.log(response.data, "-------------------------------state data")
            })
            .catch((e: any) => {
                console.log(e, 'some error ocuure while sending data')
            })

    }, []); // Make sure to include the dependency if needed

    useEffect(() => {
        if (selectedState) {
            const cities = countryData[0]?.states.find((state) => state.name === selectedState)?.cities || [];
            setCityName(cities)
        }

    }, [selectedState])


    const resendCode = () => {
        onCaptchVerify()

        const appVerifier = (window as any).recaptchaVerifier;

        const formatPh = `+91 ${userDetail.phone_number}`;

        console.log(formatPh, "--------------------------------------------formpath")

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

    const formatTime = (time: number): string => {
        const minutes = Math.floor(time / 60);
        const remainingSeconds = time % 60;

        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(remainingSeconds).padStart(2, '0');

        console.log(`${formattedMinutes}:${formattedSeconds}`, "Formated string---------------------------------------------")

        return `${formattedMinutes}:${formattedSeconds}`;
    };

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

        const formatPh = `+91 ${userDetail.phone_number}`;

        console.log(formatPh, '----------------------phone number formate')

        signInWithPhoneNumber(auth, formatPh, appVerifier)
            .then((confirmationResult) => {
                (window as any).confirmationResult = confirmationResult;
                setConfirmationResult(confirmationResult);
                setUserDetail({ ...userDetail, next: userDetail.next + 1 });
                console.log(confirmationResult, '-------------------------------------------confirmationResult')
                timerActivate();
                toast.success("OTP sended successfully!");
            })
            .catch((error: any) => {
                // toast(
                //     "Too many request otp. \n\n Please wait 2 hours to register.",
                //     {
                //         duration: 6000,
                //     }
                // );
                console.log(error, "----------------------------error mahendra----------");
            });
    }

    const isRefCodeExist = () => {

        axios
            .post('http://13.232.73.53:8000/users/refcode', {
                "refCode": userDetail.referral
            })
            .then((response: any) => {
                if (response.data.message == "Referral code not found") {
                    toast.error(response.data.message)
                } else {
                    handleOnsubmit()
                }
            })
            .catch((e: any) => {
                console.log(e, 'some error ocuure while sending data')
            })

    }


    const onChangeValue = (e: any) => {
        setUserDetail({ ...userDetail, [e.target.name]: e.target.value });
    };

    const handleOnsubmit = () => {
        const userInfo = {
            "userName": userDetail.user_name,
            "status": 1,
            "phoneNumber": userDetail.phone_number,
            "email": userDetail.email,
            "dob": userDetail.dob,
            "state": selectedState,
            "city": selectedCity,
            "referral": userDetail.referral,
            "image": userDetail.base64,
            "gender": userDetail.gender,
            "token": accessToken
        }

        console.log(userInfo, "--------------------send data")

        axios
            .post('http://13.232.73.53:8000/users/register', userInfo)
            .then((response: any) => {
                console.log(response.data.data, '-------------------------------------final responce get')
                dispatch(user_credentils({ userName: response.data.data.userName, phoneNumber: response.data.data.phoneNumber, email: response.data.data.email, password: response.data.data.password, userId: response.data.data._id }));

            })
            .catch((e: any) => {
                console.log(e, 'some error ocuure while sending data')
            })
    }

    // Function to handle OTP verification
    const verifyOTP = () => {
        if (confirmationResult && userDetail.otp) {
            console.log(userDetail.otp, confirmationResult, "---------------------------------------------------otp")
            confirmationResult.confirm(userDetail.otp)
                .then((result: any) => {
                    // User has been successfully authenticated
                    dispatch(save_access_token(result.user.accessToken))
                    toast.success("OTP verify successfully!");
                    console.log("Authentication successful", result.user);
                    setUserDetail({ ...userDetail, next: userDetail.next + 1 });
                    handleOnsubmit()
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

    const checkNumberExist = () => {
        axios
            .post('http://13.232.73.53:8000/users/exist', { "phoneNumber": userDetail.phone_number })
            .then((response: any) => {
                console.log(response.data, '-------------------------------------final responce get')
                if (response.data.message == "Phone number already registered") {
                    return toast.error("Phone number already registered")
                } else {
                    onSignup()
                }
            })
            .catch((e: any) => {
                console.log(e, 'some error ocuure while sending data')
            })
    }

    // console.log(userDetail,"-------------------------------------evry time")

    const sendUserFormData = (e: any) => {
        e.preventDefault()
        if (userDetail.next == 0) {
            if (userDetail.phone_number.length == 10) {
                checkNumberExist()
            } else {
                toast.error("Please enter 10 digit phone number")
            }

        } else if (userDetail.next == 1) {

            if (userDetail.otp.length == 6) {
                // setUserDetail({ ...userDetail, next: userDetail.next + 1 });
                // check number is sixe digit and there is only number allowed
                if (regex.test(userDetail.otp)) {
                    verifyOTP()
                } else {
                    toast.error("Please enter Valid six-digit number")
                }

                console.log(userDetail.otp, "------------------------------otp")
            } else {
                toast.error("Please enter 6 digit otp")
            }

        } else if (userDetail.next == 2) {

            if (userDetail.checkBox == true) {
                setUserDetail({ ...userDetail, next: userDetail.next + 1 });
            } else {
                toast.error("Please check that the checkbox is checked.")
            }

        } else if (userDetail.next == 3) {

            if (userDetail.user_name == '') {
                toast.error("Please enter user name.")
            } else if (userDetail.email == "") {
                toast.error("Please enter your email.")
            } else {
                if (userDetail.referral.length > 0) {
                    isRefCodeExist()
                } else {
                    handleOnsubmit()
                    setUserDetail({ ...userDetail, next: userDetail.next + 1 });
                }
            }

        }
    }

    return (
        <>
           <Breadcrumb title='Sign up' subTitle='Sign up' />
            <div className={`signup-page-area md:mb-[200px] ${userDetail.next == 3 ? "max-md:h-[1200px]" : ""} ${userDetail.next == 2 ? "max-md:mb-[450px]" : ""} mt-[100px] ${(userDetail.next == 0 || userDetail.next == 1) ? "max-md:h-[900px]" : userDetail.next == 2 ? "max-md:mb-[600px]" : "max-md:h-[1200px]"}`}>
            <div id="recaptcha-container"></div>
            <Toaster toastOptions={{ duration: 4000 }} />
                <section className="flex flex-wrap justify-center items-center max-md:flex-col mx-3">
                    <div className={`w-[50%] max-md:w-[100%] ${userDetail.next == 3 ? "max-md:h-[300px] h-[800px]" : "max-md:h-[300px] h-[600px]"}`}>
                        <h1 className='text-center'>Sign Up</h1>
                        <Image className="h-full object-contain object-center rounded" src={signup} alt="img not found" />
                    </div>
                    <div className={`w-[40%] max-md:w-[100%] ${userDetail.next == 3 ? "max-md:h-[300px] h-[800px]" : "max-md:h-[300px] h-[600px]"}`}>
                        <div>
                            <div className={`text-center mb-20 flex justify-center items-center flex-col ${userDetail.next == 2 ? "hidden": ""}`}>
                                <span className='Signup-header-text text-black text-10xl max-md:mt-20'>
                                    {userDetail.next == 0 ?
                                        `Create an account`
                                        :
                                        userDetail.next == 1 ?
                                            "Otp Varification"
                                            :
                                            userDetail.next == 2 ?
                                                ""
                                                :
                                                userDetail.next == 3 ?
                                                    "Complete your profile"
                                                    :
                                                    "Review Your Profile"
                                    }</span>
                                <span className='Signup-header-base-text text-black pt-12'> {userDetail.next == 0 ?
                                    "Enter your phone number and we'll text you a code to active your account."
                                    :
                                    userDetail.next == 1 ?
                                        `We have sent a varification code to phone number +91 ${userDetail.phone_number}`
                                        :
                                        ""
                                }</span>
                            </div>
                            {
                                userDetail.next == 0 ?
                                    <div className='w-full relative my-3 space-y-5 flex flex-col'>
                                        {/* <PhoneInput country={"in"}  value={userDetail.phone_number} onChange={(e)=>setUserDetail({...userDetail, phone_number : e})} /> */}
                                        {/* <input type="number" name="phone_number" placeholder="Enter phone number" value = {userDetail.phone_number} onChange={onChangeValue} min={10}/> */}

                                        <Box
                                            component="form"
                                            noValidate
                                            autoComplete="off"
                                        >
                                            <TextField name='user_name' onChange={onChangeValue} id="standard-basic" label="Name" variant="standard" style={{ width: '100%' }} />
                                        </Box>
                                        <Box
                                            component="form"
                                            noValidate
                                            autoComplete="off"
                                            className='space-x-5'
                                        >
                                            <TextField disabled className='max-sm:w-[25%] sm:w-[15%] md:w-[15%] lg:w-[15%]' id="filled-hidden-label-small" defaultValue="+91" variant="filled" size="small" />
                                            <TextField name='phone_number' onChange={onChangeValue} className='max-sm:w-[65%] sm:w-[78%] md:w-[79%]' id="standard-basic" label="Phone Number" variant="standard" />
                                        </Box>

                                        <Button variant="contained" size="large" style={{ width: '100%', borderRadius: 20, marginTop: 20, backgroundColor: '#621562' }} onClick={(e) => sendUserFormData(e)}>
                                            Next
                                        </Button>
                                    </div>
                                    :
                                    userDetail.next == 1 ?
                                        <div>
                                            <div className='otp-container'>
                                                <p>Varification Code</p>
                                                {(timer < 30) ? (
                                                    <p>Resend code in <span className='display-timer'>{formatTime(timer)}</span></p>
                                                ) : (
                                                    <p className='resend-btn' onClick={() => resendCode()}>Resend</p>
                                                )}
                                            </div>
                                            <OtpInput
                                                value={userDetail.otp}
                                                onChange={(e) => { setUserDetail({ ...userDetail, otp: e }) }}
                                                numInputs={6}
                                                renderInput={(props) => <input {...props} style={{ width: '100%', height: '50px', margin: '2px', border: 'none', borderBottom: "1px solid black" }} />}
                                            />
                                            <Button variant="contained" size="large" style={{ width: '100%', borderRadius: 20, marginTop: 20, backgroundColor: '#621562' }} onClick={(e) => sendUserFormData(e)}>
                                                Next
                                            </Button>
                                        </div>

                                        :

                                        userDetail.next == 2 ?
                                            <div className={`max-md:my-10 max-md:mx-5`}>
                                                <SignupTerm />
                                                <div className="signup-action">
                                                    <div className="course-sidebar-list">
                                                        <input className="signup-checkbo" type="checkbox" id="sing-up" checked={userDetail.checkBox} onChange={(e) => setUserDetail({ ...userDetail, checkBox: !userDetail.checkBox })} />
                                                        <label className="sign-check" htmlFor="sing-up"><span>Accept the terms and Privacy Policy</span></label>
                                                    </div>
                                                </div>
                                                <div className="btn-container">
                                                    {
                                                        userDetail.checkBox ?
                                                            <Button variant="contained" size="large" style={{ width: '100%', borderRadius: 20, marginTop: 20, backgroundColor: '#621562' }} onClick={(e) => sendUserFormData(e)}>
                                                                Next
                                                            </Button>
                                                            :
                                                            <Button variant="contained" size="large" style={{ width: '100%', borderRadius: 20, marginTop: 20, backgroundColor: 'gray' }} onClick={(e) => sendUserFormData(e)}>
                                                                Next
                                                            </Button>

                                                    }
                                                </div>
                                            </div>

                                            :
                                            userDetail.next == 3 ?
                                                <div className='w-full'>
                                                    <div className='relative w-28 mx-auto'>
                                                        {
                                                            userDetail.base64 ?
                                                                <img alt="GeekforGeeks" src={userDetail.base64 as string} className='w-[100px] h-[100px] object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100' />
                                                                :
                                                                <p
                                                                    style={{
                                                                        background: 'linear-gradient(151.16deg, #2D90A9 -7.23%, #704CBA 36.26%, #70B839 79.75%, #2D90A9)',
                                                                        height: 100,
                                                                        width: 100,
                                                                        borderRadius: '50%',
                                                                        display: 'flex',
                                                                        justifyContent: 'center',
                                                                        alignItems: 'center',
                                                                    }}
                                                                >
                                                                    <Image
                                                                        src={UserPngImage}
                                                                        style={{ width: "80%", height: "auto" }}
                                                                        alt="course-img"
                                                                    />
                                                                </p>

                                                        }

                                                        <label htmlFor="upload-photo" style={{ position: 'absolute', width: "30px", height: "30px", display: 'flex', justifyContent: "center", alignItems: 'center', bottom: 0, right: 10 }}>
                                                            <input
                                                                style={{ display: 'none' }}
                                                                id="upload-photo"
                                                                name="upload-photo"
                                                                type="file"
                                                                onChange={handleFileChange}
                                                                accept="image/jpeg,image/png"
                                                            />
                                                            <IconButton aria-label="delete" disabled color="primary">
                                                                <CameraAltIcon sx={{ color: "#621562" }} />
                                                            </IconButton>
                                                        </label>
                                                    </div>

                                                    <div className="w-full">
                                                        <Box
                                                            component="form"
                                                            noValidate
                                                            autoComplete="off"
                                                        >
                                                            <TextField defaultValue={userDetail.user_name} id="standard-basic" className='w-full my-3' name="user_name" onChange={onChangeValue} label="Name*" variant="standard" />
                                                        </Box>
                                                        <Box
                                                            component="form"
                                                            noValidate
                                                            autoComplete="off"
                                                        >
                                                            <TextField defaultValue={userDetail.email} id="standard-basic" className='w-full my-3' name="email" onChange={onChangeValue} label="Email*" variant="standard" />
                                                        </Box>

                                                    </div>

                                                    <div className='w-full relative h-16 my-3'>
                                                        <p className='absolute h-5/6 w-[20%]'>
                                                            <span className='pt-[1rem] absolute top-0 right-0 left-0 bottom-0 text-black text-[1.3em]'>D.O.B</span>
                                                        </p>
                                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                            <DatePicker
                                                                disableFuture={true}
                                                                onChange={(value: Date | null) => {
                                                                    value && setUserDetail({ ...userDetail, 'dob': dayjs(value).format('YYYY-MM-DD') });
                                                                }}
                                                                sx={{ width: '80%', position: 'absolute', right: 0, height: '4rem' }}
                                                            />
                                                        </LocalizationProvider>
                                                    </div>

                                                    <div className='w-full relative h-16 my-3'>
                                                        <p className='absolute h-5/6 w-[20%]'>
                                                            <span className='pt-[1rem] absolute top-0 right-0 left-0 bottom-0 text-black text-[1.3em]'>Location</span>
                                                        </p>
                                                        <div className='w-[80%] h-5/6 absolute right-0 flex justify-around'>
                                                            <FormControl sx={{ width: "49%" }}>
                                                                <InputLabel id="demo-multiple-chip-label">State</InputLabel>
                                                                <Select
                                                                    labelId="demo-multiple-chip-label"
                                                                    id="demo-multiple-chip"
                                                                    value={selectedState}
                                                                    onChange={(event) => { setSelectedState(event.target.value), setIsStateSelected(false) }}
                                                                    input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                                                                    MenuProps={MenuProps}
                                                                >
                                                                    {countryData[0]?.states.map(({ name }) => (
                                                                        <MenuItem key={name} value={name}>
                                                                            {name}
                                                                        </MenuItem>
                                                                    ))}
                                                                </Select>
                                                            </FormControl>

                                                            <FormControl sx={{ width: "49%" }} disabled={isStateSelected}>
                                                                <InputLabel id="demo-multiple-chip-label">City</InputLabel>
                                                                <Select
                                                                    labelId="demo-multiple-chip-label"
                                                                    id="demo-multiple-chip"
                                                                    value={selectedCity}
                                                                    onChange={(event) => setSelectedCity(event.target.value)}
                                                                    input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                                                                    MenuProps={MenuProps}
                                                                >
                                                                    {cityName.map((name: string) => (
                                                                        <MenuItem key={name} value={name}>
                                                                            {name}
                                                                        </MenuItem>
                                                                    ))}
                                                                </Select>
                                                            </FormControl>
                                                        </div>
                                                    </div>

                                                    <div className='w-full relative h-16 my-3'>
                                                        <p className='absolute h-5/6 w-[20%]'>
                                                            <span className='pt-[1rem] absolute top-0 right-0 left-0 bottom-0 text-black text-[1.3em]'>Gender</span>
                                                        </p>
                                                        <FormControl sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', position: 'absolute', width: '80%', right: 0, height: "83%" }}>
                                                            <RadioGroup
                                                                row
                                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                                name="row-radio-buttons-group"
                                                                value={userDetail.gender}
                                                                sx={{ width: "100%", display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                                                                onChange={(event) => setUserDetail({ ...userDetail, 'gender': (event.target as HTMLInputElement).value })}
                                                            >
                                                                <FormControlLabel value="female" control={<Radio sx={{ '&.Mui-checked': { color: '#621562' } }} />} label="Female" />
                                                                <FormControlLabel value="male" control={<Radio sx={{ '&.Mui-checked': { color: '#621562' } }} />} label="Male" />
                                                                <FormControlLabel value="other" control={<Radio sx={{ '&.Mui-checked': { color: '#621562' } }} />} label="Other" />
                                                            </RadioGroup>
                                                        </FormControl>
                                                    </div>

                                                    <div className='w-full relative h-16 my-3 '>
                                                        <p className='absolute h-5/6 w-[20%]'>
                                                            <span className='pt-[1rem] absolute top-0 right-0 left-0 bottom-0 text-black text-[1.3em]'>Referral Code</span>
                                                        </p>
                                                        <Box
                                                            component="form"
                                                            noValidate
                                                            autoComplete="off"
                                                            sx={{ width: '80%', position: 'absolute', right: 0, height: "4rem" }}
                                                        >
                                                            <TextField label="XYZ XYZ" id="standard-basic" name="referral" onChange={onChangeValue} variant="standard" style={{ width: '98%' }} />
                                                        </Box>
                                                    </div>
                                                    <div className="flex justify-center items-center flex-col">
                                                        <Button variant="contained" size="large" style={{ width: '100%', borderRadius: 20, marginTop: 20, backgroundColor: '#621562' }} onClick={(e) => sendUserFormData(e)}>
                                                            Save
                                                        </Button>
                                                        <span className='mt-10 underline text-black cursor-pointer' onClick={() => router.push('/courses-selection')}>Skip</span>
                                                    </div>
                                                </div>
                                                :
                                                <>
                                                    <div className="w-full flex flex-col">
                                                        <div className='relative w-28 mx-auto'>
                                                            {
                                                                userDetail.base64 ?
                                                                    <img alt="GeekforGeeks" src={userDetail.base64 as string} className='w-[100px] h-[100px] object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100' />
                                                                    :
                                                                    <p
                                                                        style={{
                                                                            background: 'linear-gradient(151.16deg, #2D90A9 -7.23%, #704CBA 36.26%, #70B839 79.75%, #2D90A9)',
                                                                            height: 100,
                                                                            width: 100,
                                                                            borderRadius: '50%',
                                                                            display: 'flex',
                                                                            justifyContent: 'center',
                                                                            alignItems: 'center',
                                                                        }}
                                                                    >
                                                                        <Image
                                                                            src={UserPngImage}
                                                                            style={{ width: "80%", height: "auto" }}
                                                                            alt="course-img"
                                                                        />
                                                                    </p>
                                                            }

                                                            <p className='mx-auto text-2xl text-black font-bold text-center'>{userDetail.user_name}</p>

                                                        </div>

                                                        <a className="inline-flex items-center">
                                                            <span className="rounded-full flex-shrink-0 object-cover object-center max-sm:mx-0 mx-3">
                                                                <SiMaildotru style={{ width: "18px", height: "18px", color: '#621562' }} />
                                                            </span>
                                                            {/* <img alt="blog" src="https://dummyimage.com/104x104"  /> */}
                                                            <span className="flex-grow flex flex-col pl-4">
                                                                <span className="title-font font-bold text-lg text-[#621562]">Email</span>
                                                                <span className="text-black text-sm tracking-widest mt-0.5">{userDetail.email}</span>
                                                            </span>
                                                        </a>
                                                        <p className='h-0.5 w-full bg-gray-200 my-3' />

                                                        <a className="inline-flex items-center">
                                                            <span className="rounded-full flex-shrink-0 object-cover object-center max-sm:mx-0 mx-3">
                                                                <LiaBirthdayCakeSolid style={{ width: "23px", height: "23px", color: '#621562' }} />
                                                            </span>
                                                            {/* <img alt="blog" src="https://dummyimage.com/104x104"  /> */}
                                                            <span className="flex-grow flex flex-col pl-4">
                                                                <span className="title-font font-bold text-lg text-[#621562]">Date of Birth</span>
                                                                <span className="text-black text-sm tracking-widest mt-0.5">{userDetail.dob}</span>
                                                            </span>
                                                        </a>
                                                        <p className='h-0.5 w-full bg-gray-200 my-3' />

                                                        <a className="inline-flex items-center">
                                                            <span className="rounded-full flex-shrink-0 object-cover object-center max-sm:mx-0 mx-3">
                                                                <HiOutlineLocationMarker style={{ width: "23px", height: "23px", color: '#621562' }} />
                                                            </span>
                                                            {/* <img alt="blog" src="https://dummyimage.com/104x104"  /> */}
                                                            <span className="flex-grow flex flex-col pl-4">
                                                                <span className="title-font font-bold text-lg text-[#621562]">Location</span>
                                                                <span className="text-black text-sm tracking-widest mt-0.5">{selectedCity}{' '}{selectedState}</span>
                                                            </span>
                                                        </a>
                                                        <p className='h-0.5 w-full bg-gray-200 my-3' />

                                                        <a className="inline-flex items-center">
                                                            <span className="rounded-full flex-shrink-0 object-cover object-center max-sm:mx-0 mx-3">
                                                                <PiGenderIntersexBold style={{ width: "23px", height: "23px", color: '#621562' }} />
                                                            </span>
                                                            {/* <img alt="blog" src="https://dummyimage.com/104x104"  /> */}
                                                            <span className="flex-grow flex flex-col pl-4">
                                                                <span className="title-font font-bold text-lg text-[#621562]">Gender</span>
                                                                <span className="text-black text-sm tracking-widest mt-0.5">{userDetail.gender}</span>
                                                            </span>
                                                        </a>

                                                        <div>
                                                            <Button variant="contained" size="large" style={{ width: '100%', borderRadius: 20, marginTop: 20, backgroundColor: '#621562' }} onClick={(e) => router.push('/courses-selection')}>
                                                                Next
                                                            </Button>
                                                            <div className='my-3 underline text-black text-center cursor-pointer' onClick={() => setUserDetail({ ...userDetail, next: userDetail.next - 1 })}>Edit Profile</div>
                                                        </div>
                                                    </div>
                                                </>

                            }

                            {
                                userDetail.next == 0 ?
                                    <div className="acount-login text-center">
                                        <span>Have an account? <Link href="/login">Sign in</Link></span>
                                    </div>
                                    :
                                    null
                            }

                           
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default RegistrationSection;