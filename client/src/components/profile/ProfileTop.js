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
        <div class="profile-grid">
            <div class=" profile-top rounded">
                <img
                class="round-img my-1"
                src={avatar}
                alt="avatar"
                />
              <h1 class="name">{name}</h1>
              <p class>{status}{company && <span> at {company}</span>}</p>
              <p>{location && <span>{location}</span>}</p>
              <div class="icons my-1">
              <div class="row">
                {website && (
                      <div class="col-xs-1">
                        <a href={website} target="_blank" rel="noopener noreferrer">
                            <i class="fas fa-globe fa-2x"></i>
                          </a>
                      </div>
                )}
                {social && social.linkedin && (
                      <div class="col-xs-1">
                        <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-linkedin fa-2x"></i>
                          </a>
                      </div>
                )}
                {social && social.facebook &&(
                      <div class="col-xs-1">
                        <a href={social.facebook} target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-facebook fa-2x"></i>
                          </a>
                      </div>
                )}
                {social && social.instagram &&(
                      <div class="col-xs-1">
                        <a href={social.instagram} target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-instagram fa-2x"></i>
                        </a>
                      </div>
                )}
                {social && social.twitter &&(
                      <div class="col-xs-1">
                        <a href={social.twitter} target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-twitter fa-2x"></i>
                          </a>
                      </div>
                )}
                {social && social.youtube &&(
                      <div class="col-xs-1">
                        <a href={social.youtube} target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-youtube fa-2x"></i>
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
