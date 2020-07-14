import React, {useState} from 'react'
import team from "../../img/team.svg"
import wave from "../../img/wave.svg"
import {connect} from "react-redux"
import {setAlert} from '../../actions/alert'
import {register} from '../../actions/auth'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'


const Register = ({setAlert, register, isAuthenticated}) => {

    const[formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const { name, email, password, password2} = formData;

    const onChange = (e) => setFormData({...formData, [e.target.name] : e.target.value });

    const onSubmit =  async (e) => {
        e.preventDefault();
        if(password !== password2){
            setAlert("Passwords don't match", 'danger');
        }
        else{
            register({ name, email, password});
        }
    }

    if(isAuthenticated){
        return <Redirect to="/dashboard"/>
    }

    return (
        <div className="container-fluid">
            <img className="wave" src={wave} alt="wave"/>
            <div className="container">
                <div className="img">
                    <img src={team} alt="team"/>
                </div>
                <div className="login-content">
                    <form onSubmit={e => onSubmit(e)}>
                        <h2 className="login-content title">Sign Up</h2>
                        {/* <p className="text-muted title mr-4"><i className="fab fa-connectdevelop"></i>&nbsp;Connect with developers across globe</p> */}
                        <div className="input-div one">
                            <div className="i">
                                <i class="fas fa-user"></i>
                            </div>
                            <div className="div">
                                    <input type="name" className="input" placeholder="Name" name="name" value={name} onChange={e => onChange(e)} />
                            </div>
                        </div>
                        <div className="input-div one">
                            <div className="i">
                                <i className="fas fa-at"></i>
                            </div>
                            <div className="div">
                                    <input type="email" className="input" placeholder="Email" name="email" value={email} onChange={e => onChange(e)} />
                            </div>
                        </div>
                        <div className="input-div pass">
                            <div className="i"> 
                                    <i className="fas fa-lock"></i>
                            </div>
                            <div className="div">
                                    <input type="password" className="input" placeholder="Password" name="password" value={password} onChange={e => onChange(e)} />
                            </div>    
                        </div>
                        <div className="input-div pass">
                            <div className="i"> 
                                    <i className="fas fa-lock"></i>
                            </div>
                            <div className="div">
                                    <input type="password" className="input" placeholder="Confirm Password" name="password2" value={password2} onChange={e => onChange(e)} />
                            </div>    
                        </div>
                        <input type="submit" className="btn mt-4" value="Register"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {setAlert, register})(Register);
