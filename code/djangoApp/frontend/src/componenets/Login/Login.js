import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/userSlice';
import { login, signup } from '../../services/services.js'
import './Login.css';

const Login = () => {

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userFirst, setUserFirst] = useState("");
    const [userLast, setUserLast] = useState("");
    const [signUpToggle, setSignUpToggle] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const dispatch = useDispatch();

    const handleLogin =  (e) => {
        const user = login(userEmail, userPassword).then(data => {
            if (data.error) {
                setError(data.error)
            } else {
                dispatch(setUser(data))
            }
        })
    }

    const handleSignup =  (e) => {
        const user = signup(userEmail, userFirst, userLast, userPassword).then(data => {
            if (data.error) {
                if(data.error.useremail) setError(data.error.useremail)
                else setError(data.error)
            } else {
                setSuccess(data.success)
                setSignUpToggle(false)
            }
        })
    }

    return (
        <div className="LoginPage">
            <div className="Title">
                Login
            </div>
            {error && <div>Error. {error}</div>}
            {success && <div>Success! {success}</div>}
            {!signUpToggle ?
                <div className="LoginBox">
                    <div className="Email">
                        <form>
                            <label htmlFor="email-input">Email:</label>
                            <input type="email" id="email-input" onInput={e => setUserEmail(e.target.value)} />
                        </form>
                    </div>

                    <div className="Password">
                        <form>
                            <label htmlFor="password-input">Password:</label>
                            <input type="password" id="password-input" onInput={e => setUserPassword(e.target.value)} />
                        </form>
                    </div>
                    <div className="LoginButtons">
                        <button onClick={() => {handleLogin()}}>Login</button>
                        <button onClick={() => { setSignUpToggle(true) }}>Sign Up</button>
                    </div>
                </div>
                :
                <div className="SignupBox">
                    <div className="SignUpForm">
                        <form>
                            <label htmlFor="email-input">*Email:</label>
                            <input type="email" id="email-input" onInput={e => setUserEmail(e.target.value)} /><br/> {/* Temporary Line breaks, remove once css is done*/}
                            <label htmlFor="first-name-input">*First Name:</label>
                            <input type="text" id="first-name-input" onInput={e => setUserFirst(e.target.value)} /><br/>
                            <label htmlFor="last-name-input">Last Name:</label>
                            <input type="text" id="last-name-input" onInput={e => setUserLast(e.target.value)} /><br/>
                            <label htmlFor="password-input">*Password:</label>
                            <input type="password" id="password-input" onInput={e => setUserPassword(e.target.value)} /><br/>
                        </form>
                        * Is Required
                    </div>
                    <div className="LoginButtons">
                        <button onClick={() => {handleSignup()}}>Create Account</button>
                        <button onClick={() => { setSignUpToggle(false) }}>Back</button>
                    </div>
                </div>
            }
        </div>

    )
}

export default Login;
