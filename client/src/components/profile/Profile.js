import React,{Fragment, useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Spinner from '../layout/Spinner'
import {getProfileById} from '../../actions/profile'
import ProfileTop from './ProfileTop'
const Profile = ({
    getProfileById,
    profile:{profile,loading},
    auth,
    match
}) => { 
    useEffect(() => {
        getProfileById(match.params.id);
    }, [getProfileById, match.params.id])
    return (<Fragment>

                <div class="container-fluid">
                    <ProfileTop profile={profile}/> 
                </div>

            </Fragment>
    )
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
