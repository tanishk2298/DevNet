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
                <button className="btn btn-danger del" onClick={() => deleteEducation(edu._id)}>
                    <i className="fas fa-trash"></i>
                </button>
            </td>
        </tr>
    ))

    return (
            <div className="dash-buttons mt-4">
            <h2 className="edit-heading create-profile"><i className="fas fa-graduation-cap text-primary"></i>&nbsp;Education</h2>
                <table className="table">
                    <thead>
                      <tr className="bg-light">
                        <th className="new">Institute</th>
                        <th className="hide-sm new">Degree</th>
                        <th className="hide-sm new">Years</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody className="new">{educations}</tbody>
                </table>
            </div>
    )
}

Education.propTypes = {
    education: PropTypes.array.isRequired,
    deleteEducation: PropTypes.func.isRequired
}

export default connect(null, {deleteEducation})(Education)
