import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const ProfileItem = ({
    profile:{
        user: {_id,name,avatar},
        status,
        company,
        location,
        skills
    }
}) => {
    return (
            <div class="col-lg-4 col-md-6 col-sm-12 dash-buttons">
                <div class="card profile-card">
                    <a href="profile.html" class="profile-name">
                        <img class="rounded-circle"
                            src={avatar}
                            alt="Profile"
                        />
                        <h4 className="text-primary mt-3">{name}</h4>
                    </a>  
                    <div class="card-body">
                        <p><i class="fas fa-briefcase"></i>&nbsp;{status}{company && <span> at {company}</span>}</p>
                        <p><i class="fas fa-map-marker-alt"></i>&nbsp;{location && <span>{location}</span>}</p>
                        <h5><i class="fas fa-code"></i>&nbsp;Skills</h5>
                        <span>
                            {skills.slice(0,6).map((skill, index) =>(
                            <span key={index} className="mr-2">
                                {skill} 
                            </span>
                            ))}
                        </span>
                    </div>
                    <Link to={`/profile/${_id}`}>
                        <button class="btn btn-default dash-edit view-profile" type="submit">Visit Profile</button>
                    </Link>
                </div>
            </div>
    )
}

ProfileItem.propTypes = {
    profile: PropTypes.object.isRequired
}

export default ProfileItem
