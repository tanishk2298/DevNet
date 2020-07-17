import React, {Fragment, useState} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Moment from 'react-moment'
import {connect} from 'react-redux'
import {addLike, removeLike, deletePost} from '../../actions/post'

const PostItem = ({addLike, removeLike,deletePost, auth, post:{_id,text,name,avatar,user,likes,comments,date},showActions}) => {
    

  return (
        <div className="post bg-white rounded profile-details ">
            <div>
              <Link to={`/profile/${user}`} className="profile-name">
                <img
                  className="round-img profile-img"
                  src={avatar}
                  alt="avatar"
                />
                <p className="mt-1 text-primary">{name}</p>
              </Link>
             </div>
             <div>
              <p className="my-1">
                  {text}
              </p>
              <Fragment>
                <p className="post-date mt-5">
                  Posted on <Moment format="DD/MM/YYYY">{date}</Moment>
                </p>
                {showActions && (
                  <Fragment>
                    <button onClick={e => addLike(_id)} type="button" className="lk-btn">
                        <i className="fas fa-arrow-up"></i>
                        <span>{' '}{likes.length}</span>
                    </button>
                    <button  onClick={e => removeLike(_id)} type="button" className="lk-btn">
                        <i className="fas fa-arrow-down"></i>
                    </button>
                    <Link to={`/posts/${_id}`} className="lk-btn profile-name">
                        <i className="far fa-comment"></i><span className='comment-count'>{comments.length > 0 && comments.length}</span>
                    </Link>
                    {! auth.loading && user === auth.user._id && (
                      <button onClick={e => deletePost(_id)} type="button" className="del lk-btn">
                          <i className="fas fa-trash"></i>
                      </button>
                    )}
                  </Fragment>)}
              </Fragment>
            </div>
          </div>
    )
}

PostItem.defaultProps = {
  showActions: true,
}

PostItem.propTypes = {
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    addLike: PropTypes.func.isRequired,
    removeLike: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {addLike, removeLike,deletePost})(PostItem)
