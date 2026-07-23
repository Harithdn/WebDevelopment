// fname=prompt("enter your first name");
// lname=prompt("enter your last name");
// alert("Your name:",fname+lname);
// console.log("Your name:",fname+lname);
// let str="  Hello  ";
// let str1="ilovecoding"

// let string="tonystark";
// console.log(string.slice(3,5));
// console.log(string.replace("tony","howard"))//replace method only replaces the first instance of the word and not all the instances
// console.log(string.indexOf("stark"));
// let s=string.slice(4);
// console.log(s);
// console.log(s.replace("a","i"));

// let cars=["fortuner","defender","rolls royce"];
// console.log(cars);
// cars.push("ferrari");
// cars.unshift("mustang");
// console.log(cars);
// cars.pop();
// cars.shift();
// console.log(cars);
// console.log(cars.indexOf("defender"));
// console.log(cars.indexOf("bmw"));
// console.log(cars.includes("rolls royce"));
// console.log(cars.includes("bmw"));

// let primary=["red","green","blue"];
// let secondary=["yellow","black","white"];
// console.log(primary.concat(secondary));
// console.log(secondary.concat(primary));
// //Concat method doesnt change the structure of the array,the array stays the same
// //if we want to concatenate and store the array we have to store it in another array
// let colors=primary.concat(secondary);
// console.log(colors);

// console.log(colors.reverse());
// //Whereas the reverse function alters the structure of thye array

// console.log(cars.slice(2));//gives elements from the given start index till the end of the array
// console.log(cars.slice(0,2));//gives elements from start index till the end index specified(non inclusive)
// console.log(cars.slice(-2));//gives the last 2 elements
// //slice doesnt make any changes in the array it just return the copy of the array

// //splice method syntax: splice(startIndex,deleteCount,elements to be added);
// console.log(colors.splice(4));//removes elements in the array from the 4th index till end of the array
// console.log(colors.splice(0,1));//removes elements from the start index(0) nd the number of elements specified(1)
// console.log(colors.splice(0,1,"red","grey"));//removes elements and adds the specified elements from the starting index
// console.log(colors);
// //splice function makes the changes in the oringinal array and returns the changed array

// console.log(cars.sort());//sorts the array od strings in ascending order acc to alphabetical order
// //sort function doesnt work in the conventional ascending ordr for an array of numbers as the numbers
// //get cvonverted to strings in the form of utf code and then get sorted,so we will get random order

// let months=["january","july","march","august"];
// console.log(months);
// months.splice(0,2,"july","june");
// console.log(months);

// Arrays are represented by their pointers in the memory, so two arrays holding the same elements will not be the same
// because the two arrays will have different pointers pointing to the elements in the memory despite having the same elements
// if two arrays are equated,then they point to the same pointer in the memory,and hence can be said equal

// const array=[1,2,3];
// console.log(array);
// decalring array constant,makes the adddress point to the same memory address,and hence new array cannot be assigned
// However array operations such as add,delete elements can be done

// Printing tables using for loops
// let a=prompt("Enter your number for printing tables");
// let n=parseInt(a);

// for(let i=n;i<=n*10;i+=n)
// {
//     console.log(i);
// }

// program to guess the fav movie using while loop and prompt
// const favmov="interstellar";
//  let guess=prompt("guess my favourite movie");
// while((guess!=favmov) && (guess!="quit"))
// {
//     guess=prompt("wrong answer!! try again");

// }
// if(guess==favmov){
//     console.log("Congrats");
// }
// else{
//     console.log("you quit");
// }
// \

// Program to traverse a nested array
// let arr=[["thor","spiderman","ironman"],["flash","batman","superman","batman"]];

// for(let i=0;i<arr.length;i++)
// {
//     console.log(`List #${i}`);
//     for(let j=0;j<arr[i].length;j++)
//     {
//         console.log(arr[i][j]);
//     }
// }

// traversing using for of loop

// for(herolist of arr)
// {
//     for(hero of herolist)
//     {
//         console.log(hero);
//     }
// }

// TO-DO APP
// let todo=[];
// let req=prompt("enter your request");

// while(true)
// {
//     if(req=="quit")
//     {
//         console.log("apllication quit");
//         break;
//     }

//     else if(req=="list")
//     {
//         console.log("----------");
//         for(let i=0;i<todo.length;i++)
//         {
//             console.log(`${i+1}.${todo[i]}`);
//         }
//         console.log("----------");
//     }

//     else if(req=="add")
//     {
//         let task=prompt("Enter the new task");
//         todo.push(task);
//         console.log("task added");
//     }

