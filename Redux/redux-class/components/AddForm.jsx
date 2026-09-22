import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm()
{
    let [task,setTask]=useState("");
    const dispatch=useDispatch();

    let handleSubmit=(event)=>{
        event.preventDefault();
        dispatch(addTodo(task));
        setTask("");
        
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder="enter task"
                value={task}
                 onChange={(e)=>setTask(e.target.value)}></input>
                <button type="submit">Add</button>
            </form>
        </div>
    )

}
