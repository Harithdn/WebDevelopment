// let smallImg=document.getElementsByClassName("oldImg");
// //all the images of the class "oldImg" gets stored in a html collection named smallImg

// //iterate the html collection to access each image
// for(let i=0;i<smallImg.length;i++)
// {
//     //Each image is accessed by the collection and the source of the image is changed to the spiderman image
//     smallImg[i].src="spiderman_img.png";
//     console.log(`the small image ${i} is changed`);
// }

// let para=document.getElementsByTagName("p");
// //this returns a html collection of all the elements with paragragh tag
// para[0].innerText="abc";
// para[1].innerText="dfb";
// //each html element can be accessed by this collection and can be manipulated

//selecting html elements in the css selector method with the help of query selectors

// console.dir(document.querySelector("p"));
// console.dir(document.querySelector(".oldImg"));
//there are multiple paragraphs and images in class .oldImg,but onky 1 paragraph and image is selected by querySelector
//if there are multiple elements with the same selector configuration,query selector will only select the first element
//to select all the elemets in the specified configurationa nd retuirn it as a html collection we use querySelectorAll
//querySelectorAll command will return a html collection of objects of all the elements satisfyiing the selector configuration

// console.dir(document.querySelectorAll("p"));
// console.dir(document.querySelectorAll(".oldImg"));

//manipulate the content using DOM

//  let para=document.querySelector("p");
// // para.innerText="my name is Peter parker";
// // //innerText represents only the part which is visible through the website,html code is not specified
// // para.innerHTML='my name is <b>Peter parker</b>';
// //innerHTML gives the entire HTML code of that particular element

// let img=document.querySelector('img');
// // img.setAttribute('src',"creation_3.jpeg");
// // console.dir(img.getAttribute('id'));
// // we can manipulate attributes of html elements by the functions getAttribute and setAttribute

// let heading=document.querySelector("h1");
// // console.dir(heading);
// // console.dir(heading.style);
// // //. style stores the CSS declaration for the element
// // //the css declaration can be accessed and manipulated
// // //In CSS declaration we use '-' for some properties such as background-color:red
// // //But in JavaScript all the properties are written in CamelCase so it is backgroundColor
// // heading.style.backgroundColor="red";
// // heading.style.color="blue";

// //Change all the colors of anchor tags in the publisher box to yellow form blue
// let links=document.querySelectorAll(".box a");//this will result in a collection of all the anchor tag objects
// //to change the colour of each anchor tag,we need to iterate through thr collection anmd change the colour
// for(link of links)
// {
//     link.style.color="yellow";
// }

// //.style contains only the inline css properties and it does not contain css properties defined in a seperate css file
// //inline style properties are the properties defined in the html document while defining the element in the tag
// //hence we cant access the css properties defined in a css file for elements

// console.dir(heading.classList);
// //classList lists all the classes associated with that element
// heading.classList.add("green");//adds a new class to the element
// heading.classList.add("wavy");
// //green and wavy are defined in the css,and hence we can associate the properties to any elememt by giving them this classes
// console.dir(heading.classList);
// console.dir(heading.classList.contains("wavy"));//return true if the specified calss is present in the element
// //toggle acts as a switch to "on" or "off" a class,if a class is already present,toggle will disable it
// //if  a class is not present,toggle will enable it to the element
// heading.classList.toggle("green");//turn off
// heading.classList.toggle("green");//turn on

// //disadvantage of set attribute:
// //with set attribute only one value of the attribute can allowed there cant be multiple value of the attribute
// //hence using set attribute we cant let an element be having 2 classes
// //hence we dont use setAttribute often

// //Navigation on page
// //elements are arranged in the form of parent children relationships, children to the same parent are siblings

// let box=document.querySelector(".box");
// console.dir(box.children);//prints all the children elemets of the box element
// console.dir(box.parentElement);
// let list=document.querySelector("ul");
// console.dir(list.parentElement);
// console.dir(list.previousElementSibling);
// console.dir(list.nextElementSibling);
// //the attributes can be manipulated using relationships
// img.previousElementSibling.style.color="red";

