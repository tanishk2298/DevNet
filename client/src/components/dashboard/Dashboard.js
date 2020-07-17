import React, {useEffect, Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getCurrentProfile, deleteAccount} from '../../actions/profile'
import Spinner from '../layout/Spinner'
import { Link } from 'react-router-dom';
import DashboardActions from './DashboardActions'
import Experience from './Experience'
import Education from './Education'


const Dashboard = ({getCurrentProfile, deleteAccount, auth:{user}, profile:{profile, loading}}) => {
    useEffect(() => {
        getCurrentProfile()
    }, [getCurrentProfile]);
    return loading && profile === null ? (<Spinner/>) : (
        <div className="container">
            <div className = "dash">
                <h3 className="create-profile">
                    <i className="fas fa-cog text-primary"></i> &nbsp;<span className='text-primary'>{user && user.name.trim().split(' ')[0]}'s</span> dashboard
                </h3>     
        {profile !== null ? (
            <Fragment>
                <DashboardActions/>
                <Experience experience={profile.experience}/>    
                <Education education={profile.education}/> 
                <div>
                    <div className="row">
                        <div className="col-lg-3">
                            <button className="btn btn-danger del delacc mt-3 " onClick={() => deleteAccount()}>
                                <i className="fas fa-user-minus"></i>
                                    &nbsp;Delete Account
                            </button>
                        </div>
                    </div>
                </div>   
            </Fragment>
        ) : (
            <Fragment>
                <p className="new">Hey <span className="text-primary">{user && user.name}!</span> let's create your profile and connect with developers across the globe.</p>
                <div className="dash-buttons">
                    <div className="row">
                        <div className="col-md-3">
                            <Link to="/create-profile">
                                <button className="btn btn-default dash-edit" type="submit"><i className="fas fa-user-circle text-primary"></i>&nbsp;Create Profile</button>
                            </Link>
                        </div>
                        <div className="col-md-3">
                            <Link to="/add-experience">
                                <button className="btn btn-default dash-edit" type="submit"><i className="fas fa-briefcase text-primary"></i>&nbsp;Add Experience</button>
                            </Link>
                        </div>
                        <div className="col-md-3">
                            <Link to="/add-education">
                                <button className="btn btn-default dash-edit" type="submit"><i className="fas fa-graduation-cap text-primary"></i>&nbsp;Add Education</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Fragment>
        ) }
            </div>
        </div>
    )
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    deleteAccount: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
})

export default connect(mapStateToProps, {getCurrentProfile,deleteAccount})(Dashboard)
