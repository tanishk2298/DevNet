import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addEducation} from '../../actions/profile'
import { Link, withRouter} from 'react-router-dom'

const AddEducation = ({addEducation, history}) => {
    
    const [formData, setFormData] = useState({
        school: '',
        degree: '',
        fieldofstudy: '',
        from: '',
        to: '',
        current: false,
        description: ''
    })

    const [toDateDisabled, toggleDisabled] = useState(false);
    const {school,degree,fieldofstudy,from,to,current,description} = formData;
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})

    return (
    <div className="container mt-2">
        <form className="profile" onSubmit={e => {
          e.preventDefault();
          addEducation(formData, history);
        }}>
            <h2 className="create-profile">
            <i className="fas fa-graduation-cap text-primary"></i>&nbsp;Add your education
            </h2>
            <p className="text-left text-muted">
                Add any college or institution that you've attended
              </p>
              <small className="form-text">* = required</small>
              <div className="form-group">
                <input className="form-control" type="text" placeholder="* College / Institution" name="school" value={school} onChange={e => onChange(e)} required />
              </div>
              <div className="form-group">
                <input className="form-control" type="text" placeholder="* Degree / Certificate" name="degree" value={degree} onChange={e => onChange(e)} required />
              </div>
              <div className="form-group">
                <input className="form-control" type="text" placeholder="Field of study" name="fieldofstudy" value={fieldofstudy} onChange={e => onChange(e)} />
              </div>
              <div className="form-group text-left text-muted">
                <label>From</label>
                <input className="form-control" type="date" name="from" value={from} onChange={e => onChange(e)} />
              </div>
              <div className="form-check text-left text-muted">
                  <input type="checkbox" className="form-check-input" name="current" checked={current} value={current} 
                  onChange={e => {
                    setFormData({...formData, current: !current});
                    toggleDisabled(!toDateDisabled);
                  }} />{' '}Current Institue
              </div>
              <div className="form-group text-left text-muted">
                <label>To</label>
                <input className="form-control" type="date" name="to" value={to} onChange={e => onChange(e)} disabled={toDateDisabled ? 'disabled' : ''} />
              </div>
              <div className="form-group">
                <textarea className="form-control" name="description" cols="30" rows="3" placeholder="Description" value={description} onChange={e => onChange(e)} ></textarea>
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

AddEducation.propTypes = {
 addEducation: PropTypes.func.isRequired
}

export default connect(null, {addEducation})(withRouter(AddEducation))
