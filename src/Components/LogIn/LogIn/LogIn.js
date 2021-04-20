import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './Firebase.Config';
import loginPic from '../../../image/login.jpg';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';
const LogIn = () => {
 
  
     const [loggedInUser, setLoggedInUser]= useContext(UserContext);
     const history = useHistory();
     const location = useLocation();
     const { from } = location.state || { from: { pathname: "/" } };
     

      if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    
      }
 
      const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
          const { displayName, email } = result.user;
             const signedInUser = { name: displayName, email }
          console.log(signedInUser);
           setLoggedInUser(signedInUser);
           history.replace(from);      
        }).catch(function (error) {
          const errorMessage = error.message;
          console.log(errorMessage);
        });
      }
    
    

    return (
        <div className="container">
        <div style={{ height: "100vh" }} className="row align-items-center">
        <div className="col-md-6 shadow p-5">
          <div className="form-group">
            <label htmlFor="">User Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input type="password" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="" className="text-danger">Forgot your password?</label>
          </div>
          <div className="from-group mt-5">
            <button className="btn btn-brand" onClick={handleGoogleSignIn}>Google Sign in</button>
          </div>
        </div>
          <div className="col-md-6">
            <img style={{width:''}} className="img-fluid" src={loginPic} alt=""/>
          </div>
        </div>  
        </div>
    );
};

export default LogIn;