import { useEffect, useState } from "react";
import WidgetComponent from "../Widget";
import './Overview.css'; 
import Pots from "../Pots";
import Transactions from "../Transactions/Transactions";
import RecurringBills from "../RecurringBills";
import Budgets from "../Budgets";
const OverView = () => {

    // const income = 100000;
    // const expenses = 25000;
    // const currentbalance = income - expenses;

    const [income, setIncome] = useState(0);
    const [expenses, setExpense] = useState(0);

    useEffect(()=>{
        fetch(`http://localhost:8080/api/income`)
        .then((res) => res.json())
        .then((data) => {
            const amount = Number(data[0].income);
            setIncome(amount);
        })
        .catch((error) => console.log(error))

        fetch(`http://localhost:8080/api/expenses`)
        .then((res) => res.json())
        .then((data) => {
            const amount = Number(data[0].expenses);
            setExpense(amount);
        })
        .catch((error) => console.log(error))
    }, []);

    const currentbalance = income - expenses;

    return (
        <div className="overview">
        <h1 className="heading">OVERVIEW</h1>
        <div className="overview-container">
        <WidgetComponent heading= "Current Balance" value={currentbalance} color="#ffffff" />
        <WidgetComponent heading= "Income" value={income} color="#ffffff" />
        <WidgetComponent heading= "Expenses" value={expenses} color="#ffffff" />
        </div>
        <div className="overview-pots-budget">
            <div className="overview-pots">
                <Pots />
                </div>
                <div className="overview-Budget">
                <Budgets />
                </div>
            </div>
            <div className="overview-transaction-bills">
            <div className="overview-transaction">
                <Transactions />
            </div>    
            <div className="overview-bills">
             <RecurringBills />
            </div>
            </div>
        </div>
    )
}
export default OverView;