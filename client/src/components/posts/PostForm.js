import React,{ useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { addPost} from '../../actions/post'

const PostForm = ({addPost}) => {

    const[text, setText] = useState('')

    return (
        <div class="post-form mb-3 ">
                        <div class="card card-info ">
                            <div class="card-body profile-details repos">
                                <form class="create-post " onSubmit={e=>{
                                    e.preventDefault();
                                    addPost({text});
                                    setText('');
                                }}>
                                    <div class="form-group">
                                        <div class="form-group">
                                            <textarea class="form-control form-control-lg font-weight-light"
                                                placeholder="Start a discussion" name="text" rows="4"
                                                cols="30" value={text} onChange={e=> setText(e.target.value)}></textarea>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-10"></div>
                                            <div class="col-md-2">
                                                <input class="btn btn-default post-btn go-back " type="submit" value="Post"></input>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
    )
}

PostForm.propTypes = {
    addPost: PropTypes.func.isRequired,
}

export default connect(null, {addPost})(PostForm)
