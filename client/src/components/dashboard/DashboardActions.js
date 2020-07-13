import React from 'react'
import {Link} from 'react-router-dom'

export const DashboardActions = () => {
    return (
        <div className="dash-buttons">
            <div className="row">
                <div className="col-md-3">
                    <Link to="/edit-profile">
                        <button className="btn btn-default dash-edit" type="submit"><i className="fas fa-user-circle text-primary"></i>&nbsp;Edit Profile</button>
                    </Link>
                </div>
                <div className="col-md-3">
                    <Link to="/add-experience">
                        <button className="btn btn-default dash-edit" type="submit"><i class="fas fa-briefcase text-primary"></i>&nbsp;Add Experience</button>
                    </Link>
                </div>
                <div className="col-md-3">
                    <Link to="/add-education">
                        <button className="btn btn-default dash-edit" type="submit"><i className="fas fa-graduation-cap text-primary"></i>&nbsp;Add Education</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default DashboardActions