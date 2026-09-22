function handleClick(event)
{
    console.log("hello!");
    console.log(event);
}
function handleMouseOver()
{
    console.log("byeee!");
}
function handleDblClick()
{
    console.log("you double clicked");
}

export default function Button()
{
    return(
        <div>
            <button onClick={handleClick}>Click me!</button>
            <p onMouseOver={handleMouseOver}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae atque pariatur ullam quas? Minima repellendus eum ex nisi provident expedita nemo tenetur culpa quam fuga quibusdam beatae, officiis, maiores corrupti.</p>
            <button onDoubleClick={handleDblClick}>double click me!</button>
        </div>
    );
}