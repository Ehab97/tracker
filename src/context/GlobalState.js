import React,{createContext,useReducer} from 'react'
import AppReducer from './AppReducer'

//intial state
const intialState={
     transactions:[
          {
               id: 1,
               amount:200,
               text:'labtop'
          },
          {
               id: 2,
               amount:-300,
               text:'PES2020'
          },
          {
               id: 3,
               amount:100,
               text:'Fifa2020'
          },{
               id: 4,
               amount:-100,
               text:'PS5'
          }
     ] 
}

export const GlobalContext=createContext(intialState);

export const  GlobalProvider=({children})=> {
     const [state,dispatch]=useReducer(AppReducer,intialState);
     // Actions
  function deleteTransaction(id) {
     dispatch({
       type: 'DELETE_TRANSACTION',
       payload: id
     });
   }
   function addTransaction(transaction) {
     dispatch({
       type: 'ADD_TRANSACTION',
       payload: transaction
     });
   }
     return (
          <GlobalContext.Provider value={{transactions:state.transactions,deleteTransaction,addTransaction}}>
               {children}
          </GlobalContext.Provider>
     )
}
