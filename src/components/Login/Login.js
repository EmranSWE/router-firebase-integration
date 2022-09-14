import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {signInWithGoogle}=useFirebase()
    return (
        <div>
            <h2>Please login</h2>
            <button onClick={signInWithGoogle}>Google Sign In</button>
            <form action="">
                <input type="email"  placeholder='Your email'/>
                <br></br>
                <input type="password" placeholder='Password' />
                <br></br>
                <input  type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;