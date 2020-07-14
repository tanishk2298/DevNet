import React, {useState} from 'react'
import bg from "../../img/bg.svg"
import wave from "../../img/wave.svg"
import avatar from "../../img/avatar.svg"
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {login} from '../../actions/auth'

const Landing = ({login, isAuthenticated}) => {

    const[formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const {email, password} = formData;

    const onChange = (e) => setFormData({...formData, [e.target.name] : e.target.value });

    const onSubmit =  async (e) => {
        e.preventDefault();
        login(email,password)
    }

    if(isAuthenticated){
        return <Redirect to = "/posts"/>
    }

    return (
        <div className="container-fluid">
            <img className="wave" src={wave} alt="wave"/>
            <div className="container">
                <div className="img">
                    <img src={bg} alt="wave"/>
                </div>
                <div className="login-content">
                    <form onSubmit={e => onSubmit(e)}>
                        <img src={avatar} alt="avatar"/>
                        <h2 className="title ">Hey Developer</h2>
                        <div className="input-div one">
                            <div className="i">
                                <i className="fas fa-at"></i>
                            </div>
                            <div className="div">
                                    <input type="email" className="input" placeholder="Email" name="email" value={email} onChange={e => onChange(e)} required/>
                            </div>
                            </div>
                            <div className="input-div pass">
                            <div className="i"> 
                                    <i className="fas fa-lock"></i>
                            </div>
                            <div className="div">
                                    <input type="password" className="input" placeholder="Password" name="password" value={password} onChange={e => onChange(e)} minLength="6" required/>
                            </div>
                        </div>
                        <Link to="/register">New User?</Link>
                        <input type="submit" className="btn" value="Login"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

Landing.propTypes = {
    login : PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {login})(Landing);
