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
        <div class="container-fluid">
            <div class="row dash posts-dash home profiles">
                <div class="col-md-12">
                    <h2 className="create-profile profiles-heading"><i class="fab fa-connectdevelop text-primary"></i>&nbsp;Developers</h2>
                    <p className="hide-sm profiles-heading">Connect with developers across the globe&nbsp;<i class="fas fa-globe-americas text-primary"></i></p>
                    <div class="col-lg-12">
                        <div class="row">
                            {profiles.length>0 ? (
                                profiles.map(profile => (
                                    <ProfileItem key={profile._id} profile={profile} />
                                ))
                            ) : <h4>No profiles found&nbsp;<i class="fas fa-exclamation-circle text-warning"></i></h4>}
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
