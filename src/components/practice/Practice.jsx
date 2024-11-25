"use client"
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { practicedata } from "@/redux/slices/practiceSlice";
import { ApiPost } from '../../axios/axios'
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import UserIcon from './UserIcon'

const Practice = () => {

  const dispatch = useDispatch();

  const { data, isLoading } = useSelector(
    (state) => state.practice.practiceData
  );

  console.log(data, isLoading, "hole 000000000000000000---------------")

  useEffect(() => {
    listCourses()
  }, [])

  const listCourses = async () => {
    let data = {
      "userId": "65d8793a904bd61fb58ad403",
      "courseId": "65a77b3e452051921b575a48"
    }

    let response = await ApiPost("courses/all-course-details", data)
    response.isLoading = true
    dispatch(practicedata(response))
  }


  return (
    <section className="member-area pt-40 pb-90">
      <div className="container">
        <div className="row">
          {
            data.map((subject) => (
              <div className="w-full flex flex-col" key={subject._id}>
                <h1 className="my-16 text-center max-md:text-2xl max-sm:my-10">{subject.subjectName.split("_")[1]} ({subject.chapters.length} chapters) </h1>
                <div className="Item-wrapper-subjects">
                  {subject.chapters.slice(0, 12).map((chapter) => (
                    <div key={chapter._id} className="top-wrapper-container rounded-xl border border-[#E3EBF1] text-center">

                      <div className="flex items-center justify-center bg-[#E3EBF1] p-3 w-[100px] h-[100px] rounded-[50%] m-auto">
                        <Link
                          //  href={`/instructor-profile/${item.id}`}
                          href={"/"}
                        >
                            <UserIcon />
                        </Link>
                      </div>
                      <div className="flex justify-center items-center flex-col">
                        <h4 className="text-xl max-md:text-sm font-bold my-3 ">
                          <Link
                            // href={`/instructor-profile/${item.id}`} 
                            href={"/"}
                          >{chapter.chapterName}</Link>
                        </h4>
                        <span>{chapter.attempted}/{chapter.chaptQue} available</span>
                      </div>

                      <div>
                      <button className="flex mx-auto mt-6 text-white bg-[#410241] hover:bg-[#621562] border-0 py-2 px-5 focus:outline-none rounded">Start</button>
                      </div>

                    </div>
                  ))}
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Practice;
