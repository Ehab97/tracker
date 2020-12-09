import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

//export default function Transaction({transaction}) {
 export const Transaction=({transaction}) =>{
     // function Transaction({transaction}) {
      const sign=transaction.amount<0?'-':'+';
      const color=transaction.amount<0?'minus':'plus'; 
      const {deleteTransaction}=useContext(GlobalContext);   
     return (
          <li className={color}>
          {transaction.text} <span>{sign}${Math.abs(transaction.amount )}</span>
          <button className="delete-btn" onClick={()=>deleteTransaction(transaction.id)}>x</button> 
     </li>
     )
}

//export default  Transaction;