import React,{ useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { addPost} from '../../actions/post'

const PostForm = ({addPost}) => {

    const[text, setText] = useState('')

    return (
        <div className="post-form mb-3 ">
                        <div className="card card-info ">
                            <div className="card-body profile-details repos">
                                <form className="create-post " onSubmit={e=>{
                                    e.preventDefault();
                                    addPost({text});
                                    setText('');
                                }}>
                                    <div className="form-group">
                                        <div className="form-group">
                                            <textarea className="form-control form-control-lg font-weight-light"
                                                placeholder="Start a discussion" name="text" rows="4"
                                                cols="30" value={text} onChange={e=> setText(e.target.value)}></textarea>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-10"></div>
                                            <div className="col-md-2">
                                                <input className="btn btn-default post-btn go-back " type="submit" value="Post"></input>
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
