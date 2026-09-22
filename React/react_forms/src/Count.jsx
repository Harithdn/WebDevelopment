import { useState,useEffect } from "react";

export default function Count()
{
    let [countx,setCountx]=useState(0);
    let [county,setCounty]=useState(0);

    let incCountx=()=>{
        setCountx((currCount)=>currCount+1);

    }
     let incCounty=()=>{
        setCounty((currCount)=>currCount+1);

    }

    useEffect(function print(){
        console.log("side effect");
    },[countx])

    return(
        <div>
            <h1>Count={countx}</h1>
            <button onClick={incCountx}>+1</button>

            <h1>Count={county}</h1>
            <button onClick={incCounty}>+1</button>
        </div>
    )
}