let userSrc=0;
let compSrc=0;

const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userscore=document.querySelector("#user-src");
const compscore=document.querySelector("#comp-src");
choices.forEach(choice => {
    choice.addEventListener("click",()=>{
        const userChoice =choice.getAttribute("id");
        playGame(userChoice);
    })
});

const drawgame = (userChoice)=>{
    console.log("game draw");
    msg.innerText=`Game Draw :| Your ${userChoice} Draws ${userChoice}`;
    msg.style.backgroundColor="#081b31";
    
}
const showWinner=(userwin,userChoice,compChoice)=>{
    if(userwin){
        userSrc++;
        userscore.innerText= userSrc;
        msg.innerText=`You Win :) Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        console.log("you win");
    }else{
        compSrc++;
        compscore.innerText= compSrc;
        console.log("you lose");
        msg.innerText=`You lose :) ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
        
    }
}

const playGame = (userChoice) => {
    const compChoice=generateCompChoice();
    console.log("user=",userChoice);
    console.log("comp=",compChoice);
    
    
    if(userChoice===compChoice){ 
        drawgame(userChoice);
    }else{
        let userwin=true;
        if(userChoice==="rock"){
            userwin = compChoice==="paper" ? false:true;
        }else if(userChoice==="paper"){
            userwin = compChoice==="rock" ? true:false;
        }else{
            userwin = compChoice==="rock" ? false:true;
        }
        showWinner(userwin,userChoice,compChoice);
    }

}

const generateCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const random = Math.floor(Math.random() *3);
    return options[random];
}