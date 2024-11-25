import Link from 'next/link';
import React from 'react';
import courseMetaImg from '../../../public/assets/img/course/course-meta.png';
import Image, { StaticImageData } from 'next/image';

interface Course {
    id: number;
    tutorImg:StaticImageData;
    authorName:string;
  }

const CourseDetailsMeta:React.FC<{ course: Course }> =({course}) => {
    return (
        <div className="course-detelis-meta">
        <div className="course-meta-wrapper border-line-meta">
            <div className="course-meta-img">
                <Link href="/instructor-profile">{course.tutorImg && <Image src={course.tutorImg} style={{width:'100%', height:'auto'}} alt="course-meta"/>}</Link>
            </div>
            <div className="course-meta-text">
                <span>Created by</span>
                <h6><Link href="/instructor-profile">{course.authorName}</Link></h6>
            </div>
        </div>
        <div className="course-Enroll border-line-meta">
            <p>Total Enrolled</p>
            <span>5,420</span>
        </div>
        <div className="course-update border-line-meta">
            <p>Last Update</p>
            <span>01 January 2022 </span>
        </div>
        <div className="course-category">
            <p>01 January 2022 </p>
            <span><Link href="/course">Data Science</Link></span>
        </div>
    </div>
    );
};

export default CourseDetailsMeta;