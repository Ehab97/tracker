import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export default function IncomeExpense() {
     const {transactions}=useContext(GlobalContext);
     //amounts.reduce((acc,item)=>(acc+=item),0).toFixed(2);
     const income = (transactions.map(transaction=>transaction.amount>0?transaction.amount:null));
     const totalIncome=income.reduce((a,b)=>a+b)
     const expense = (transactions.map(transaction=>transaction.amount<0?transaction.amount:null));
     const totalExpense=expense.reduce((a,b)=>a+b)
     return (
          <div className="inc-exp-container ">
               <div>
                    <h4>Income</h4>
     <p id="money-plus" className="money plus">{totalIncome}</p>
               </div>
               <div>
                    <h4>Expense</h4>
     <p id="money-minus" className="money minus">{Math.abs(totalExpense)}</p>
               </div>
          </div>
     )
}
