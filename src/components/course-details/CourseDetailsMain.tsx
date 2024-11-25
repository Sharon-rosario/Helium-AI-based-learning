"use client";
import React from "react";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import CourseReview from "./CourseReview";
import CourseDetailsReview from "./CourseDetailsReview";
import CourseStar from "./CourseStar";
import CourseLearn from "./CourseLearn";
import CourseDetailsMeta from "./CourseDetailsMeta";
import CourseDetailsInstructor from "./CourseDetailsInstructor";
import CourseProgressbar from "./CourseProgressbar";
import CourseDetailsSidebar from "./CourseDetailsSidebar";
import { idType } from "@/interFace/interFace";

const CourseDetailsMain = ({ id }: idType) => {
  const course:any = []

  return (
    <main>
      <Breadcrumb
        title="Courses"
        subTitle="MySQL Database : Beginner SQL Database Design"
      />
      <section className="course-detalis-area pb-90">
        <div className="container">
          <div className="row">
            <div className=" col-xxl-8 col-xl-8">
              <div className="course-detalis-wrapper mb-30">
                <CourseStar course={course} />
                <CourseDetailsMeta course={course}/>
                <div className="course-description pt-45 pb-30">
                  <div className="course-Description">
                    <h4>Description</h4>
                  </div>
                  <p>
                    This course has been designed by two professional Data
                    Scientists so that we can share our knowledge and help you
                    learn complex theory, algorithms, and coding libraries in a
                    simple way. We will walk you step-by-step into the World of
                    Machine Learning. With every tutorial, you will develop new
                    skills and improve your understanding of this challenging
                    yet lucrative sub-field of Data Science.
                  </p>
                </div>

                <CourseLearn />
                <div className="course-requirements pt-45">
                  <h4>Requirements</h4>
                  <div className="course-requirements-text">
                    <ul>
                      <li>• High School Mathematics Level</li>
                      <li>• Basic Python Knowledge Required</li>
                      <li>• Broadband Internet</li>
                    </ul>
                  </div>
                </div>
                <CourseDetailsInstructor />
                <div className="student-feedback pt-45 ">
                  <h3>Student Feedback</h3>
                  <div className="row">
                    <div className="col-xl-3">
                      <div className="reating-point mb-30">
                        <div className="rating-point-wrapper text-center">
                          <h2>4.7</h2>
                          <div className="rating-star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                          <span>5785 Rating</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-9">
                      <CourseProgressbar />
                    </div>
                  </div>
                </div>
                <CourseDetailsReview />
                <div className="col-xl-12">
                  <CourseReview />
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-8 col-md-8">
              <CourseDetailsSidebar course={course} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CourseDetailsMain;
