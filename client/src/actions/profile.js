import axios from 'axios'
import {setAlert} from './alert'
import{
    GET_PROFILE,
    PROFILE_ERROR,
    UPDATE_PROFILE,
    CLEAR_PROFILE,
    ACCOUNT_DELETED,
    GET_PROFILES,
    GET_REPOS
} from './types'

export const getCurrentProfile = () => async dispatch => {
    try {
        const res = await axios.get('/api/profile/me');
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {msg:err.response.statusText, status: err.response.status}
        })
    }
}

// GET ALL PROFILES

export const getProfiles = () => async dispatch => {
    dispatch({type: CLEAR_PROFILE});
    try {
        const res = await axios.get('/api/profile');
        dispatch({
            type: GET_PROFILES,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {msg:err.response.statusText, status: err.response.status}
        })
    }
}

// GET PROFILE BY ID

export const getProfileById = userId => async dispatch => { 
    try {
        const res = await axios.get(`/api/profile/user/${userId}`);
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {msg:err.response.statusText, status: err.response.status}
        })
    }
}

// GET GITHUB REPOS

export const getGithubRepos = username => async dispatch => {
    try {
        const res = await axios.get(`/api/profile/github/${username}`);
        dispatch({
            type: GET_REPOS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {msg:err.response.statusText, status: err.response.status}
        })
    }
}

export const createProfile = ( formData, history, edit=false) => async dispatch => {
    try{
        const config = {
            headers: {
                'Content-Type' : 'application/json'
            }
        }

        const res = await axios.post('/api/profile', formData, config);
        
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });

        dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success'));

        if(!edit){
            history.push('/dashboard')
        }
    }
    catch(err){
        const errors = err.response.data.errors;

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: PROFILE_ERROR,
            payload: {msg:err.response.statusText, status: err.response.status}
        })       
    }
}

// ADD EXPERIENCE

export const addExperience = (formData, history) => async dispatch => {
    try{
        const config = {
            headers: {
                'Content-Type' : 'application/json'
            }
        }

        const res = await axios.put('/api/profile/experience', formData, config);
        
        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        });

        dispatch(setAlert('Experience Added', 'success'));

        history.push('/dashboard')

    }
    catch(err){
        const errors = err.response.data.errors;

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: PROFILE_ERROR,
            payload: {msg:err.response.statusText, status: err.response.status}
        })       
    }  
}

// ADD EDUCATIOn

export const addEducation = (formData, history) => async dispatch => {
    try{
        const config = {
            headers: {
                'Content-Type' : 'application/json'
            }
        }

        const res = await axios.put('/api/profile/education', formData, config);
        
        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        });

        dispatch(setAlert('Education Added', 'success'));

        history.push('/dashboard')

    }
    catch(err){
        const errors = err.response.data.errors;

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: PROFILE_ERROR,
            payload: {msg:err.response.statusText, status: err.response.status}
        })       
    }  
}

// DELETE EXPERIENCE

export const deleteExperience = id => async dispatch => {
    try{
        const res  = await axios.delete(`/api/profile/experience/${id}`)
        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        });

        dispatch(setAlert('Experience Removed', 'success'));        
    }
    catch(err){
        dispatch({
            type: PROFILE_ERROR,
            payload: {msg:err.response.statusText, status: err.response.status}
        }) 
    }
}

// DELETE EDUCATION

export const deleteEducation = id => async dispatch => {
    try{
        const res  = await axios.delete(`/api/profile/education/${id}`)
        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        });

        dispatch(setAlert('Education Removed', 'success'));        
    }
    catch(err){
        dispatch({
            type: PROFILE_ERROR,
            payload: {msg:err.response.statusText, status: err.response.status}
        }) 
    }
}

//DELETE ACCOUNT

export const deleteAccount = () => async dispatch => {
    if(window.confirm('ARE YOU SURE? THIS CANNOT BE UNDONE!')){
        try{
            await axios.delete(`/api/profile`)
            dispatch({
                type: CLEAR_PROFILE
            });
            dispatch({
                type: ACCOUNT_DELETED
            });

            dispatch(setAlert('Account Removed', 'warning'));        
        }
        catch(err){
            dispatch({
                type: PROFILE_ERROR,
                payload: {msg:err.response.statusText, status: err.response.status}
            }) 
        }
    }
}