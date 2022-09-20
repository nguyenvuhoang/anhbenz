/* eslint-disable react-hooks/exhaustive-deps */
import { NavLink } from 'react-router-dom';

const BlogPrev = ({ blog }) => {
  return (
    <>
      <div className="col-lg-6 float-left">
        <NavLink className="text-gradient" to={`/blog-details/${blog.id}`}>{blog.name}</NavLink>
      </div>
    </>
  );
};

export default BlogPrev;
