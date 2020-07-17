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
            <div className="col-lg-4 col-md-6 col-sm-12 dash-buttons">
                <div className="card profile-card">
                    <Link to={`/profile/${_id}`} className="profile-name">
                        <img className="rounded-circle pf-img"
                            src={avatar}
                            alt="Profile"
                        />
                        <h5 className="text-primary mt-3">{name}</h5>
                    </Link>  
                    <div className="card-body">
                        <span ClassName="new"><p><i className="fas fa-briefcase text-info new"></i>&nbsp;&nbsp;{status}{company && <span> at {company}</span>}</p></span>
                        <span ClassName="new"><p><i className="fas fa-map-marker-alt text-danger new"></i>&nbsp;&nbsp;&nbsp;{location && <span>{location}</span>}</p></span>
                        <span ClassName="new"><p><i className="fas fa-code text-success new"></i>&nbsp;Skills</p></span>
                        <p className="new">
                            {skills.slice(0,5).map((skill, index) =>(
                            <span key={index} className="new">
                                {`| ${skill} `} 
                            </span>
                            ))} |
                        </p>
                    </div>
                    <Link to={`/profile/${_id}`}>
                        <button className="btn btn-default dash-edit view-profile" type="submit">Visit Profile</button>
                    </Link>
                </div>
            </div>
    )
}

ProfileItem.propTypes = {
    profile: PropTypes.object.isRequired
}

export default ProfileItem
