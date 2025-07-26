import { useState, useEffect } from "react";
import './Budgets.css'

const Budgets =() => {
    
    const[budgetData, setBudgetData] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:8080/api/budgets`)
        .then((res) => res.json())
        .then((data) => {
           setBudgetData(data);
        })
        .catch((error) => console.log(error));
    }, []);

    const totalUsed = 338;
    const totalLimit = 975;

   return (
    <div className="budgets-card">
        <div className="budget-header">
            <h2 className="budget-heading">Budgets</h2>
            <span className="budget-details">See Details</span>
        </div>

        <div className="budget-body">
        <div className="budget-circle">
          <div className="circle">
            <span className="circle-amount">${totalUsed}</span>
            <span className="circle-limit">of ${totalLimit} limit</span>
          </div>
        </div>

         <div className="budget-list">
          {budgetData.map((budget, index) => (
            <div key={index} className="budget-item">
              <span className="budget-color" style={{ backgroundColor: budget.color }}></span>
              <span className="budget-name">{budget.category}</span>
              <span className="budget-value">${budget.category_limit_amount}</span>
            </div>

            ))}
            </div>
        </div>
    </div>
   )
}
export default Budgets;