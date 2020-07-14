import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'

const ProfileExperience = ({experience:{company,title,location,to,from,description}}) => {
    return (
        <div>
            <h4>{company}</h4>
            <p class='lead'><Moment format="DD/MM/YYYY">{from}</Moment> - {!to ? 'Current' : <Moment format='DD/MM/YYYY'>{to}</Moment>}</p>
            <p><strong>Position: </strong><span>{title}</span></p>
            {description && <p>
            <strong>Description: </strong>{description}
            </p>}
        </div>
    )
}

ProfileExperience.propTypes = {
    experience:PropTypes.array.isRequired
}

export default ProfileExperience
