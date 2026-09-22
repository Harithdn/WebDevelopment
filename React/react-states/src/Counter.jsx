import {useState} from 'react';

export default function Counter()
{
      console.log("Component was re-rendered");
    //let [stateVariable,setStateVariable]=useState(0);
     let [count,setCount]=useState(0);//inititialization of the state
     
     //console.log(count);
     function incCount(){
        setCount(count+1);
         
        console.log(count);
    }
    return(
        <div>
            <button onClick={incCount}>Count:{count}</button>
        </div>
    )
}