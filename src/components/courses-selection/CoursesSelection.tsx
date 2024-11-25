"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import axios from "axios";
import Graduation from "@/svg/graduation"
import { Button } from "@mui/material";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const CoursesSelection = () => {
    const router = useRouter();
    const { accessToken, userId } = useSelector(
        (state: any) => state.user
    );

    console.log(accessToken)
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('')
    const [coursesList, setCoursesList] = useState([])
    const [classList, setClassList] = useState([])
    const [selectedCourse, setSelectedCourse] = useState({
        courseName: '',
        className: '',
        userId,
        isCourseSelected: false,
        isClassSelected: false,
        selectedClassId : ''
    })

    const fetchCoursesData = () => {
        axios
            .get('http://13.232.73.53:8000/courses/enabledTrue', {
                headers: {
                    'Authorization': accessToken, // Replace YOUR_TOKEN_HERE with your actual token
                },
            })
            .then((response: any) => {
                console.log(response.data.data, "------------------data we get as a response")
                setCoursesList(response.data.data)
            })
            .catch((e: any) => {
                console.log(e, 'some error occurred while fetching data');
            });

    }

    const fetchClassList = () => {
        axios
            .get('http://13.232.73.53:8000/classes/enabledTrue', {
                headers: {
                    'Authorization': accessToken, // Replace YOUR_TOKEN_HERE with your actual token
                },
            })
            .then((response: any) => {
                console.log(response.data.data, "--------------------expected")
                setClassList(response.data.data)
            })
            .catch((e: any) => {
                console.log(e, 'some error occurred while fetching data');
            });
    }

    useEffect(() => {
        fetchCoursesData()
        fetchClassList()
    }, [])

    const goToHomePage = () => {
       if (!selectedCourse.selectedClassId) {
        toast.error("Please select at least on class")
       }else{
         const payload = {
            "userId": selectedCourse.userId,
            "class":selectedCourse.className,
            "course":selectedCourse.courseName
         }

         axios
            .post('http://13.232.73.53:8000/courses/user-course', payload, {
                headers: {
                  'Authorization': accessToken, // Replace YOUR_TOKEN_HERE with your actual token
                  'Content-Type': 'application/json', // You can adjust content type as needed
                },
              })
            .then((response: any) => {

                if (response.data.message = "Course Details retrieved successfully") {
                    toast.success("User Register Successfully.")
                    router.push('/')
                } else {
                    toast.success(response.data.message)
                }
                console.log(response.data, '-------------------------------------final responce get')
            })
            .catch((e: any) => {
                toast.error("Server down")
                console.log(e, 'some error ocuure while sending user-course data')
            })

         console.log(payload)
       }
    }

    // console.log(coursesList, "coursesList--------", classList, "classes--------")

    // console.log(accessToken, "Come on Courses selectionscreen------------------------")

    const handleOnchange = (event: any) => {
        event.preventDefault();
        const value = event.target.value;
        setSearchValue(value);
    };

    return (
        <main>
           <Toaster toastOptions={{ duration: 4000 }} />
            <Breadcrumb title="Course 02" subTitle="Course" />
            <section className="course-content-area pb-90">
                <div className="container">
                    <div className="w-full flex justify-start flex-wrap py-10 flex-col">

                        {
                            !selectedCourse.isCourseSelected ?
                                <div className="flex flex-col w-full ">
                                    <div className="flex space-x-5 flex-col lg:flex-row">
                                        <h1>What Courses are you looking For?</h1>

                                        <div>
                                            <form action="#">
                                                <div className="bar-secrch-icon position-relative">
                                                    <input
                                                        type="text"
                                                        value={searchValue}
                                                        onChange={handleOnchange}
                                                        placeholder="Search for your courses"
                                                    />
                                                    <button type="submit">
                                                        <i className="far fa-search"></i>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <h3 className="text-[#621562] my-8">Popular Courses</h3>

                                    <section className="text-gray-600 body-font">
                                        <div className="container mx-auto">
                                            <div className="flex flex-wrap -m-4 text-center">
                                                {
                                                    coursesList.map(({ courseName, _id }) => (
                                                        <div className="md:w-1/4 sm:w-1/2 w-full p-2" key={_id}>
                                                            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg flex flex-col justify-center items-center space-y-3 cursor-pointer" onClick={() => setSelectedCourse(prevState => ({
                                                                ...prevState, // Spread the current state to keep the rest of the properties unchanged
                                                                isCourseSelected: true,
                                                                courseName : courseName
                                                            }))}>
                                                                <Graduation />
                                                                <h2 className="title-font font-bold text-xl text-gray-900">{courseName}</h2>
                                                                {/* <p className="leading-relaxed">Downloads</p> */}
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </section>
                                </div>
                                :

                                <section className="text-gray-600 body-font flex flex-col w-full">
                                    <h3 className="text-black my-8">Select your class</h3>
                                    <h5 className="pb-2 text-gray-600 font-bold">{selectedCourse.courseName} Courses selected</h5>
                                    <div className="container mx-auto">
                                        <div className="flex flex-wrap -m-4 text-center">
                                            {
                                                classList.map(({ className, _id }) => (
                                                    <div className="md:w-1/4 sm:w-1/2 w-full p-2" key={_id}>
                                                        <div className={`border-2 border-gray-200 px-4 py-6 rounded-lg flex flex-col justify-center items-center space-y-3 ${selectedCourse.selectedClassId == _id ? "bg-[#621562]" : "bg-[#F8F1F9]"} cursor-pointer`} onClick={() => setSelectedCourse(prevState => ({
                                                                ...prevState, // Spread the current state to keep the rest of the properties unchanged
                                                                selectedClassId : _id,
                                                                className : className
                                                            }))}>
                                                            <div className="relative p-3">
                                                                <h2 className={`title-font font-bold text-3xl ${selectedCourse.selectedClassId == _id ? "text-white" : "text-[#621562]"}`}>{className}</h2>
                                                                <span className={`absolute top-2 right-0 ${selectedCourse.selectedClassId == _id ? "text-white" : "text-[#621562]"} font-bold text-2xl`}>th</span>
                                                                <span className={`${selectedCourse.selectedClassId == _id ? "text-white" : "text-[#621562]"} font-bold relative bottom-2 text-xl`}>Class</span>
                                                            </div>
                                                            {/* <p className="leading-relaxed">Downloads</p> */}
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>

                                        <div className="flex justify-center items-center py-10">
                                            <Button variant="contained" size="large" className="max-sm:w-full max-md:w-1/2 w-1/3" style={{ backgroundColor: "#621562", borderRadius: 20 }} onClick={() => goToHomePage()}>
                                                Explore Helium
                                            </Button>
                                        </div>
                                    </div>
                                </section>
                        }


                    </div>
                </div>
            </section>
        </main>
    );
};

export default CoursesSelection;
