import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllActiveTransactions, completeTransaction, deleteTrancaction } from "../../services/services";
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

    const handleCompleteClick = (item) => {
        // put needs all data, so whole item is passed
        completeTransaction(item).then(() => {
            updateTransactions();
        });
    }
    const handleDeleteClick = (id) => {
        deleteTrancaction(id).then(res => {
            updateTransactions();
          })
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
                                <div className="item-buttons">
                                    <button className="complete-button" onClick={() => { handleCompleteClick(item) }}>Complete</button>
                                    <button className="delete-button" onClick={() => { handleDeleteClick(item.transactionid) }}>Delete</button>
                                </div>
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