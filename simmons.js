let gameseq=[];
let userseq=[];
let started=false;
let level=0;
let btns=["yellow","red","purple","green"];
let h2=document.querySelector("h2");
document.addEventListener("click",function(){
if(started==false){
    console.log("Game is started");
    started=true;
    levelUp();
}
})
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },100)
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },100)
}
function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`Level is ${level}`;
    let randIdx=Math.floor(Math.random()*3);
    let randomcolor=btns[randIdx];
    let randbtn=document.querySelector(`.${randomcolor}`);
    gameseq.push(randomcolor);
    console.log(gameseq);
    gameFlash(randbtn);
}
function checkAns(idx){
    // let idx=level-1;
    if(userseq[idx]==gameseq[idx]){
       if(userseq.length==gameseq.length){
        setTimeout(levelUp,1000);
       } 
    }
    else{
        h2.innerText=`Game over press any key to start`;
        reset();
    }
}

function btnpress(){
    console.log(this);
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userseq.push(userColor);
    checkAns(userseq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}
function reset(){
    gameseq=[];
    userseq=[];
    started=false;
    level=0;
}