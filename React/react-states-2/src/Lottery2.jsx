import Ticket from "./Ticket"
import { useState } from "react"
import { random,arrSum } from "./helper"
import Button from "./Button";

export default function Lottery2({n=3,winCondition})
{
    let [ticket,setTicket]= useState(random(n));
    let isWinning=winCondition(ticket);
    let genTicket=()=>{
        setTicket(random(n));
    }
    return(
        <div>
            <h1>Lottery game!</h1>
            <Ticket ticket={ticket} />
            <h3>{isWinning&& "Congratulations! you won the lottery!!"}</h3>
            <Button action={genTicket} />
            
        </div>
    )
}