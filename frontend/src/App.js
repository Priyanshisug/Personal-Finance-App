import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './component/NavBar';

import './App.css';
import Transactions from './component/Transactions/Transactions';
import Pots from './component/Pots';
import OverView from './component/Overview';
import RecurringBills from './component/RecurringBills';
import Budgets from './component/Budgets';
import PotsPage from './component/PotPage/PotsPage';

function App() {
  return (
      <BrowserRouter>
      <div className='app-container'>
        <NavBar />
        <div className='main-content'>
          <Routes>
             <Route path="/transactions" element={<Transactions/>}/>
             <Route path="/pots" element={<Pots />}/>
             <Route path="/overview" element={<OverView />}/>
             <Route path='/recurring-bills' element={<RecurringBills />}/>
              <Route path="/budgets" element={<Budgets />} />
              <Route path ="/potsPage" element={<PotsPage />} />
          </Routes>
        </div>
    </div>
     </BrowserRouter>
  );
}

export default App;
