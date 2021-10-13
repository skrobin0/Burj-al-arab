
import React from 'react';
import useFireBase from '../Hooks/useFireBase';


import "./Login.css"

const Login = () => {

    const {logInWithGoogle, user}= useFireBase();

    return (
        <div className="log">
            <h1>this is {user.displayName}</h1>
            <input type="text"></input>
            <br/>
            <input className="my-2" type="text"></input>
            <br/>

        <button onClick={logInWithGoogle} className = "btn btn-danger mt-3">google sing in</button>
        </div>
    );
};

export default Login;