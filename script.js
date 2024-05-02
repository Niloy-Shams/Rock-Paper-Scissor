let usersChoice, botsChoice, winner;
let options=document.querySelectorAll(".option");

let bot=()=>{
    botsChoice = options[Math.floor(Math.random()*3)].getAttribute("id");
}

let result=document.querySelector("#instruction");
let userScore=0, botScore=0;

options.forEach((option)=>{
    option.addEventListener("click", ()=>{
        usersChoice=option.getAttribute("id");
        bot();
        
        if(usersChoice===botsChoice) winner="draw";
        else if(usersChoice=="rock"){
            if(botsChoice=="paper") winner="bot";
            else winner="user";
        }
        else if(usersChoice=="paper"){
            if(botsChoice=="scissor") winner="bot";
            else winner="user";
        }
        else if(usersChoice=="scissor"){
            if(botsChoice=="rock") winner="bot";
            else winner="user";
        }

        console.log(usersChoice, botsChoice, winner);
        if(winner=="draw"){
            result.textContent=`Drawn! Both choose ${usersChoice}`;
            result.style.backgroundColor="#e4c40d";
        }
        else if(winner=="bot"){
            result.textContent=`lost! ${botsChoice} beat ${usersChoice}`;
            result.style.backgroundColor="red";
            botScore++;
            document.querySelector("#botScore").textContent=botScore;
        }
        else{
            result.textContent=`win! ${usersChoice} beat ${botsChoice}`;
            result.style.backgroundColor="green";
            userScore++;
            document.querySelector("#userScore").textContent=userScore;
        }
    })
});




