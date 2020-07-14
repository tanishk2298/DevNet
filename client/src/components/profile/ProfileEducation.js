import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'

const ProfileEducation = ({education:{school,degree,fieldofstudy,to,from,description}}) => {
    return (
        <div>
            <h4>{school}</h4>
            <p className='lead'><Moment format="DD/MM/YYYY">{from}</Moment> - {!to ? 'Current' : <Moment format='DD/MM/YYYY'>{to}</Moment>}</p>
            <p><strong>Degree: </strong><span>{degree}</span></p>
            <p><strong>Field of study: </strong><span>{fieldofstudy}</span></p>
            {description && <p>
            <strong>Description: </strong>{description}
            </p>}
        </div>
    )
}

ProfileEducation.propTypes = {
    education:PropTypes.object.isRequired
}

export default ProfileEducation
