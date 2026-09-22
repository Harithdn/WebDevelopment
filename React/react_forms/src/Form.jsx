import { useState } from "react"

export default function Form()
{
    // let [fullName,setFullName]=useState('');
    let [formData,setFormData]=useState({
        fullName:"",
        username:"",
        password:""
    })

    // let handleNameChange=(event)=>{
    //     setFullName(event.target.value);

    // }

    let handleInputChange=(event)=>{
        setFormData(
            (currData)=>{
                return {...currData,[event.target.name]:event.target.value}
            }
        )
    }

    let handleSubmit=(event)=>{
         event.preventDefault();
         console.log(formData);

         setFormData({
          fullName:"",
          username:"",
          password:""
         }

         )
    }
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full name</label>
            <input 
            placeholder="type full name"
            type="text"
            value={formData.fullName}
            id="fullName"
            name="fullName"
            onChange={handleInputChange}></input>
            <br></br>

            <label htmlFor="username">Username</label>
            <input 
            placeholder="type username"
            type="text"
            value={formData.username}
            id="username"
            name="username"
            onChange={handleInputChange}></input>
            <br></br>
            
            <label htmlFor="password">Password</label>
            <input 
            placeholder="type password"
            type="password"
            value={formData.password}
            id="password"
            name="password"
            onChange={handleInputChange}></input>
            <br></br>

            <button type="submit">Submit</button>
        </form>
    )
}