import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import useFirebase from '../../hooks/useFirebase';

const auth=getAuth(app)
const Home = () => {
    const [user]=useAuthState(auth);
    return (
        <div>
            <h3>Home</h3>
            <p>Current User is: {user? user.displayName: 'No body'}</p>
        </div>
    );
};

export default Home;