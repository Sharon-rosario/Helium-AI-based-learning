import React from 'react';

const BlogSidebarForm = () => {
    const handleSubmit=(event:any)=>{
        event.preventDefault()
    }
    return (
        <form onSubmit={handleSubmit} action="#">
        <input type="text" placeholder="Search for courses..."/>
        <button type="submit">
            <i className="far fa-search"></i>
        </button>
    </form>
    );
};

export default BlogSidebarForm;