import React, { useEffect } from "react";
import { getAllTransactions } from "../../services/services";

const Refund = () => {
  const [transactions, setTransactions] = React.useState([]);

  useEffect(() => {
    getAllTransactions().then(res => {
      setTransactions(res);
    })
  }, [])
  console.log(transactions)

  return (
    <div className="refund-page">
      {transactions.map(transaction => {
        if(transaction.transactionactiveflag === true) return
        return (
          <div className="refund-card" key={transaction.transactionid}>
            <div className="refund-card-header">
              {transaction.transactionid}
            </div>
            <div className="refund-card-body">
              {transaction.transactiondate}<br />
              {transaction.transactionprice}<br />
              {transaction.transactionbuyer}<br />
              {transaction.transactiondrinkmeister}<br />
            </div>
          </div>
        )})
      }
    </div>
  );
};

export default Refund;