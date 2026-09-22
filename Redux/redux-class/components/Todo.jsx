import { useSelector } from "react-redux"
import AddForm from "./AddForm";
import { deleteTodo,markAsDone } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";

export default function Todo()
{
    const todos=useSelector((state)=>state.todos);
    const dispatch=useDispatch();
    
    let handleDelete=(id)=>{
        dispatch(deleteTodo(id));

    }

    let handleMark=(id)=>{
        dispatch(markAsDone(id));

    }
    console.log(todos)
    return(
        <div>
            <h1>Todo</h1>
            <AddForm />
            <ul>
                {todos.map((todo)=>(
                    <li key={todo.id} style={todo.isDone?{textDecoration:"line-through"}:{}}>{todo.task}
                    <button onClick={()=>handleDelete(todo.id)}>Delete</button>
                    <button onClick={()=>handleMark(todo.id)}>Mark as done</button></li>
                    
                ))}
            </ul>
        </div>
    )
}