import React, { useState } from 'react';
import {store} from '../../redux/store'
import {login, signup} from '../../api/APIRoutes'
// import './Login.css';

const Login = () => {

    const [userEmail, setUserEmail] = useState("a");
    const [userPassword, setUserPassword] = useState("");
    const [returnVal, setReturnVal] = useState({});
    console.log(userEmail)
    // api call to login
    
    return(
        <div className="LoginPage">
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
            </div>
            <div className="LoginButtons">
                <button onClick={()=>{setReturnVal(login(userEmail, userPassword))}}>Login</button>
                <button onClick={()=>{signup()}}>Sign Up</button>
            </div>
            {userEmail && <div>{userEmail}</div>}
            {userPassword && <div>{userPassword}</div>}
            {returnVal && <div>{JSON.stringify(returnVal)}</div>}
            
        </div>
        
    )
}

export default Login;
