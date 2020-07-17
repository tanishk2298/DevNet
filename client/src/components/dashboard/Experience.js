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
                <button className="btn btn-danger del" onClick={() => deleteExperience(exp._id)}>
                    <i className="fas fa-trash"></i>
                </button>
            </td>
        </tr>
    ))

    return (
            <div className="dash-buttons mt-5">
            <h2 className="edit-heading create-profile"><i className="fab fa-black-tie text-primary"></i>&nbsp;Experience</h2>
                <table className="table">
                    <thead>
                      <tr>
                        <th className="new">Company</th>
                        <th className="hide-sm new">Title</th>
                        <th className="hide-sm new">Years</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody className="new">{experiences}</tbody>
                </table>
            </div>
    )
}

Experience.propTypes = {
    experience: PropTypes.array.isRequired,
    deleteExperience: PropTypes.func.isRequired
}

export default connect(null, {deleteExperience})(Experience)
