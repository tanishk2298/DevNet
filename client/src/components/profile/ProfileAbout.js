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
        <div class="container-fluid skill-container">
            {bio && <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body" style>
                            <h3 class="name">{name.trim().split(' ')[0]}'s Bio</h3>
                            <p>{bio}</p> 
                        </div>
                    </div>
                </div>
            </div>
            }
            <div class="row">
                <div class="col-md-12 mt-3">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="name">Skill Set</h3>
                            <p class="skill-set">
                                {skills.map((skill, index) => (
                                    <Fragment key={index}>
                                    <span className="name"> | </span>{skill}
                                    </Fragment>
                                ))}
                                <span className="name"> | </span>
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
