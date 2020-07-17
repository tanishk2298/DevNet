import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const ProfileAbout = ({
    profile: {
        bio,
        skills,
        user: {name}
    }
}) => {
    return (
        <div className="container-fluid skill-container">
            {bio && <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body profile-details">
                            <h3 className="name">{name.trim().split(' ')[0]}'s Bio</h3>
                            <p>{bio}</p> 
                        </div>
                    </div>
                </div>
            </div>
            }
            <div className="row">
                <div className="col-md-12 mt-3">
                    <div className="card">
                        <div className="card-body profile-details">
                            <h3 className="name">Skill Set</h3>
                            <p className="skill-set">
                                {skills.map((skill, index) => (
                                    <Fragment key={index}>
                                    <span className="name">|</span>{skill}
                                    </Fragment>
                                ))}
                                <span className="name hide-sm"> | </span>
                            </p> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
ProfileAbout.propTypes = {
    profile: PropTypes.object.isRequired
}

export default ProfileAbout
