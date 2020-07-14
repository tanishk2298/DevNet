import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getGithubRepos} from '../../actions/profile'
import Spinner from '../layout/Spinner'


const ProfileGithub = ({username,getGithubRepos,repos}) => {
    useEffect(() => {
        getGithubRepos(username);
    }, [getGithubRepos(username)]);

    return (
        <div className="row">
            <div className="col-md-12 mt-3">
                <h4 className="name">&nbsp;<i className="fab fa-github"></i>&nbsp;GitHub Repos</h4>
            </div>
            {repos === null ? <Spinner/> :(
            repos.map(repo =>(
            <div className="row github-repos" key={repo._id}>
                <div className="col-md-12 mt-3">
                    <div className="card mb-3">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-8 text-left">
                                        <a href={repo.html_url} target="_blank"
                                        rel="noopener noreferrer"><h5 className="name pt-0">{repo.name}</h5></a>
                                        <p>Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.</p>
                                    </div>
                                    <div className="col-md-4 text-right">
                                        <div>
                                            <div className="row">
                                                <div className="col-lg-12  hide-sm">
                                                    <li className="badge badge-primary">Stars: 44</li>
                                                </div>
                                                <div className="col-lg-12 hide-sm">
                                                    <li className="badge badge-dark">Watchers: 21</li>
                                                </div>
                                                <div className="col-lg-12 hide-sm">
                                                    <li className="badge badge-light">Forks: 25</li>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div> 
                </div>
            </div>
            )))}
        </div>
    )
}

ProfileGithub.propTypes = {
    getGithubRepos: PropTypes.func.isRequired,
    repos : PropTypes.array.isRequired,
    username: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    repos: state.profile.repos
})

export default connect(mapStateToProps, {getGithubRepos})(ProfileGithub)
