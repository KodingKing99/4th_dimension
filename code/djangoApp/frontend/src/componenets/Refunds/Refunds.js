import React, { useEffect } from "react";
import { getAllTransactions } from "../../services/services";
import './Refunds.css'

const Refund = () => {
  const [transactions, setTransactions] = React.useState([]);

  useEffect(() => {
    getAllTransactions().then(res => {
      setTransactions(res);
    })
  }, [])

  const handleRefundClick = (id) => {
    console.log(id)
  }
  const handleDeleteClick = (id) => {
    console.log(id)
  }
  return (
    <div className="refund-page">
      {transactions.map(transaction => {
        // if (transaction.transactionactiveflag === true) return
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