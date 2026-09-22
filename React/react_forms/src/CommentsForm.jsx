import { useState } from "react";
import { Formik } from 'formik';
export default function CommentsForm({addNewComment})
{
    let [formData,setFormData]=useState({
        username:"",
        comment:"",
        rating:"5"
    })


    let handleInputChange=(event)=>{
        setFormData((currData)=>{
            return{...currData,[event.target.name]:event.target.value}
        })
    }

    
     let [isValid,setIsValid]=useState(true);

    let handleFormSubmit=(event)=>{
        if(!formData.username){
         event.preventDefault();
         setIsValid(false);
        return;
    }
        event.preventDefault();
        addNewComment(formData);
        setFormData({
        username:"",
        comment:"",
        rating:"5"

        })

    }

    

    return(
       <div>
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="username">Username</label>
            <input 
            name="username"
            id="username"
             placeholder="enter username"
              type="text"
              value={formData.username}
              onChange={handleInputChange}></input>
              {!isValid && <p style={{color:'red'}}>username cannot be empty</p>}
              <br></br><br></br>

            <label htmlFor="comment">Comment</label>
            <textarea 
            name="comment"
            id="comment"
            placeholder="remarks"
            value={formData.comment}
            onChange={handleInputChange}></textarea>
            <br></br><br></br>

            <label htmlFor="rating">Rating</label>
            <input 
            name="rating"
            id="rating"
             type="number"
             placeholder="rating"
             value={formData.rating}
             onChange={handleInputChange}
             min={1}
             max={5}></input>
            <br></br><br></br>

            <button type="submit">Submit</button>
        </form>
       </div>
    )
}