import { useState } from "react";
import './Comment.css';
import CommentsForm from "./CommentsForm";
import { v4 as uuidv4 } from "uuid";

export default function Comment()
{
    let [comments,setComments]=useState([{
        id:uuidv4(),
        username:"@harithdn",
        comment:"very nicee",
        rating:4
    }]);

    let addNewComment=(comment)=>{
        let newComment={
            ...comment,id:uuidv4()
        }
        setComments((currComments)=>[...currComments,newComment]);

    }

   
    return(
    <div>
        <h3>All Comments</h3>
        {comments.map((comment,idx)=>(
        <div className="comment" key={comment.id}>
        <span>{comment.comment}</span>
        &nbsp;
        <span>rating={comment.rating}</span>
        <p>-{comment.username}</p>
        </div>
        ))}
        
        <CommentsForm addNewComment={addNewComment}/>
    </div>

    )
   
}