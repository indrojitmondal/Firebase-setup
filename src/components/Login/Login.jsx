import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut, fetchSignInMethodsForEmail } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../../Firebase/firebase.init';

const Login = () => {
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result);
                setUser(result.user);
            })
            .catch( error =>{
                console.log('Error', error);
            })
            
    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth, gitHubProvider)
            .then(result => {
                console.log(result);
                setUser(result.user);
            })
            .catch( error =>{
                console.log('Error', error);
            })
           
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser(null);
            })
            .catch((error) => {
                console.log("Error signing out:", error);
            });
    }

    return (
        <div>
            {user ?
                <button onClick={handleSignOut}>Sign Out</button> :
                <>
                    <button onClick={handleGoogleSignIn}>Login with Google</button>
                    <button onClick={handleGithubSignIn}>Login with GitHub</button>
                </>
            }
            {user &&
                <div>
                    <h4>Name: {user.displayName}</h4>
                    <p>Email: {user.email}</p>
                    <img src={user.photoURL} alt="User profile" />
                </div>
            }
        </div>
    );
};

export default Login;
