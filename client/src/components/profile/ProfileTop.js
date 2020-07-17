import React from 'react'
import PropTypes from 'prop-types'

const ProfileTop = ({ 
  profile: {
    status,
    company,
    location,
    website,
    social,
    user: { name, avatar }
  }
}) => {
    return (
        <div className="profile-grid">
            <div className=" profile-top rounded">
                <img
                className="round-img my-1"
                src={avatar}
                alt="avatar"
                />
              <h1 className="name">{name}</h1>
              <p>{status}{company && <span> at {company}</span>}</p>
              <p>{location && <span>{location}</span>}</p>
              <div className="icons my-1">
              <div className="row">
                {website && (
                      <div className="col-xs-1">
                        <a href={website} target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-globe-americas fa-2x"></i>
                          </a>
                      </div>
                )}
                {social && social.youtube &&(
                      <div className="col-xs-1">
                        <a href={social.youtube} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-hackerrank fa-2x"></i>
                          </a>
                      </div>
                )}  
                {social && social.linkedin && (
                      <div className="col-xs-1">
                        <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin fa-2x"></i>
                          </a>
                      </div>
                )}
                {social && social.facebook &&(
                      <div className="col-xs-1">
                        <a href={social.facebook} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook fa-2x"></i>
                          </a>
                      </div>
                )}
                {social && social.instagram &&(
                      <div className="col-xs-1">
                        <a href={social.instagram} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram fa-2x"></i>
                        </a>
                      </div>
                )}
                {social && social.twitter &&(
                      <div className="col-xs-1">
                        <a href={social.twitter} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter fa-2x"></i>
                          </a>
                      </div>
                )}
  
                </div> 
            </div>
        </div>
    </div>
    )
}

ProfileTop.propTypes = {
    profile: PropTypes.object.isRequired
}

export default ProfileTop
