import React from "react";

const CourseProgressbar: React.FC = () => {
  return (
    <div className="student-reating-bar">
      <div className="reating-bar-wrapper">
        <div className="rating-row mb-10">
          <div className="rating-star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <div className="progress">
            <div
              className="progress-bar progress-bar1 wow fadeInLeft"
              role="progressbar"
              aria-valuenow={25}
              aria-valuemin={0}
              style={{ width: "98%" }}
              aria-valuemax={100}
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            ></div>
          </div>

          <div className="progress-tittle">
            <span>98%</span>
          </div>
        </div>
        <div className="rating-row mb-10">
          <div className="rating-star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fal fa-star"></i>
          </div>
          <div className="progress">
            <div
              className="progress-bar progress-bar2 wow fadeInLeft"
              role="progressbar"
              style={{ width: "78%" }}
              aria-valuenow={25}
              aria-valuemin={0}
              aria-valuemax={100}
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            ></div>
          </div>
          <div className="progress-tittle">
            <span>78%</span>
          </div>
        </div>
        <div className="rating-row mb-10">
          <div className="rating-star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fal fa-star"></i>
            <i className="fal fa-star"></i>
          </div>
          <div className="progress">
            <div
              className="progress-bar wow progress-bar3 fadeInLeft"
              role="progressbar"
              style={{ width: "55%" }}
              aria-valuenow={25}
              aria-valuemin={0}
              aria-valuemax={100}
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            ></div>
          </div>
          <div className="progress-tittle">
            <span>55%</span>
          </div>
        </div>
        <div className="rating-row mb-10">
          <div className="rating-star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fal fa-star"></i>
            <i className="fal fa-star"></i>
            <i className="fal fa-star"></i>
          </div>
          <div className="progress">
            <div
              className="progress-bar wow progress-bar4 fadeInLeft"
              role="progressbar"
              style={{ width: "60%" }}
              aria-valuenow={25}
              aria-valuemin={0}
              aria-valuemax={100}
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            ></div>
          </div>
          <div className="progress-tittle">
            <span>60%</span>
          </div>
        </div>
        <div className="rating-row mb-10">
          <div className="rating-star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fal fa-star"></i>
            <i className="fal fa-star"></i>
            <i className="fal fa-star"></i>
          </div>
          <div className="progress">
            <div
              className="progress-bar wow fadeInLeft progress-bar5"
              role="progressbar"
              style={{ width: "10%" }}
              aria-valuenow={25}
              aria-valuemin={0}
              aria-valuemax={100}
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            ></div>
          </div>
          <div className="progress-tittle">
            <span>10%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseProgressbar;
