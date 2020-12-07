import React from 'react'
import "./Login.css"
import { Button } from "@material-ui/core";
import {auth, provider} from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function Login() {

    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider).then((result) =>{ 
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
             }).catch((error) => alert(error.message));
    };

    return (
        <div className="login">
            <div className="login__logo">
                <img 
                    src="https://www.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-2019-circle-512.png"
                    alt=""
                />
                <img                                                                             
                    src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
                    alt=""
                />
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
