import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getGithubRepos} from '../../actions/profile'
import Spinner from '../layout/Spinner'


const ProfileGithub = ({username,getGithubRepos,repos}) => {
    useEffect(() => {
        getGithubRepos(username);
    }, [getGithubRepos]);

    return (
        <div className="row">
            <div className="col-md-12 mt-4">
                <h4 className="name text-left">&nbsp;<i className="fab fa-github"></i>&nbsp;GitHub Repos</h4>
            </div>
            {repos === null ? <Spinner/> :(
            repos.map(repo =>(
            <div className="row github-repos" key={repo.id}>
                <div className="col-md-12 mt-3">
                    <div className="card mb-3  repos">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-8 text-left">
                                        <a href={repo.html_url} target="_blank"
                                        rel="noopener noreferrer"><h5 className="name pt-0  text-left">{repo.name}</h5></a>
                                        <p>{repo.description}</p>
                                    </div>
                                    <div className="col-md-4 text-right">
                                        <div>
                                            <div className="row">
                                                <div className="col-lg-12  hide-sm">
                                                    <li className="badge badge-primary">Stars: {repo.stargazers_count}</li>
                                                </div>
                                                <div className="col-lg-12 hide-sm">
                                                    <li className="badge badge-dark">Watchers: {repo.watchers_count}</li>
                                                </div>
                                                <div className="col-lg-12 hide-sm">
                                                    <li className="badge badge-light">Forks: {repo.forks_count}</li>
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
