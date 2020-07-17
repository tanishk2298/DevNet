import React,{Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Moment from 'react-moment'
import {deleteComment} from '../../actions/post'

const CommentItem = ({postId, comment:{_id, name, text, avatar, user, date},auth,deleteComment}) => {
    return (
        <Fragment>
        <div className="post bg-white rounded profile-details">
            <div>
                <Link to={`/profile/${user}`} className="profile-name">
                    <img
                        className="round-img profile-img"
                        src={avatar}
                        alt="avatar"
                    />
                    <p className="mt-2">{name}</p>
                </Link>
             </div>
             <div>
                <p className="my-1">
                    {text}
                </p>
                <p className="post-date">
                    Posted on <Moment format='DD/MM/YYYY'>{date}</Moment>
                </p>
                {!auth.loading && user === auth.user._id && (
                    <div className="row">
                    <div className="col-sm-11"></div>
                        <div className="col-sm-1">
                            <button onClick={e => deleteComment(postId, _id)} type="button" className="del">
                                    <i className="fas fa-trash"></i>
                            </button>
                        </div>
                        </div>
                )}
            </div>
            </div>
        </Fragment>
    )
}

CommentItem.propTypes = {
    postId: PropTypes.number.isRequired,
    comment: PropTypes.object.isRequired,
    auth : PropTypes.object.isRequired,
    deleteComment: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    auth:state.auth
})

export default connect(mapStateToProps, {deleteComment})(CommentItem)