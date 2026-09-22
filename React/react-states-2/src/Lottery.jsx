import { useState } from "react"
import { random } from "./helper";
export default function Lottery()
{
    let [ticket,changeTicket]=useState(random);
    let [victoryMessage,displayMessage]=useState('');

    let generateTicket=()=>{
        displayMessage('');
        let newTicket=random;
        changeTicket(newTicket);
        {
            let sum=0;
            let t=newTicket;
            for(let i=0;i<3;i++){
                sum+=t%10;
                t=Math.floor(t/10);
            }
            if(sum==15){
                displayMessage('Congratulations! You won the lottery!!');
            }
        }

    }
    return(
        <div>
            <h2>Lottery</h2>
            <p>Lottery Ticket:{ticket}</p>
            <p>{victoryMessage}</p>
            <button onClick={generateTicket}>Generate Ticket</button>

        </div>
    )
}