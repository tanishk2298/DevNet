import React,{useEffect, Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Spinner from '../layout/Spinner'
import {getProfiles} from '../../actions/profile'
import ProfileItem from './ProfileItem'

const Profiles = ({getProfiles, profile:{profiles,loading}}) => {
    useEffect(() => {
        getProfiles();
    }, [getProfiles]);

    return (<Fragment>
        {
        loading ? <Spinner/> :
        <div className="container-fluid pfs">
            <div className="row dash posts-dash home profiles">
                <div className="col-md-12">
                    <h2 className="create-profile profiles-heading"><i className="fab fa-connectdevelop text-primary"></i>&nbsp;Developers</h2>
                    <p className="hide-sm profiles-heading new2">Connect with developers across the globe&nbsp;<i className="fas fa-globe-americas text-primary"></i></p>
                    <div className="col-lg-12">
                        <div className="row">
                            {profiles.length>0 ? (
                                profiles.map(profile => (
                                    <ProfileItem key={profile._id} profile={profile} />
                                ))
                            ) : <h4>No profiles found&nbsp;<i className="fas fa-exclamation-circle text-warning"></i></h4>}
                        </div>
                    </div>
                </div>
            </div>
        </div>   
        }
        </Fragment>
    )
}

Profiles.propTypes = {
    getProfiles:PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile:state.profile
})

export default connect(mapStateToProps,{getProfiles})(Profiles)  
