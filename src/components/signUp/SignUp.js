import React from 'react';

const SignUp = () => {
    return (
        <div>
             <h2>Please Register Now</h2>
            <form action="">
                <input type="text" name="" placeholder='Your name' />
                <br></br>
                <input type="email"  placeholder='Your email'/>
                <br></br>
                <input type="password" placeholder='Password' />
                <br></br>
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default SignUp;