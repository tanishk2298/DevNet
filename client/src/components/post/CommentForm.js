import React,{useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {addComment} from '../../actions/post'

const CommentForm = ({addComment, postId}) => {

    const [text,setText] = useState('');

    return (
            <form class="create-post comment" onSubmit={e=>{
                            e.preventDefault();
                            addComment(postId, {text});
                            setText('');
                        }}>
                <div class="form-group">
                    <div class="row">
                        <div class="col-sm-10">
                        <textarea class="form-control form-control-lg font-weight-light profile-details"
                        placeholder="Leave a comment" name="text" rows="1"
                        cols="30" value={text} onChange={e=>setText(e.target.value)}></textarea>
                        </div>
                        <div class="col-sm-2">
                            <input class="btn btn-default post-btn go-back cmt-btn" type="submit" value="Add"></input>
                        </div>
                    </div>
                </div>
            </form>
    )
}

CommentForm.propTypes = {
    addComment: PropTypes.func.isRequired
}

export default connect(null, {addComment})(CommentForm)
