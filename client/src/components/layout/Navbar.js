import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {logout} from '../../actions/auth'

export const Navbar = ({auth: {isAuthenticated, loading}, logout}) => {

	const authLinks = (
		<Fragment>
		<nav className="navbar navbar-expand-lg bg-light fixed-top nav-profile">
			<Link to="/" className="navbar-brand nav-index text-primary"><i className="fas fa-code"></i>&nbsp;DevNet<i></i></Link>
			<button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
			<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<Link className="nav-link text-primary" to="/posts"><p><i className="fas fa-home"></i>{' '}Home</p></Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link text-primary" to="/profiles"><p><i className="fas fa-user-plus"></i>{' '}Add Connections</p></Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link text-primary" to="/dashboard"><p>Dashboard</p></Link>
					</li>
					<li className="nav-item">
						<a onClick={logout} className="nav-link text-primary" href="#!"><p>Logout{' '}<i className="fas fa-sign-out-alt"></i></p></a>
					</li>
				</ul>
			</div>
		</nav>
		</Fragment>
	)

	const guestLinks =(
		<Fragment>
			<nav className="navbar navbar-expand-lg navbar-dark nav-fonts">
			<Link to="/" className="navbar-brand nav-index mt-1"><i className="fas fa-code"></i>&nbsp;DevNet<i><p>a developers' social network</p></i></Link>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
			<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
			<ul className="navbar-nav ml-auto">
				<li className="nav-item">
					<Link className="nav-link" to="/"><p>Log In</p></Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/register"><p>Sign Up</p></Link>
				</li>
			</ul>
			</div>
		</nav>
		</Fragment>
	)
	
    return (
	<div className="container-fluid">

		{ !loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)}

	</div>
    )
}

Navbar.protoTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
	auth: state.auth
})

export default connect(mapStateToProps, {logout})(Navbar);