import React from "react";

const CommentForm = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-xxl-12">
          <textarea
            placeholder="Your review"
            className="comment-input comment-textarea mb-20"
          ></textarea>
        </div>
        <div className="col-xxl-6">
          <div className="comment-input mb-20">
            <input type="text" placeholder="Your Name" />
          </div>
        </div>
        <div className="col-xxl-6">
          <div className="comment-input mb-20">
            <input type="email" placeholder="Your Email" />
          </div>
        </div>
        <div className="col-xxl-12">
          <div className="comment-submit">
            <button type="submit" className="edu-btn">
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CommentForm;
