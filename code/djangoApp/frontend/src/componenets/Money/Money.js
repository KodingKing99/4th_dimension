import React from "react";
import { useSelector } from "react-redux";
import "./Money.css"

const Money = () => {
    const user = useSelector(state => state.user);
    console.log(user);
    return (
        <div>
            <div className="money-title">Total Money</div>
            <div className="money-total">$ {user.account}</div>
        </div>
    );
};

export default Money;