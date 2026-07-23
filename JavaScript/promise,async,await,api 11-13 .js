// const h1 = document.querySelector("h1");

// function changecolor(color, delay, nextcolorchange) {
//     setTimeout(() => {
        
//         if (nextcolorchange) nextcolorchange();
//     }, delay);
// }

// changecolor("red", 1000, () => {
//     changecolor("green", 1000, () => {
//         changecolor("orange", 1000);
//     });
// });

// Rewriting the function using promises to avoid callback hell

// function changecolor(color,delay)
// {
//     return new Promise((resolve,reject)=>
//     {
//         setTimeout(()=>
//         {
//             let rand=Math.floor(Math.random()*5+1);//generating a random error to test a possibble hypothetical error condition appearing which can lead to promise rejection
//             if(rand>3)
//             {
//                 reject("promise rejected");
//             }
//           h1.style.color = color;
//           console.log("color is changed to",color);
//           resolve("Color is changed to",color);
//         },delay);
        
//     })
// }

// //Promise chaining
// changecolor("red",1000)
// .then((result)=>{
//    console.log("success: ",result);
//    return changecolor("green",1000);
// })
// .then((result)=>{
//     console.log("success: ",result);
//     return changecolor("blue",1000);
// })
// .then((result)=>{
//     console.log("success: ",result);
// })
// .catch((error)=>{
//     console.log("error:",error);
// })

// callbacks nesting- leads to callback hell

// function savetodb(data)
// {
//     return new Promise((resolve,reject)=>
//     {
//         let intspeed=Math.floor(Math.random()*10+1);
//         if(intspeed>4)
//         {
//             resolve("success: data was saved");
//         }
//         else{
//             reject("failure: data was not saved weak connection");
//         }

            
//     });

// }

// Making the function even better by making promises and awaits
// await keyword halts the execution of other async functions until the current specified function's promise is fulfilled(execution is complete)
// async function demo(){
//    await changecolor("red",1000);
//      await changecolor("orange",1000);
//        await changecolor("green",1000);
//        await changecolor("blue",1000);

//        let a=5;
//        console.log(a);
//        console.log("new number:",a+3);

// }



// savetodb("abc")
// .then((result)=>{
//     console.log("data1 saved");
//     console.log("Result:",result);
//     return savetodb("bnm");
// })
// .then((result)=>{
//     console.log("data2 saved");
//     console.log("Result:",result);
//     return savetodb("xyz");
// })
// .then(()=>{
//     console.log("data3 saved");
// })
// .catch((error)=>
// {
//     console.log("Result:",error);
//     console.log("data save failure due to slow internet speed");
// })

// async function greet()
// {
//     fdfvdf;
//     return "hello";
// }

// greet()
// .then((result)=>{
//     console.log("promise was resolved",result);
// })
// .catch((e)=>{
//     console.log("promise was rejected",e);
// })

// let jsondata='{"fact": "A cat’s jaw can’t move sideways, so a cat can’t chew large chunks of food.","length": 74}';

// console.log(JSON.parse(jsondata));

// Calling API
// let url="https://catfact.ninja/fact";

// fetch(url)
// .then((res)=>{
//     console.log(res);
//     return res.json();
// })
// .then((data)=>{
//     console.log(data);
//     console.log("data1: ",data.fact);
//     return fetch(url);
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     console.log("data2: ",data.fact);
// })
// console.log("API calls ahppen asynchronously ,and hence this statement gets executed first");

// Using async and await with fetch to call API's
// async function apicalls()
// {
//     let res= await fetch(url);
//     let data=await res.json();
//     console.log(data);

//     let res1= await fetch(url);
//     let data1=await res1.json();
//     console.log(data1);

//     console.log("hii");//here this statement gets executed at the last after the api calls,bcoz of await command
// }

// API calls using axios
// Cat facts random facts api
// async function getFacts()
// {
//     let res= await axios.get(url);//using axios,we can directly get data in js object format,rather than getting it in json and converting to js obj later
//     return res.data.fact;
// }
// let b=document.querySelector("button");
// let p=document.querySelector("p");
// b.addEventListener("click", async()=>{//we should add async here so that we can wait for the response to get completed
//     p.innerText= await getFacts();//await is neccecary here bcoz, if the api call is not yet completed,we might get the promise as a output and not the data
//     //hence await makes sure that the promise is completely fulfilled before the data is printed

// })

// random dog pictures api
// let url2="https://dog.ceo/api/breeds/image/random";
// async function getImage()
// {
//     try{
//     let res= await axios.get(url2);
//     console.log(res);
//     return res.data.message;
//     }
//     catch(err)
//     {
//       console.log(err);
//     }
    
        
    
    
// }
// let b=document.querySelector("button");
// let img=document.querySelector("img");
// b.addEventListener("click", async()=>{
//     img.src= await getImage();
// });

// generate random jokes using api call specifying headers
// let url3="https://icanhazdadjoke.com/";
// async function getJokes()
// {
//     try{
//     let config={headers:{Accept:"application/json"}};
//     let res= await axios.get(url3,config);
//     console.log(res.data.joke);
//     }catch(err)
//     {
//         console.log("Error: ",err);
//     }
    
// }

// //Generate list of universities based on the country input of the user
// let inp=document.querySelector("input");
// let btn=document.querySelector("button");
// let list=document.querySelector("ul");

// async function uniList(country)
// {
//     let url="http://universities.hipolabs.com/search?name=";
//     let res=await axios.get(url+country);
//     console.log(res.data);
//     return res.data;
// }

// btn.addEventListener("click", async ()=>{
//     list.innerText="";
//     let country=inp.value;
//     let res= await uniList(country);

//     for(uni of res)
//     {
//         console.log(uni.name);
//         let li=document.createElement("li");
//         li.innerText=uni.name;
//         list.appendChild(li);
//     }
// })






  



    
    