//     else if(req="delete")
//     {
//         let idx=prompt("Enter the task number that you want to delete");
//         todo.splice(idx-1,1);
//     }

//     else
//     {
//         alert("Invalid request");
//     }

//     req=prompt("Enter your request");

// }

// Object literal: analogous to a structure

// Object literal for a twitter post

// const post=
// {
//     username:"@devildn",
//     content:"My first twitter post",
//     likes:250,
//     reposts:["@harithdn","@dnharith"]
// };

// console.log(post);
// console.log(post.content);
// console.log(post["likes"]);
// let prop="username";
// console.log(post[prop]);
// console.log(post.reposts[1]);

// const student=
// {
//     name:"arun",
//     age:19,
//     marks:[98,95,90],

// };

// console.log(student);
// student.gender="male";
// student.age=20;
// console.log(student);

// //Nested object literals
// console.log("Nested object literals");
// const classinfo=
// {
//     arun:{
//         grade:"A",
//         age:19
//     },
//     varun:{
//         grade:"B",
//         age:20
//     },
//     karun:{
//         grade:"O",
//         age:21
//     }
// }
// console.log(classinfo);
// console.log(classinfo.arun);
// console.log(classinfo.varun.age);

// //An array of object literals
// console.log("array of object literals");
// const info=
// [
//     {
//         name:"arun",
//         grade:"A",
//         age:19
//     },
//     {
//         name:"varun",
//         grade:"B",
//         age:20
//     },
//     {
//         name:"karun",
//         grade:"O",
//         age:21
//     }

// ]
// console.log(info);
// console.log(info[0]);
// console.log(info[1].age);

// Math objects and methods in javascript
// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.abs(-7));
// console.log(Math.pow(2,10));
// console.log(Math.floor(-6.8));
// console.log(Math.ceil(-5.12));
// console.log(Math.random());//generates a random number between 0 and 1 (1 exclusive)

// generate a random number in the range of 1 and 10
// console.log(Math.floor(Math.random()*10)+1);

// here we are doing plus 1 at the end because the previous term generates only till 0 to 9

// genertae a random number in the range of 1 to 100
// console.log(Math.floor(Math.random()*100)+1);

// Guessing game
//  to guess a number within the user,s inputted max value range

// let max=prompt("enter the maximum number");
// const random=Math.floor(Math.random()*max+1);

// guess=prompt("Guess the random number");

// while(true)
// {
//     if(guess==random)
//     {
//         console.log("congrats!! you are right!! the random number is",random);
//         break;
//     }
//     else if(guess>random)
//     {
//         guess= prompt("number entered is too big, try again");
//     }
//     else(guess<random)
//     {
//         guess= prompt("number entered is too small, try again");
//     }

    
// }

// generate a random number for dice roll
// console.log(Math.floor(Math.random()*6)+1);

// function to roll a dice
// function rolldice()
// {
//     console.log(Math.floor(Math.random()*6)+1);
// }
// rolldice();

// function avg(a,b,c)
// {
//     console.log((a+b+c)/3);
// }
// avg(2,4,6);

// let arr=["i","am","harith"];

// function concat(arr)
// {
//     let str="";
//     for(let i=0;i<arr.length;i++)str+=arr[i]+" ";
//     return str;
    
// }
// console.log(concat(arr));

// let sum=function(a,b)
// {
//     return a+b;
// }
// console.log(sum(10,20));

// higher order functions are the functions whicvh accept a function as a parameter or returns a function

// Accept a  function as a parameter


// let greet=function()
// {
//     console.log("namaste");
// }

// //function that takes a function as a parameter
// function multiplegreet(func,count)
// {
//     for(let i=1;i<=count;i++)
//     {
//         func();
//     }
// }

// multiplegreet(greet,100);

// Function that returns a function
// function oddEvenFactory(request)
// {
//     if(request=="odd")
//     {
//         return odd=function(n)
//         {
//             console.log(!(n%2==0));
//         }
    
//     }
//     else if(request=="even")
//     {
//         return even=function(n)
//         {
//             console.log((n%2==0));
//         }
//     }
//     else{
//         console.log("wrong request");
//     }
// }
// console.log(oddEvenFactory);
// let req="odd";
// console.log(req);
// let func=oddEvenFactory(req);
// console.log(func);
// console.log(func(5));
// console.log(func(6));

// Methods are functions which perform operations on objects

// analogous to the Math object and the functions
// let calculator=
// {
//     add:function(a,b)
//     {
//         return a+b;
//     },
//     subtract:function(a,b)
//     {
//         return a-b;
//     },
//     multiply:function(a,b)
//     {
//         return a*b;
//     },
    

