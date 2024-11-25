import Image from "next/image";
import React from "react";
import courseReviewImg from "../../../public/assets/img/course/course-reviews-3.png";
import courseReviewImgTwo from "../../../public/assets/img/course/course-reviews-2.png";
import courseReviewImgThree from "../../../public/assets/img/course/course-reviews-1.png";
import Link from "next/link";

const CourseDetailsReview = () => {
  return (
    <div className="course-detalis-reviews pt-15">
      <div className="course-detalis-reviews-tittle">
        <h3>Reviews</h3>
      </div>
      <div className="course-review-item mb-30">
        <div className="course-reviews-img">
          <Link href="#">
          <Image src={courseReviewImgThree} style={{width:'auto', height:'auto'}} alt="img not found"/>
          </Link>
        </div>
        <div className="course-review-list">
          <h5>
            <Link href="#">Sotapdi Kunda</Link>
          </h5>
          <div className="course-start-icon">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <span>55 min ago</span>
          </div>
          <p>
            Very clean and organized with easy to follow tutorials, Exercises,
            and solutions. This course does start from the beginning with very
            little knowledge and gives a great overview of common tools used for
            data science and progresses into more complex concepts and ideas.
          </p>
        </div>
      </div>
      <div className="course-review-item mb-30">
        <div className="course-reviews-img">
          <Link href="#">
          <Image src={courseReviewImgTwo} style={{width:'auto', height:'auto'}} alt="img not found"/>
          </Link>
        </div>
        <div className="course-review-list">
          <h5>
            <Link href="#">Samantha</Link>
          </h5>
          <div className="course-start-icon">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <span>45 min ago</span>
          </div>
          <p>
            The course is good at explaining very basic intuition of the
            concepts. It will get you scratching the surface so to say. where
            this course is unique is the implementation methods are so well
            defined Thank you to the team !.
          </p>
        </div>
      </div>
      <div className="course-review-item mb-30">
        <div className="course-reviews-img">
          <Link href="#">
          <Image src={courseReviewImg} style={{width:'auto', height:'auto'}} alt="img not found"/>
          </Link>
        </div>
        <div className="course-review-list">
          <h5>
            <Link href="#">Michell Mariya</Link>
          </h5>
          <div className="course-start-icon">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <span>30 min ago</span>
          </div>
          <p>
            This course is amazing..! I started this course as a beginner and
            learnt a lot. Instructors are great. Query handling can be
            improved.Overall very happy with the course.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsReview;
