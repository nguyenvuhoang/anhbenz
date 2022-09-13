/* eslint-disable react-hooks/exhaustive-deps */
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getNewsByID } from "../../store/selectors/NewsSelector";

const BlogPrev = (props) => {
  const { newsdetail } = props;
  return (
    <>
      <div className="col-lg-6 float-left">
        <NavLink className="text-gradient" to={`/blog-details/${newsdetail.id}`}>{newsdetail.name}</NavLink>
      </div>
    </>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    newsdetail: getNewsByID(state, ownProps.blogid)
  };
};


export default connect(mapStateToProps, null)(BlogPrev);