// }

// console.log(calculator.add);
// console.log(calculator.subtract(20,10));
// console.log(calculator.multiply(20,50));

// This keyword
// "this " keyword refers to the current object
// let obj=
// {
//     name:"harith",
//     phy:90,
//     chem:85,
//     math:95,
//     getAvg()
//     {
//         console.log(this);//this refers to the current object or the calling object,hence deatils about the object will be displayed
//         console.log((this.chem+this.phy+this.math)/3);
//     }
// }
// obj.getAvg();
// //when outside a function,and executing there is a default browser window object that is created to run the program
// //hence when "this" is aclled outside a function it displays the details about the object window
// console.log(this);

// try catch blocks

// console.log("hello1");
// console.log("hello1");
// // let a=5;
// try{
//     console.log(a);
// }
// catch(err){//err is the error occured
//     console.log("error occured identifier undefined!!");
//     console.log(err);
// }
// console.log("hello2");
// console.log("hello2");

// arrow functions
// arrow functions  are small compact dynamic functions with small callbacks written in lexical scope for a defenite purpose
// this differs with the normal functions in the accessibility of object literals
// in arrow functions we cannot access the members of any object literal using the "this" keyword
// all the inbuilt function we use are the functions defined in thw window object

// const sum=(a,b)=>
// {
//     return a+b;
// }
// const power=(a,b)=>{return a**b};
// console.log(sum);
// console.log(sum(10,20));
// console.log(power);
// console.log(power(2,10));

// //if the arrow function just return a value in a return statement,it can just be written without curly braces

// const product=(a,b)=>a*b;
// const quotient=(a,b)=>a/b;

// console.log(product);
// console.log(product(20,10));
// console.log(quotient);
// console.log(quotient(20,10));

// const student=
// {
//     name:"Harith",
//     age:19,
//     marks:90,
//     prop:this,
//     getName:
//     function(){
//         console.log(this);//parent object is calling the function and hence "this" refers to the parent object
//         console.log(this.name);
//     },
//     getMarks:()=>{
//         console.log(this);//In arrow functions parent's scope=arrow function scope,parent's scope=global, and hence this refers to the global scope and henc eit displays about the window object created to execute
//         //this is lexical scope, where the function derives its scope from the parent
//         //How js works is, the window object calls the created object and the created object calls the function
//         console.log(this.marks);
//     }
// }

// console.log(student.getName());
// console.log(student.getMarks());


// setTimeout function
// it is used to delay the execution of  afunction by some time
// the first parameter is the callback function whose execution should be delayed,
// the second parameter is the time duration after which the function has to be executed in ms, 1000ms=1s

// console.log("hi there!!");
// setTimeout(()=>{console.log("Harith")},4000);

// console.log("My name is ");

// setInterval function
// it is used to repeat a function after some defenite interval of time again and again

// console.log("hi there!!");
// let id=setInterval(()=>{console.log("Harith")},2000);
// this runs indefinitely
// to stop it:
// every function call is run with an id attached to it
// to stop it, type clearInterval(id) in the console

// let id2=setInterval(()=>{console.log("DN")},3000);

// setTimeout(()=>{console.log(clearInterval(id))},10000);
// setTimeout(()=>{console.log(clearInterval(id2))},15000);

// const arravg=(arr)=>
// {
//     let total=0;
//     for(ele of arr)
//         total+=ele;
//     return total/arr.length;
// }
// console.log(arravg([1,2,3,4,5]));

// const isEven=n=>n%2==0;//if there is a single parameter or a single return variable there is no need of braces
// console.log(isEven(2));

// Array methods
// forEach is a method which iterates through all the elements present in the array similar to a for loop
// forEach function takes a function aa a parameter to perform some operation on each array element
// let arr=[1,2,3,4,5];
// function print(n){
//     console.log(n);
// }
// arr.forEach(print);

// let arr=[
//     {
//         name:"harith",
//         marks:90
//     },
//     {
//         name:"arjun",
//         marks:99
//     }
// ]
// arrOfObj.forEach((ele)=>{
//     console.log(ele);
//     console.log(ele.marks);;
// })

//  Map function
// map function creates an array of the same size and stores the returnmed value of the function passed in the array
// If the paarmeter function doesnt return any value,the new array values will be undefined
// the function which is passsed as a parameter isd called as the callback function

// let cgpa=arr.map((ele)=>
// {
//     return ele.marks/10;
// }

// )
// console.log(cgpa);

