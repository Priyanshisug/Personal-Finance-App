import { useEffect, useState } from "react";
import './Transaction.css'
const Transactions = () => {

    const[Transactions, setTransactions] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/transactions")
        .then((res) => res.json())
        .then((data) => {
            setTransactions(data);
        })
        .catch((error) => console.log("error"));
    }, []);

    return(
        <div className="transactions-card">
            <div className="transactions-header">
            <h2 className="transactions-title">Transactions</h2>
            <span className="view-all">View All</span>
             </div>
            <ul className="transaction-list">
                {Transactions.slice(0,6).map((txn, index) => (
                    <li key={txn.id} className="transaction-item">
            <div className="transaction-details">
              <h4 className="transaction-name">{txn.transaction}</h4>
            </div>
                        <div className="transaction-amount"
                        style = {{color : txn.amount > 0 ? "green" : "black"}}>
                            ${txn.amount}
                             <p className="transaction-date">{txn.date_of_transaction}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );

};
export default Transactions;