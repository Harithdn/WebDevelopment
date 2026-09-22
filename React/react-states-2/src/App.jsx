import { useState } from 'react'
import TodoList from './TodoList'
import Lottery from './Lottery'
import './App.css'
import Lottery2 from './Lottery2'
import { arrSum } from './helper'


function App() {
  let winCondition=(ticket)=>{
    return arrSum(ticket)===15;
}
  return(
    <>
    <span>
       <Lottery2 n={3} winCondition={winCondition} />
    </span>
   
    </>

  )
 

}

export default App