// Filter function
// return an array of elements which are elements of the passed array but gets stored based on a condition
// the callback function returns a value true or false based on which the element gets stored

// let numbers=[1,2,3,4,5,6,7,8,9,10,11];

// const even=numbers.filter((el)=>{return el%2==0});
// console.log(even);

// const odd=numbers.filter((el)=>{return !(el%2==0)});
// console.log(odd);

// Every method
// returns true if all the elements in the array pass certain condition,else false
// let arr=[2,4,6,8];
// console.log(arr.every(ele=>ele%2==0));
// let arr2=[2,4,6,8,9];
// console.log(arr2.every(ele=>ele%2==0));
// //Some function
// //some function returns true if any one of the element in the array return true for the given condition

// console.log(arr2.some(ele=>ele%2==0));

// Reduce function
// returns a single value after performing some function with the array
// it return the accumulator after every iteration to the next iteration and in the last call returns the final value of the accumulator

// let num=[1,2,3,4,5,6,7,8,9,10];
// let sum=num.reduce((res,el)=>res+el);
// console.log(sum);

// //finding max using reduce method
// let max=num.reduce((max,ele)=>
// {
//     if(ele>max)
//         return ele;
//     else 
//         return max;
// })
// console.log(max);

// Default parameters for a function

// function sum(a,b=1)
// {
//     return a+b;
// }
// console.log(sum(1,2));
// console.log(sum(2));

// Spread
// Iterables the structures which can be iterated to access each elemet of the structure
// Arrays and strings are iterables
// spread function spreads all the values in the iterable as individual values spread out
// spread function is specified by 3 dots before the structure name

// console.log(Math.min(1,2,3,4,5,6,7,8,9));
// let nums=[1,2,3,4,5,6,7,8,9];
// //we cant pass an array to Math.min to find the minimum element
// //we have to pass individula vales to the function ans hence spred can be used
// console.log(Math.min(...nums));
// console.log(..."HarithDN");
// let odd=[1,3,5,7,9];
// let even=[2,4,6,8,10];
// let numss=[...odd,...even];
// console.log(numss);

// can be used to iterate thru object literals also
// let obj=
// {
//     email:"ironman@gmail.com",
//     pass:"abcd"
// }
// let objCopy={...obj,id:"123",country:"india"}
// console.log(objCopy);

// rest 
// rest is the opposite of spread
// if multiple values are passed to a function as aparamterees with no definite limit
// all those arguments can be stored in a array using rest,hence there can no limit to the argumentys entered by the user

// copy of Math.min function using rest,it is similar to spread and implemeented using 3 dots
// function min(...args)
// {
//     //the arguments array is used
//     return args.reduce((min,ele)=>
//     {
//         if(ele<min)return ele;
//         else return min;
//     })
// }

// console.log(min(90,56,108,-34));
// console.log(min(1,2,3,4,5,6,7,8,9));

// Destructuring array
// let player=["steve","bruce","tony","stark","peter"];
// //array i scopied into different variables hence getting destructured
// let [winner,runner,...others]=player;
// console.log(winner);
// console.log(runner);
// console.log(others);

// //Destructuring object literal
// let stu={
//     name:"harith",
//     age:19,
//     cgpa:9.6
// }

// let {name:namee,age:agee}=stu;
// //the parameters name and age are fetched from object and are stored into variables "namee" and "agee"
// console.log(namee,agee);

// sqaure and sum the array elements and then find the avg
// function sqsum(arr)
// {
//     return arr.reduce((sum,ele)=>
//     {
//         return sum+=ele*ele;
//     })
// }
// let arr=[1,2,3,4,5,6,7,8,9,10];
// console.log(sqsum(arr));
// console.log(sqsum(arr)/arr.length);

// let newarr=arr.map((ele)=>ele+5);
// console.log(newarr);

// let namee=["harith","hello"];

// const neww=namee.reduce((acc,ele)=>
// {
//     return acc+ele.toUpperCase();
// },"")
// console.log(neww);

// function doubleAndReturnArgs(...arr)
// {
//     let  doublearr=arr.map((ele=>
//     {
//         return ele*2;
//     }
//     ))
//     return arr+doublearr;
// }

// console.log(doubleAndReturnArgs(1,2,3,4,5,6,7,8,9,10));

// function mergeObjects(obj1,obj2)
// {
//     return {...obj1,...obj2};
// }
// let o1={
//     name:"abc",
//     age:19
// }
// let o2={
//     namee:"bnm",
//     agee:20
// }
// console.log(mergeObjects(o1,o2));



























