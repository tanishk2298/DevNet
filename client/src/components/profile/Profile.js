import React,{Fragment, useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Spinner from '../layout/Spinner'
import {getProfileById} from '../../actions/profile'
import ProfileTop from './ProfileTop'
import ProfileAbout from './ProfileAbout'
import ProfileExperience from './ProfileExperience'
import ProfileEducation from './ProfileEducation'
import ProfileGithub from './ProfileGithub'
const Profile = ({
    getProfileById,
    profile:{profile,loading},
    auth,
    match
}) => { 
    useEffect(() => {
        getProfileById(match.params.id);
    }, [getProfileById, match.params.id])
    return profile ? (
        <Fragment>
          <div classNameName="container-fluid">
            <ProfileTop profile={profile} />
            <ProfileAbout profile={profile} />
            <div className="container-fluid skill-container">
                <div className="row ">
                  <div className="col-md-6 mt-3">
                      <div className="card">
                          <div className="card-body exp-edu p-4">
                            <h4 className="name"><i className="fas fa-chart-line"></i>&nbsp;Experience</h4>
                            {profile.experience.length > 0 ? (<Fragment>
                              {profile.experience.map(experience => (
                                <ProfileExperience key={experience._id} experience={experience}/>
                              ))}
                            </Fragment>) : (<h4 classNameName="lead">No experience</h4>)}
                          </div>
                      </div>
                  </div>  
                  <div className="col-md-6 mt-3">
                      <div className="card">
                          <div className="card-body exp-edu p-4">
                          <h4 className="name"><i className="fas fa-graduation-cap"></i>&nbsp;Education</h4>
                            {profile.education.length > 0 ? (<Fragment>
                              {profile.education.map(education => (
                                <ProfileEducation key={education._id} education={education}/>
                              ))}
                            </Fragment>) : (<h4 classNameName="lead">No education</h4>)}
                          </div>
                      </div>
                  </div>  
                </div>
                {profile.githubusername && (<ProfileGithub username={profile.githubusername}/>)}      
            </div>
          </div>
        </Fragment>
      ) : <Spinner/>;
}

Profile.propTypes = {
    getProfileById : PropTypes.func.isRequired,
    profile : PropTypes.object.isRequired,
    auth : PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
})

export default connect(mapStateToProps, {getProfileById})(Profile);
