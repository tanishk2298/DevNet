import React,{Fragment, useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Spinner from '../layout/Spinner'
import {getPost, getPosts} from '../../actions/post'
import PostItem from '../posts/PostItem'
import { Link } from 'react-router-dom'
import CommentForm from '../post/CommentForm'
import CommentItem from '../post/CommentItem'

const Post = ({getPost, post: {post, loading}, match}) => {

    useEffect(() => {
        getPost(match.params.id);
    }, [getPost])

    return (
        loading || post === null ? <Spinner/> :
        <Fragment>
            <div className="container">
                <div className="row dash posts-dash home">
                    <div className="col-md-12">
                        <div className="col-md-12">
                            <div className="dash-buttons">
                                <div className="row">
                                    <div className="col-sm-3"><Link to="/posts">
                                        <button className="btn btn-default dash-edit go-back back-post" type="submit"><i className="fas fa-chevron-left"></i>&nbsp;Home</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>  
                            <div className="posts">
                                <PostItem post={post} showActions={false}/>
                                <CommentForm postId={post._id}/>
                                
                                    {post.comments.map(comment => (
                                        <CommentItem key={comment._id} comment={comment} postId={post._id} />
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

Post.propTypes = {
    getPost : PropTypes.func.isRequired,
    post : PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    post: state.post
})

export default connect(mapStateToProps, {getPost})(Post)
