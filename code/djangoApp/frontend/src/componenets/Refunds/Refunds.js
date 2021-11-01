import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/userSlice";
import { getAllTransactions, deleteTrancaction, transferMoney, getUserById } from "../../services/services";
import './Refunds.css'

const Refund = () => {
  const [transactions, setTransactions] = useState([]);
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch();

  useEffect(() => {
    getAllTransactions().then(res => {
      setTransactions(res);
    })
  }, [])

  const handleRefundClick = (id, amount, transactionId) => {
    // Remove money from owner, add money to user
    transferMoney(user.id, id, amount).then(() => {
      deleteTrancaction(transactionId).then().then((resDelete) => {
        if(resDelete === false) {
          return
        }
        getAllTransactions().then((resGetAll) => {
          console.log('getALl res', resGetAll)
          setTransactions(resGetAll)
          getUserById(user.id).then((res) => {
            dispatch(setUser(res))
          })
        })
      })
    })
    
  }
  const handleDeleteClick = (id) => {
    // Remove Transaction from DB then fetch new transactions
    deleteTrancaction(id).then(res => {
      getAllTransactions().then(res => {
        setTransactions(res);
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
                <button className="complete-button" onClick={() => { handleRefundClick(transaction.transactionbuyer, transaction.transactionprice, transaction.transactionid) }}>Refund</button>
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