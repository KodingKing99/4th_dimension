import React, { useState } from 'react';
import { store } from '../../redux/store'
import { login, signup } from '../../services/services.js'
// import './Login.css';

const Login = () => {

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userFirst, setUserFirst] = useState("");
    const [userLast, setUserLast] = useState("");
    const [signUpToggle, setSignUpToggle] = useState(false)
    const [fetchReturn, setFetchReturn] = useState("")
    login("Jim@mail.com", "Jim")
    //login(userEmail, userPassword)
    return (
        <div className="LoginPage">
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
                        <button onClick={() => {login(userEmail, userPassword)}}>Login</button>
                        <button onClick={() =>  {login("Jim@mail.com", "Jim")}}>Login</button>
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
                        <button onClick={() => { 
                            {console.log("here")}
                            setFetchReturn(signup(userEmail, userFirst, userLast, userPassword));
                            setSignUpToggle(false)
                            }}>Create Account</button>
                        <button onClick={() => { setSignUpToggle(false) }}>Back</button>
                    </div>
                </div>
            }

        </div>

    )
}

export default Login;
