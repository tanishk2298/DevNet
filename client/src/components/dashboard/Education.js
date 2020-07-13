import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Moment from 'react-moment'
import {deleteEducation} from '../../actions/profile'

const Education = ({education, deleteEducation}) => {

    const educations = education.map(edu => (
        <tr key={edu._id}>
            <td className="mt-2">{edu.school}</td>
            <td className="hide-sm mt-2">{edu.degree}</td>
            <td className="hide-sm mt-2">
                <Moment format='DD/MM/YYYY'>{edu.from}</Moment> -{' '}
                {
                    edu.to===null ? ('Now') : (<Moment format='DD/MM/YYYY'>{edu.to}</Moment>)
                }
            </td>
            <td>
                <button class="btn btn-danger del" onClick={() => deleteEducation(edu._id)}>
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>
    ))

    return (
            <div class="dash-buttons mt-4">
            <h2 class="edit-heading create-profile"><i class="fas fa-graduation-cap text-primary"></i>&nbsp;Education</h2>
                <table class="table">
                    <thead>
                      <tr className="bg-light">
                        <th>Institute</th>
                        <th class="hide-sm">Degree</th>
                        <th class="hide-sm">Years</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>{educations}</tbody>
                </table>
            </div>
    )
}

Education.propTypes = {
    education: PropTypes.array.isRequired,
    deleteEducation: PropTypes.func.isRequired
}

export default connect(null, {deleteEducation})(Education)
