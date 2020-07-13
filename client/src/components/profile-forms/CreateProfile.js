import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createProfile} from '../../actions/profile'
import {Link, withRouter} from 'react-router-dom'

const CreateProfile = ({createProfile , history}) => {

    const [formData, setFormData] = useState({
        company: '',
        website: '',
        location: '',
        status: '',
        skills: '',
        githubusername: '',
        bio: '',
        twitter: '',
        facebook: '',
        linkedin: '',
        youtube: '',
        instagram: ''
    });

    const {
        company,
        website,
        location,
        status,
        skills,
        githubusername,
        bio,
        twitter,
        facebook,
        linkedin,
        youtube,
        instagram
      } = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        createProfile(formData, history)
    }

    return (
    <div className="container mt-2">
        <form className="profile" onSubmit= {e => onSubmit(e)}>
            <h2 className="create-profile">
            <i class="fas fa-user-circle text-primary"></i>&nbsp;Create Profile
              </h2>
              <small className="form-text">* = required</small>
            <div className="form-row">
              <div className="form-group col-md-6">
                <input type="text" className="form-control"placeholder="Company" name='company' value={company} onChange={e => onChange(e)}/>
                <small className="form-text">Give us an idea of where you are at in your career</small>
              </div>
              <div className="form-group col-md-6">
                <select className="form-control" name='status' value={status} onChange={e => onChange(e)}>
                    <option value="0">* Select Professional Status</option>
                    <option value="Developer">Developer</option>
                    <option value="SDE">SDE</option>
                    <option value="Software Engineer">Software Engineer</option>
                    <option value="Programmer">Programmer</option>
                    <option value="Analyst">Analyst</option>
                    <option value="Student">Student</option>
                    <option value="Instructor">Instructor</option>
                    <option value="Intern">Intern</option>
                    <option value="Other">Other</option>
                  </select>
                  <small className="form-text">Could be your own company or one you work for</small>
              </div>
            </div>
            <div className="form-group">
              <input type="text" className="form-control"placeholder="Website" name='website' value={website} onChange={e => onChange(e)}/>
              <small className="form-text">Could be your own or a company website</small>
            </div>
            <div className="form-group">
              <input type="text" className="form-control"placeholder="Location" name='location' value={location} onChange={e => onChange(e)}/>
              <small className="form-text">City & state suggested (eg. London, UK)</small>
            </div>
            <div className="form-group">
                <input type="text" className="form-control"placeholder="*Skills" name='skills' value={skills} onChange={e => onChange(e)}/>
                <small className="form-text">Please use comma separated values (eg. JavaScript, ReactJS, SQL, Machine learning)</small>
            </div>
            <div className="form-group">
                <input type="text" className="form-control"placeholder="Github username" name='githubusername' value={githubusername} onChange={e => onChange(e)}/>
                <small className="form-text">Your latest github repositories will be displayed on your profile</small>
            </div>
            <div className="form-group">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" placeholder="A short bio of yourself..." name='bio' value={bio} onChange={e => onChange(e)}></textarea>
            </div>
            <div className="form-group social-input">
                <i className="fab fa-twitter fa-2x"></i>
                <input type="text" className="form-control soc" placeholder="Twitter URL" name="twitter" value={twitter} onChange={e => onChange(e)}/>
            </div>
      
            <div className="form-group social-input">
                <i className="fab fa-facebook fa-2x"></i>
                <input type="text" className="form-control" placeholder="Facebook URL" name="facebook" value={facebook} onChange={e => onChange(e)}/>
            </div>
      
            <div className="form-group social-input">
                <i className="fab fa-youtube fa-2x"></i>
                <input type="text" className="form-control" placeholder="YouTube URL" name="youtube" value={youtube} onChange={e => onChange(e)}/>
            </div>
      
            <div className="form-group social-input">
                <i className="fab fa-linkedin fa-2x"></i>
                <input type="text" className="form-control" placeholder="Linkedin URL" name="linkedin" value={linkedin} onChange={e => onChange(e)}/>
            </div>
      
            <div className="form-group social-input">
                <i className="fab fa-instagram fa-2x"></i>
                <input type="text" className="form-control" placeholder="Instagram URL" name="instagram" value={instagram} onChange={e => onChange(e)}/>
            </div>
            <div className="row dash-buttons">
                <div className="col-sm-3">
                    <button type="submit" className="btn btn-primary dash-edit1">Submit</button>
                </div>
                <div className="col-sm-3">
                    <Link to="/dashboard">
                        <button className="btn btn-default dash-edit" type="submit">Go Back</button>
                    </Link>
                </div>
            </div>
        </form>
    </div>
    )
}

CreateProfile.propTypes = {
    CreateProfile: PropTypes.func.isRequired
}

export default connect(null, {createProfile})(withRouter(CreateProfile));
