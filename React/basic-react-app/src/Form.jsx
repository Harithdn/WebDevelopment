function handleClick(event)
{
    event.preventDefault();
    console.log("Form was submitted");
}
export default function Form()
{
    
    return(
        <form onSubmit={handleClick}>
            <input placeholder="type something"></input>
            <button type='submit' >Submit</button>
        </form>
    )
}