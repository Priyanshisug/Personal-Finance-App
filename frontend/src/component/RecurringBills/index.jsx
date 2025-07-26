import { useEffect, useState } from "react";
import './RecurringBills.css';

const RecurringBills = () => {

    const [bills, setBills] = useState([]);
    const[totalBills, setTotalBills] = useState(0);
    const [paidBills, setPaidBills] = useState(0);
    const [dueSoon, setDueSoon] = useState(0);

    useEffect(() => {
         fetch("http://localhost:8080/api/recurringBills")
            .then((res) => res.json())
            .then((data) => {
                setBills(data);
         
                const total = data.reduce((sum, bill) => sum + bill.amount, 0);
                const paid = data
                  .filter((bill) => Number(bill.due_date) <= 10)
                  .reduce((sum, bill) => sum + bill.amount, 0);
                  
                  const due = total - paid;

                  setTotalBills(total);
                  setPaidBills(paid);
                  setDueSoon(due);
    })
    .catch((error) => console.log("error"));
}, []);

return (
    <div className="bills-card">
        <div className="bills-header">
        <h2 className="bills-title">Recurring Bills</h2>
        <span className="details">See Details</span>
        </div>
        <div className="bills-summary">
            <p>Total Bills : ${totalBills}</p>
            <p>Paid Bills: ${paidBills}</p>
            <p>Due Soon: ${dueSoon}</p>
        </div>
    </div>
);
};

export default RecurringBills;