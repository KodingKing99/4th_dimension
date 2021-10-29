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
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch();

    const handleLogin = (e) => {
        if (userEmail === "" || userPassword === "") {
            setError("Please fill out all required fields")
            return
        }
        setLoading(true)
        const user = login(userEmail, userPassword).then(data => {
            if (data.error) {
                setError(data.error)
            } else {
                dispatch(setUser(data))
            }
        })
        setLoading(false)
    }

    const handleToggle = () => {
        setSignUpToggle(!signUpToggle)
        setError("")
    }

    const handleSignup = (e) => {
        if (userFirst === "" || userEmail === "" || userPassword === "") {
            setError("Please fill out all required fields")
            return
        }
        setLoading(true)

        const user = signup(userEmail, userFirst, userLast, userPassword).then(data => {
            if (data.error) {
                if (data.error.useremail) setError(data.error.useremail)
                else setError(data.error)
            } else {
                setSuccess(data.success)
                handleToggle()
            }
        })
        setLoading(false)

    }

    return (
        <div className="LoginPage">
            {loading ? <div className="loading">Loading...</div> :
                <>
                    <div className="Title">
                        Login
                    </div>
                    {error && <div className="input-message">Error: {error}</div>}
                    {success && <div className="input-message">Success! {success}</div>}
                    {!signUpToggle ?
                        <div className="LoginBox">
                            <div className="Email">
                                <form>
                                    <label htmlFor="email-input"><span className="required">*</span>Email:</label>
                                    <input type="email" id="email-input" onInput={e => setUserEmail(e.target.value)} />
                                </form>
                            </div>

                            <div className="Password">
                                <form>
                                    <label htmlFor="password-input"><span className="required">*</span>Password:</label>
                                    <input type="password" id="password-input" onInput={e => setUserPassword(e.target.value)} />
                                </form>
                            </div>
                            <div className="LoginButtons">
                                <button onClick={() => { handleLogin() }}>Login</button>
                                <button onClick={() => { handleToggle() }}>Sign Up</button>
                            </div>
                        </div>
                        :
                        <div className="SignupBox">
                            <div className="SignUpForm">
                                <form>
                                    <label htmlFor="email-input"><span className="required">*</span>Email:</label>
                                    <input type="email" id="email-input" onInput={e => setUserEmail(e.target.value)} />
                                    <label htmlFor="first-name-input"><span className="required">*</span>First Name:</label>
                                    <input type="text" id="first-name-input" onInput={e => setUserFirst(e.target.value)} />
                                    <label htmlFor="last-name-input">Last Name:</label>
                                    <input type="text" id="last-name-input" onInput={e => setUserLast(e.target.value)} />
                                    <label htmlFor="password-input"><span className="required">*</span>Password:</label>
                                    <input type="password" id="password-input" onInput={e => setUserPassword(e.target.value)} />
                                </form>
                            </div>
                            <div className="LoginButtons">
                                <button onClick={() => { handleSignup() }}>Create Account</button>
                                <button onClick={() => { handleToggle() }}>Back</button>
                            </div>
                        </div>
                    }
                </>
            }
        </div>
    )
}

export default Login;
