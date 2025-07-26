import { Link } from 'react-router-dom';
import './NavBar.css';

import Overview from '../../Icons/HomeIcon';
import Transactions from '../../Icons/Transactions';
import Budget from '../../Icons/Budget';
import Pots from '../../Icons/Pots';
import Recurring from '../../Icons/RecurringBills'
const NavBar = () => {

    const iconColor = '#b3b3b3';

  return (
    <nav className="navbar">
        <h1>finance</h1>
      <Link to="/overview">
        <Overview color={iconColor} />
        Overview
      </Link>
      <Link to="/transactions">
        <Transactions color={iconColor} />
        Transactions
      </Link>
      <Link to="/budgets">
        <Budget color={iconColor} />
        Budgets
      </Link>
      <Link to="/pots">
        <Pots color={iconColor} />
        Pots
      </Link>
      <Link to="/recurring-bills">
        <Recurring color={iconColor} />
        Recurring Bills
      </Link>
    </nav>
  );
};
export default NavBar;

