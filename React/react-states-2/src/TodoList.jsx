import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function TodoList()
{
    let [todos,setTodos]=useState([
        {
            id:uuidv4(),
            task:"sample-task",
            done:false
        }]);
    let [newTodo,setNewTodo]=useState('');
  
    let addNewTask=()=>{
        setTodos((prevTodos)=> {return[...prevTodos,{id:uuidv4(),task:newTodo,done:false}]});
        setNewTodo("")
    }
    let updateTodoValue=(event)=>{
        setNewTodo(event.target.value);
    }

    let deleteTodo=(id)=>{
        setTodos((prevTodos)=>prevTodos.filter((todo)=>todo.id!=id));
    }

    let markAllAsDone=()=>{
        setTodos(todos.map((todo)=>{
            return{
                ...todo,
                done:true
            };
        }))
    }

    let markAsDone=(id)=>{
         setTodos(todos.map((todo)=>{
            if(todo.id==id){

                return{
                
                ...todo,
                done:true

            
            };
            }
            else{
                return todo
            }
          
            
            
        }))

        

    }
        return(
        <div>
            <input placeholder="add a task" value={newTodo} onChange={updateTodoValue}></input>
            <button onClick={addNewTask}>Add task</button>
            <h4>Todo List</h4>
            <ul>
                {
                     todos.map((todo)=> <li key={todo.id}>
                        <span style={{textDecoration: todo.done?"line-through":"none"}}>{todo.task}</span>
                        <button onClick={()=>{deleteTodo(todo.id)}}>Delete</button>
                        <button onClick={()=>markAsDone(todo.id)}>Mark as done</button>
                        </li>)
                }
               
            </ul>
            <button onClick={markAllAsDone}>Mark all as done</button>

        </div>
    );
}