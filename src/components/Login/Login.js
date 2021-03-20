import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { userContext } from '../../App';
import {handleGoogleSignIn, handleSignOut, handleFbSignIn, createUserWithEmailAndPassword, signInWithEmailAndPassword, initializeLoginFramework, initalizefirebase } from './LoginManager';
import './Login.css'
function Login() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: ''
  });
  initalizefirebase();

  const [loggedInUser, setLoggedInUser ] = useContext(userContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
      handleGoogleSignIn()
      .then(res => {
        handleResponse(res, true);
      })
  }


  const signOut = () => {
      handleSignOut()
      .then(res => {
          handleResponse(res, false);
      })
  }

  const handleResponse = (res, redirect) =>{
    setUser(res);
    setLoggedInUser(res);
    if(redirect){
        history.replace(from);
    }
  }

  const handleBlur = (e) => {
    let isFieldValid = true;
    if(e.target.name === 'email'){
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if(e.target.name === 'password'){
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber =  /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if(e.target.name === 'name'){
      isFieldValid = e.target.value.length > 4;
    }
    if(isFieldValid){
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }
  const handleSubmit = (e) => {
    if(newUser && user.email && user.password){
      createUserWithEmailAndPassword(user.name, user.email, user.password)
      .then(res => {
        handleResponse(res, true);
      })
    }

    if(!newUser && user.email && user.password){
      signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        handleResponse(res, true);
      })
    }
    e.preventDefault();
  }



  return (
    <div className="container bg-style">
    {
      newUser ? <h2>Create An Account</h2> : <h2> Please Login </h2>
    }  
    <div className=" div-center  m-2 ">
        <div className=" form-style shadow p-3">
            
            <form onSubmit={handleSubmit} style={{ textAlign: 'center' }} >
                {newUser && <input name="name" type="text" onBlur={handleBlur} placeholder="Enter your name" />}
                <br />
                <input type="text" name="email" onBlur={handleBlur} placeholder="Enter your email" required />
                <br />
                <input type="password" name="password" onBlur={handleBlur} placeholder="Enter your password" required />
                <br />
                <input className="mt-2 btn-style" type="submit" value={newUser ? 'Sign up' : 'Sign In'} />
            </form>

            <div>
                <p>create an account <span><input type="checkbox" onChange={() => setNewUser(!newUser)} name="" id="" />
                    <label htmlFor="newUser">SignUp</label> <br />
                </span> </p>
            </div>
            <p>or</p>
            <hr />

            <button className='btn-style' onClick={handleGoogleSignIn} >Continue with Google</button>
        </div>

        <p style={{ color: "red" }}>{user.error}</p>
        {user.success && <p style={{ color: "green" }}>User {newUser ? 'Created' : 'Logged In'} Successfully</p>}
    </div>
</div>
   
  );
}

export default Login;



{/* <div style={{textAlign: 'center'}}>
{ user.isSignedIn ? <button onClick={signOut}>Sign Out</button> :
  <button onClick={googleSignIn}>Sign In</button>
}
<br/>
{
  user.isSignedIn && <div>
    <p>Welcome, {user.name}!</p>
    <p>Your email: {user.email}</p>
    <img src={user.photo} alt=""/>
  </div>
}

<h1>Our own Authentication</h1>
<input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id=""/>
<label htmlFor="newUser">New User Sign up</label>
<form onSubmit={handleSubmit}>
  {newUser && <input name="name" type="text" onBlur={handleBlur} placeholder="Your name"/>}
  <br/>
  <input type="text" name="email" onBlur={handleBlur} placeholder="Your Email address" required/>
  <br/>
  <input type="password" name="password" onBlur={handleBlur} placeholder="Your Password" required/>
  <br/>
  <input type="submit" value={newUser ? 'Sign up' : 'Sign in'}/>
</form>
<p style={{color: 'red'}}>{user.error}</p>
{ user.success && <p style={{color: 'green'}}>User { newUser ? 'created' : 'Logged In'} successfully</p>}
</div> */}