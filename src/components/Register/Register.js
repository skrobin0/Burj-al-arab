import React from 'react';
import useAuth from '../Hooks/useAuth';
import "./Register.css"

const Register = () => {
    const user =useAuth();
    console.log(user);
    return (
        <div className="reg">
            <h1>this is reg</h1>
        </div>
    );
};

export default Register;