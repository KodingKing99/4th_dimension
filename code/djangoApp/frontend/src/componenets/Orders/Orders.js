import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllActiveTransactions } from "../../services/services";
import './Orders.css'


const Orders = () => {
    const role = useSelector((state) => state.user.role);
    const [transactions, setTransactions] = useState([]);


    const updateTransactions = async () => {
        const response = await getAllActiveTransactions();
        setTransactions(response);
    };
    // Only call when component mounts
    useEffect(() => {
        updateTransactions();
    }, []);

    const handleCompleteClick = () => {
        updateTransactions();
        // Complete transaction
    }
    const handleDeleteClick = () => {
        updateTransactions();
        // Delete transaction
    }
    console.log(transactions);
    return (
        <div className="orders">
            <h1>Orders</h1>
        {(role === "drinkMiester") &&
                <div className="drink-miester-view">
                    {transactions.map((item) => {
                        return (
                            <div className="transaction-container" key={item.transactionid}>
                                <div className="item-name">{item.transactionbuyer}</div>
                                <div className="item-price">{item.transactiondrinkmeister}</div>
                                <div className="item-quantity">{item.transactiondate}</div>
                                <div className="item-quantity">${item.transactionprice}</div>
                                <div className="item-quantity">{item.transactionactiveflag}</div>
                                <button className="complete-button" onClick={() => { handleCompleteClick(item.transactionid) }}>Complete</button>
                                <button className="delete-button" onClick={() => { handleDeleteClick(item.transactionid) }}>Delete</button>
                            </div>
                        )
                    })}
                    {/* Get all current drinks and display them */}
                    {/* Button to fulfill and delete */}
                </div>
            }
        </div>
    )
} 

export default Orders;