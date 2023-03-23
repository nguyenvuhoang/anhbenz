/* eslint-disable react-hooks/exhaustive-deps */
import Link from 'next/link';

const BlogPrev = ({ blog }) => {
  return (
    <>
      <div className="col-lg-6 float-left">
        <Link className="text-gradient" href={`/blog-details/${blog.id}`}>{blog.name}</Link>
      </div>
    </>
  );
};

export default BlogPrev;
