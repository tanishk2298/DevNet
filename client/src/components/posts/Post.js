import React, {Fragment,useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getPosts} from '../../actions/post'
import Spinner from '../layout/Spinner'
import PostItem from './PostItem'
import PostForm from './PostForm'

const Post = ({getPosts, post: {posts, loading}}) => {
    
    useEffect(() => {
        getPosts();
    }, [getPosts])
    
    return loading ? <Spinner/> : (
        <div class="container">
            <div class="row dash posts-dash home">
                <div class="col-md-12">
                    <div class="col-md-12">
                        <PostForm/>
                        <div class="posts">
                            {posts.map(post => (
                                <PostItem key={post._id} post={post}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Post.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post : PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    post: state.post
})

export default connect(mapStateToProps, {getPosts})(Post)
