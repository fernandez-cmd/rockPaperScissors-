console.log('hello world')
// variable for buttons 
const rockbtn = document.getElementById('rock');
const paperbtn = document.getElementById('paper');
const scissorbtn = document.getElementById('scissors');

//console.log(rockbtn)
//console.log(paperbtn)
//console.log(scissorbtn)



const userchoice = []
//rock button functionality 
rockbtn.addEventListener('click', e =>{
    console.log(rockbtn.value)
    userchoice.push(rockbtn.value)
    console.log(userchoice)
});

//paper button functionality 

paperbtn.addEventListener('click', e =>{
    console.log(paperbtn.value)
    userchoice.push(paperbtn.value) 
    console.log(userchoice)
})
// scissorbutton functionality 

scissorbtn.addEventListener('click', e =>{
    console.log(scissorbtn.value)
    userchoice.push(scissorbtn.value)
    console.log(userchoice)
});

  ////// function below will get the user input 
    //code below selects the last item of the array 
 //console.log(getUserchoice(userchoice));


  const getUserchoice = () => {
    console.log(userchoice[userchoice.length - 1])
    if (
        userchoice[userchoice.length - 1] === 'rock' ||
        userchoice[userchoice.length - 1] === 'paper' ||
        userchoice[userchoice.length - 1] === 'scissors'
    ) {
      return userchoice[userchoice.length - 1];
    } else {
      console.log("ERROR");
    }
  };

 
//// function below to get cumputer input 
const getComputerChoice = () => {
    const randomNum = Math.floor(Math.random() * 3);
    switch (randomNum) {
      case 0:
        return "rock";
        break;
      case 1:
        return "paper";
        break;
      case 2:
        return "scissors";
        break;
    }
  };


 const compare = (user , com) =>{
    if (user === com){
        return 'Its a DRAW!'
    }



    if (user === 'rock'){
        if (com === 'paper'){
            return 'User LOST!'
        } else if ( com === 'scissors' ){
            return 'User WON!'
        }
    }

    if (user === 'paper'){
        if (com === 'rock'){
            return 'User WON!'
        } else if ( com === 'scissors' ){
            return 'User LOST!'
        }
    }


    if (user === 'scissors'){
        if (com === 'rock'){
            return 'User LOST!'
        } else if ( com === 'paper' ){
            return 'User WON!'
        }
    }







       



 };


 const change = document.getElementById('place');
 


rockbtn.addEventListener('click', e =>{
    
    if ( compare(getComputerChoice(), getUserchoice()) === 'User WON!'){
       return change.innerText= 'User WON!'

    } 
    else if ( compare(getComputerChoice(), getUserchoice()) === 'User LOST!'){
        return change.innerText='User LOST!'
    }
    else if ( compare(getComputerChoice(), getUserchoice()) === 'Its a DRAW!'){
        return change.innerText='Its a DRAW!'

    }
});

paperbtn.addEventListener('click', e =>{
    console.log(compare(getComputerChoice(), getUserchoice()));
    if ( compare(getComputerChoice(), getUserchoice()) === 'User WON!'){
        return change.innerText= 'User WON!'
 
     } 
     else if ( compare(getComputerChoice(), getUserchoice()) === 'User LOST!'){
         return change.innerText='User LOST!'
     }
     else if ( compare(getComputerChoice(), getUserchoice()) === 'Its a DRAW!'){
         return change.innerText='Its a DRAW!'
 
     }
})

scissorbtn.addEventListener('click', e =>{
    console.log(compare(getComputerChoice(), getUserchoice()));
    if ( compare(getComputerChoice(), getUserchoice()) === 'User WON!'){
        return change.innerText= 'User WON!'
 
     } 
     else if ( compare(getComputerChoice(), getUserchoice()) === 'User LOST!'){
         return change.innerText='User LOST!'
     }
     else if ( compare(getComputerChoice(), getUserchoice()) === 'Its a DRAW!'){
         return change.innerText='Its a DRAW!'
 
     }
});