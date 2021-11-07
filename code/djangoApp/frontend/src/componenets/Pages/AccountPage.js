import React from "react";
import { useSelector, useDispatch } from "react-redux";
 // import './Home.css'
const AccountPage = (props) => {
    const role = useSelector((state) => state.user.role);
    const user = useSelector((state) => state.user);
    return ( 
        <div className="account-page" style={{marginTop: '100px', textAlign: 'center'}}>
            <h1> Account Details </h1>
            <h2> Name: {user.firstName} {user.lastName}</h2>
            <h2> Email: {user.email} </h2>
            <h2> Account Balance: ${user.account}</h2>
                    </div>
     );
}
 
export default AccountPage;