// //Dynamically creating new elements in the webpage
// let newpara=document.createElement("p");
// newpara.innerText=" new paragraph";
// console.dir(newpara);
// //the element is created but it is not inserted in the webpage,to insert it,we need to select a parent element and append it there asa child
// let body=document.querySelector("body");
// body.appendChild(newpara);

// let btn=document.createElement("button");
// btn.innerText="Cick mee";
// box.appendChild(btn);
//appendChild is used on parent elements only

//whereas append function can be used to any element
//append can do multiple functions,it can append text to the element or even append another element

// newpara.append(" appended text");
// box.append(newpara);//adds at the end
// box.prepend(newpara);//adds at the beginning

// let p=document.querySelector("p");
// let btn2=document.createElement("button");
// btn2.innerText="new button";
//inserting element with respect to another element with different configurations
// p.insertAdjacentElement("beforebegin",btn2);
// p.insertAdjacentElement("afterbegin",btn2);
// p.insertAdjacentElement("beforeend",btn2);
// p.insertAdjacentElement("afterend",btn2);

//elements can removed in the following ways
// box.removeChild(btn);//parent.removeChild(child element)
// p.remove();//element.remove()

//DOM manipulation practice on empty webpage
// let p1=document.createElement("p");
// p1.innerText="hey im red !!";
//  let body=document.querySelector("body");
// body.append(p1);
// p1.classList.add("red");
// let h3=document.createElement("h3");
// h3.innerText="im a blue h3";
// h3.classList.add("blue");
// body.append(h3);

// let div=document.createElement("div");
// div.classList.add("divclass");
// let h1=document.createElement("h1");
// h1.innerText="im in a div";
// let p2=document.createElement("p");
// p2.innerText="me too!!";
// div.append(h1);
// div.append(p2);
// body.append(div);

// let inp=document.createElement("input");
// body.append(inp);
// let btn=document.createElement("button");
// btn.innerText="Click me";
// body.append(btn);
// inp.setAttribute("placeholder","username");
// btn.setAttribute("id","btn");

// btn.style.backgroundColor="purple";
// btn.style.color="white";

// let h1=document.createElement("h1");
// h1.innerText="DOM Practice";
// h1.style.color="purple";
// h1.style.textDecoration="underline";
// body.append(h1);

// let p=document.createElement("p");
// p.innerHTML="Apna College <b>Delta</b> Practice";
// body.append(p);

// let btns=document.querySelectorAll("button");

// function like()
// {
//     alert("The post was liked");
// }
// function hover(){
//     console.log("mouse hovered over button");

// }
// for(btn of btns)
// {
//     btn.onclick=like;//onclick property triggers the execution of a specified callback function on clicking that element
//     btn.onmouseenter=hover;//onmouseneter property triggers a function on hovering the mouse over that element 
// }
//DOM events can be identified or triggered by the following ways:
//using inline property in element in the html code by specifying property aand value, for ex:onclick
//using eventlisteners
//using individual property we can only set one callback function
//but with event listeners we can set multiple properties

// for(btn of btns)
// {
//    //btn.addEventListener("click",like);
//    btn.addEventListener("click",function(){ console.log("button clicked")});
//    //with help of event listeners we could perform 2 actions on clicking button
//    btn.addEventListener("dblclick",function(){console.log("button double clicked")});//perform action on double clicking the button
// }

//Activity
//to generate random color on clicking a button

// let btn=document.querySelector("button");
// btn.addEventListener("click",function()
// {
//     let color=randomcolor();
//     //Change the colour of the h3 heading and the div to the random colour
//     document.querySelector("h3").innerText=color;
//     document.querySelector("div").style.backgroundColor=color;

// });
// function randomcolor(){
//     //colors have rgb value: rgb(a,b,c)
//     //a,b,c are in the range of 0-255

//     let a=Math.floor(Math.random()*255);
//     let b=Math.floor(Math.random()*255);
//     let c=Math.floor(Math.random()*255);

//     return `rgb(${a},${b},${c})`;
//}

