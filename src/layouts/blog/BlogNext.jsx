/* eslint-disable react-hooks/exhaustive-deps */
import Link from 'next/link';

const BlogNext = ({ blog }) => {

  return (
    <>
      <div className="col-lg-6 float-right">
        <Link className="text-gradient" href={`/blog-details/${blog.id}`}>{blog.name}</Link>
      </div>
    </>
  );
};

export default BlogNext;
