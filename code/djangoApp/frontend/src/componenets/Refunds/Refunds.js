import React, { useEffect, useState } from "react";
import { getAllTransactions, deleteTrancaction } from "../../services/services";
import './Refunds.css'

const Refund = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getAllTransactions().then(res => {
      setTransactions(res);
    })
  }, [])

  const handleRefundClick = (id) => {
    // Remove money from owner, add money to user
  }
  const handleDeleteClick = (id) => {
    // Remove Transaction from DB then fetch new transactions
    deleteTrancaction(id).then(res => {
      getAllTransactions().then(res => {
        setTransactions(res);
        console.log(res)
      })
    })
  }
  return (
    <div className="refund-page">
      {transactions.map(transaction => {
        if (transaction.transactionactiveflag === true) return
        return (
          <div className="refund-card" key={transaction.transactionid}>
            <div className="refund-card-header">
              Transaction Number: {transaction.transactionid}
            </div>
            <div className="refund-card-body">
              <div className="date" >Date: {transaction.transactiondate}</div>
              <div className="price" >Cost: ${transaction.transactionprice}</div>
              <div className="buyer" >Buyer: {transaction.transactionbuyer}</div>
              <div className="miester" >Drink Miester: {transaction.transactiondrinkmeister}</div>
              <div className="card-buttons">
              <button className="complete-button" onClick={() => { handleRefundClick(transaction.transactionid) }}>Refund</button>
              <button className="delete-button" onClick={() => { handleDeleteClick(transaction.transactionid) }}>Delete</button>
              </div>
            </div>
          </div>
        )
      })
      }
    </div>
  );
};

export default Refund;