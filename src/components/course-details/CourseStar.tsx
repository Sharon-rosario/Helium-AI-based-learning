import React from 'react';
interface Course {
    id: number;
    ratingCount: number;
    title:string;
    ratings:number;
  }

const CourseStar:React.FC<{ course: Course }> = ({course}) => {

     //for rating handle
     const getRating = (ratingsNum: any) => {
        let empty_rating_count = 5 - ratingsNum;
        let ratings = [];
        for (let i = 0; i < ratingsNum; i++) {
            ratings.push(<i className="fas fa-star" key={`l-${i}`}></i>)
        }
        for (let i = 0; i < empty_rating_count; i++) {
            ratings.push(<i className="fal fa-star" key={`p-${i}`}></i>)
        }
        return ratings;
    }
    

    return (
        <div className="course-heading mb-20">
        <h2>MySQL Database : {course.title}</h2>
        <div className="course-star">
        {getRating(course?.ratings)}
            <span>({course.ratingCount}) reviews</span>
        </div>
    </div>
    );
};

export default CourseStar;