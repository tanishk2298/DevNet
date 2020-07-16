import React, {Fragment, useState} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Moment from 'react-moment'
import {connect} from 'react-redux'
import {addLike, removeLike, deletePost} from '../../actions/post'

const PostItem = ({addLike, removeLike,deletePost, auth, post:{_id,text,name,avatar,user,likes,comments,date},showActions}) => {
    

  return (
        <div class="post bg-white rounded">
            <div>
              <Link to={`/profile/${user}`} class="profile-name">
                <img
                  class="round-img profile-img"
                  src={avatar}
                  alt="avatar"
                />
                <p class="mt-1 text-primary">{name}</p>
              </Link>
             </div>
             <div>
              <p class="my-1">
                  {text}
              </p>
              <Fragment>
                <p class="post-date mt-5">
                  Posted on <Moment format="DD/MM/YYYY">{date}</Moment>
                </p>
                {showActions && (
                  <Fragment>
                    <button onClick={e => addLike(_id)} type="button" class="lk-btn">
                        <i class="fas fa-arrow-up"></i>
                        <span>{' '}{likes.length}</span>
                    </button>
                    <button  onClick={e => removeLike(_id)} type="button" class="lk-btn">
                        <i class="fas fa-arrow-down"></i>
                    </button>
                    <Link to={`/posts/${_id}`} class="lk-btn profile-name">
                        <i class="far fa-comment"></i><span class='comment-count'>{comments.length > 0 && comments.length}</span>
                    </Link>
                    {! auth.loading && user === auth.user._id && (
                      <button onClick={e => deletePost(_id)} type="button" class="del lk-btn">
                          <i class="fas fa-trash"></i>
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
