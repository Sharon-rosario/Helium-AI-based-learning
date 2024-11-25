import React from 'react';

const CourseLearn = () => {
    return (
        <div className="course-learn-wrapper">
        <div className="course-learn">
            <div className="course-leranm-tittle">
                <h4 className="mb-15">What {`you'll`} learn</h4>
            </div>
            <div className="row">
                <div className="col-xl-6">
                    <div className="course-leran-text f-left">
                        <ul>
                            <li>Handle advanced techniques like Dimensionality Reduction</li>
                            <li>Handle specific topics like Reinforcement Learning best</li>
                            <li>Know which Machine Learning model to choose for each type of
                                problem</li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="course-leran-text">
                        <ul>
                            <li>Reinforcement learning upper
                                confidence bound Thompson sampling</li>
                            <li>Model Selection and Boosting fold cross
                                validation parameter</li>
                            <li>Use Machine Learning for personal
                                purpose of machine</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default CourseLearn;