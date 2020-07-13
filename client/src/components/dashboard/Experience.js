import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Moment from 'react-moment'
import {deleteExperience} from '../../actions/profile'

const Experience = ({experience, deleteExperience}) => {

    const experiences = experience.map(exp => (
        <tr key={exp._id}>
            <td>{exp.company}</td>
            <td className="hide-sm">{exp.title}</td>
            <td className="hide-sm">
                <Moment format='DD/MM/YYYY'>{exp.from}</Moment> -{' '}
                {
                    exp.to===null ? ('Now') : (<Moment format='DD/MM/YYYY'>{exp.to}</Moment>)
                }
            </td>
            <td>
                <button class="btn btn-danger del" onClick={() => deleteExperience(exp._id)}>
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>
    ))

    return (
            <div class="dash-buttons mt-5">
            <h2 class="edit-heading create-profile"><i class="fab fa-black-tie text-primary"></i>&nbsp;Experience</h2>
                <table class="table">
                    <thead>
                      <tr>
                        <th>Company</th>
                        <th class="hide-sm">Title</th>
                        <th class="hide-sm">Years</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>{experiences}</tbody>
                </table>
            </div>
    )
}

Experience.propTypes = {
    experience: PropTypes.array.isRequired,
    deleteExperience: PropTypes.func.isRequired
}

export default connect(null, {deleteExperience})(Experience)