//Event listeners for other elements
// document.querySelector("p").addEventListener("click",function(){console.log("para clicked")});
// document.querySelector("div").addEventListener("mouseenter",function(){console.log("inside the box")});

//use of "this" in event listeners
// let h1=document.querySelector("h1");
// let p=document.querySelector("p");
// let btn=document.querySelector("button");


// h1.addEventListener("click",bgchange);
// p.addEventListener("click",bgchange);
// btn.addEventListener("click",bgchange);

// function bgchange()
// {
//     console.log(`${this} clicked`);//"this " refers to the current object( in this case,the html element being passed)
//     this.style.backgroundColor="pink";
// }


//Keyboard events
//Event based on keyboard interactions

// let inp=document.querySelector("input");
// inp.addEventListener("keydown",function(event){//keydown means the keyboard key is pressed down
//     //console.dir(event);//event is an aobject automatically created by js for a keyboard vent conatining relevant info
//     console.log("key entered");
//     // console.log(`Key entered: ${event.key}`);
//     // console.log(`Code: ${event.code}`);
// })
// inp.addEventListener("keyup",function(event){
//     console.log("key up");
// })

//Form events
// let form=document.querySelector("form");
// form.addEventListener("submit", function(event)
// {
//     alert("Form submitted");
//     event.preventDefault();//prevents the switching of tab to new tab specified in the action part of the form
// })

//Extracting form elements data
// let form=document.querySelector("form");
// let namee=document.querySelector("#name");
// let pass=document.querySelector("#pass");
// form.addEventListener("submit", function(event)
// {
//     event.preventDefault();
//     console.dir(form);
//     //form is an object created with evry form created and has many properties associated with it
//     //we can access all teh form elements with form.elements[index]
//     console.dir(form.elements[0]);
//     console.dir(this.elements[1]);//"this" refers to the form object,hence can usde "this" instead of form
//     alert(`Hi ${namee.value}, your password has been set to ${pass.value}`);
//})

// //change and input events
// let namee=document.querySelector("#name");
// // namee.addEventListener("change",function(){//change event recognizes when the vlaue of the elememt is cchanged from a initial state to a new final state
// //     console.log(`Value chnaged to ${namee.value}`);
// // })
// namee.addEventListener("input",function(){//input tracks all small changes done also,so it tracks every chaarcter entered also
//     console.log(namee.value);
// })

//Text editor
// let p=document.querySelector("#para");
// let text=document.querySelector("#text");
// text.addEventListener("input",function(){
//     if(text.value.toLowerCase()!==text.value.toUpperCase())
//     {
//     p.innerText=text.value;
//     }
// })

//Event bubbling
//when an event is created in nested element,it may propagate to the parent elements too
//this phenomenon is called as event bubbling
// let div=document.querySelector("div");
// let ul=document.querySelector("ul");
// let lis=document.querySelectorAll("li");

// div.addEventListener("click",function(){
//     console.log("div clicked");
// });
// ul.addEventListener("click",function(event){
//     console.log("ul clicked");
//     event.stopPropagation();//this function will stop the cascading propagation of events into their parents

// });
// for(li of lis)
// {
//     li.addEventListener("click",function(event){console.log("li clicked");
//     event.stopPropagation();
//     });//when ul is clicked due to propogation when li and div gets clicked bcoz they are parents

// }

//Building a todo app
let btn=document.querySelector("button");
let task=document.querySelector("input");
let list=document.querySelector("ul");
btn.addEventListener("click",function(){
    let li=document.createElement("li");
    li.innerText=`${task.value}`;
    list.appendChild(li);
    let check=document.createElement("input");
    check.type="checkbox";
    li.append(check);
    let delbtn=document.createElement("button");
    delbtn.classList.add("del");
    delbtn.innerText="Delete";
    li.append(delbtn);
    // delbtn.addEventListener("click",function(){
    // let parent=this.parentElement;
    // parent.remove();
//})
    task.value="";
})

//delete tasks with  event delegation


list.addEventListener("click",function(e){
    if(e.target.classList.contains("del"))e.target.parentElement.remove();
})




























