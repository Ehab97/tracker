import React from 'react'
import Header from "./component/Header";
import Balance from './component/Balance'
import IncomeExpense from './component/IncomeExpense';
import {TrsndstionList} from './component/TrsndstionList';
import AddTranation from './component/AddTranation';
import {GlobalProvider} from './context/GlobalState';
import './App.css'


function App() {
  return (
    <GlobalProvider>
        <Header/>
        <div className="container">
          <Balance />
          <IncomeExpense />
            <TrsndstionList />
          <AddTranation />
        </div>
    </GlobalProvider>
  );
}

export default App;
