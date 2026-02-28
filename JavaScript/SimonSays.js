let gameSeq=[];
let userSeq=[];
let level=0;
let started=false;
let h2=document.querySelector("h2");
let colors=["red","orange","green","blue"];//index 0-3

document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        console.log("Game started");
        levelUp();
    }
})

function levelUp()
{
    userSeq=[];
    level++;
    console.log("Level Up")
    h2.innerText=`Level ${level}`;
    //Choose a random color
    let rdmIdx=Math.floor(Math.random()*3); // will generate random number 0-3
    let randomcol=colors[rdmIdx];
    // console.log(rdmIdx);
    let btn=document.querySelector(`.${randomcol}`);
    // console.log(randomcol);
    gameSeq.push(randomcol);
    console.log("Game Sequence: ",gameSeq);
    gameFlash(btn);

}
function gameFlash(btn)//when random color is flashed by the game(computer)
{
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);


}
function checkAns(idx){
    
    if(gameSeq[idx]===userSeq[idx])
        {
            console.log("same value");
            setTimeout(levelUp,1000);

        }
    else{
        console.log("different value");
        h2.innerText="Game Over!!! Press any key to satrt the game again";
    }
}
function userFlash(btn)//when user selects a color
{
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },200);


}
function btnPress()//user presses the button
{
    console.log("button was pressed");
    let btn=this;
    let usercolor=this.getAttribute("id");
    userSeq.push(usercolor);
    console.log("UserSequence: ",userSeq);
    userFlash(btn);
    checkAns(userSeq.length-1);
}

let btns=document.querySelectorAll(".btn");
for(btn of btns)
{
    btn.addEventListener("click",btnPress);
}