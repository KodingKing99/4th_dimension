import React from 'react';

const Login = () => {
    return(
        <>
            <div className="LoginBox">
                 <div className="Email">
                     <label htmlFor="email-input">Email:</label>
                     <input type="email" id="email-input" />
                 </div>

                 <div className="Password">
                     <label htmlFor="password-input">Password:</label>
                     <input type="password" id="password-input" />
                </div>
            </div>
            <div className="LoginButtons">
                <button >Login</button>
            </div>
        </>
    )
}

export default Login;
