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
                src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=400"
                alt=""
              />
              <h1 class="name">{name}}</h1>
              <p class="lead">Developer at Microsoft</p>
              <p>Seattle, WA</p>
              <div class="icons my-1">
                  <div class="row">
                      <div class="col-xs-1">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <i class="fas fa-globe fa-2x"></i>
                          </a>
                      </div>
                      <div class="col-xs-1">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-twitter fa-2x"></i>
                          </a>
                      </div>
                      <div class="col-xs-1">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-facebook fa-2x"></i>
                          </a>
                      </div>
                      <div class="col-xs-1">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-linkedin fa-2x"></i>
                          </a>
                      </div>
                      <div class="col-xs-1">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-youtube fa-2x"></i>
                          </a>
                      </div>
                      <div class="col-xs-1">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-instagram fa-2x"></i>
                        </a>
                      </div>
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
