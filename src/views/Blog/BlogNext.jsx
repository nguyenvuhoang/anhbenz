/* eslint-disable react-hooks/exhaustive-deps */
import { NavLink } from 'react-router-dom';

const BlogNext = ({ blog }) => {

  return (
    <>
      <div className="col-lg-6 float-right">
        <NavLink className="text-gradient" to={`/blog-details/${blog.id}`}>{blog.name}</NavLink>
      </div>
    </>
  );
};

export default BlogNext;
