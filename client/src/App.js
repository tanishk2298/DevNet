import React, {Fragment, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from "./components/layout/Navbar";
import NotFound from "./components/layout/NotFound";
import Landing from "./components/layout/Landing"
import Register from "./components/auth/Register"
import Alert from "./components/layout/alert"
import Dashboard from "./components/dashboard/Dashboard"
import CreateProfile from "./components/profile-forms/CreateProfile"
import EditProfile from "./components/profile-forms/EditProfile"
import AddExperience from "./components/profile-forms/AddExperience"
import AddEducation from "./components/profile-forms/AddEducation"
import Profiles from "./components/profiles/Profiles"
import Profile from "./components/profile/Profile"
import PrivateRoute from "./components/routing/PrivateRoute"
import Posts from "./components/posts/Post"
import Post from "./components/post/Post"
//Redux
import {Provider} from 'react-redux'
import store from "./store"
import {loadUser} from './actions/auth'
import setAuthToken from './utils/setAuthToken';

if(localStorage.token){
  setAuthToken(localStorage.token)
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  
  return(
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar/>
          <Alert/>
          <Switch>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/register" component={Register}/>
            <PrivateRoute exact path="/profile/:id" component={Profile}/>
            <PrivateRoute exact path="/profiles" component={Profiles}/>
            <PrivateRoute exact path="/dashboard" component={Dashboard}/>
            <PrivateRoute exact path="/create-profile" component={CreateProfile}/>
            <PrivateRoute exact path="/edit-profile" component={EditProfile}/>
            <PrivateRoute exact path="/add-experience" component={AddExperience}/>
            <PrivateRoute exact path="/add-education" component={AddEducation}/>
            <PrivateRoute exact path="/posts" component={Posts}/>
            <PrivateRoute exact path="/posts/:id" component={Post}/>
            <Route component={NotFound}/>
          </Switch>
      </Fragment>
    </Router>
  </Provider>
)}
export default App;
