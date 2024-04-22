//create a randomNum -> must be between 0 & 100

let randomNum = Math.floor(Math.random() * (100 - 0 )) + 1
console.log(randomNum)

//An array of sarcastic message with 5 possible 0ptions
let sarcasticInput = ["you've just scored a golden ticket to the ultimate comedy of errors!", "you're now enrolled in the School of Shenanigans and you're top of the class!", "you've unlocked the gateway to the land of laughter and lunacy!", "Congratulations, you're officially the mayor of the town called 'Hilarity Ensues'!", "Congratulations, you're now a card-carrying member of the Society of Silly Surprises!"]
let sarcasticIndex = Math.floor((Math.random() * (5 - 0))) + 0
let sarcasticMessage = sarcasticInput[sarcasticIndex]
console.log(sarcasticMessage)

// Getting elements 

let userInputNum = document.querySelector('.userGuessNumberInput')
//GET DISPALY DIV
let displayDiv = document.querySelector('.submitButResult')
//Target submit button 
let button = document.querySelector('.submitBut');
// Get game section tag
let gameSec = document.querySelector('.gameSection')
//Get reload button
let reloadButton = document.querySelector('.reloadPage')


//Numbers of times button is clicked
let numOfClick = 0


button.addEventListener('click', (e)=>{
    e.preventDefault()
    //create a p tag and add a class
  let pTag =  document.createElement('p');
  pTag.classList.add('userNum')

  //get num of times button is clicked
  numOfClick++
  let numbersOfAttemptLeft = 3 - numOfClick
  attemptsTag = document.querySelector('.numOfAttempts')
  attemptsTag.innerText = `Number of attempts left : ${numbersOfAttemptLeft}`
  console.log(numbersOfAttemptLeft)
  console.log(numOfClick)
  console.log(userInputNum)
  console.log(randomNum)

  if(displayDiv.childNodes.length > 0){
    displayDiv.innerHTML = ''
}

if(numOfClick === 3){
  
    button.disabled=true
    button.style.backgroundColor = "grey"
    button.style.color ="white"
    button.style.weight = 'bolder'
    button.style.display = "none"
    reloadButton.style.display = "block"
    pTag.innerText = "You have reached the maximum number of trial"
    //create funny text tag
    let funnyReply = document.createElement('p')
    funnyReply.classList.add('funnyReplyStyle')

    // gameSec.appendChild(funnyReply)
    funnyReply.innerHTML = `<p>${sarcasticMessage} &#128514;, The correct number is  <span class="emphasy">${randomNum}</span> </p>`
    gameSec.appendChild(funnyReply)
}


// Logic
  if(userInputNum.value === randomNum ){
    pTag.innerText = "CONGRATULATIONS! You guessed right"
}else if(userInputNum.value < randomNum ){
    pTag.innerText = "Sorry your input is lesser than the generated random number.  Try again!"
}else if(userInputNum.value > randomNum){
    pTag.innerText = "Sorry your input is greater than the generated randomnumber.  Try again!"
}else{
    pTag.innerText ="End"
}


// Reload the current page
reloadButton.addEventListener('click', (e)=>{
  e.preventDefault()
  window.location.reload();
})



//   pTag.innerText = userInputNum.value
  displayDiv.appendChild(pTag)
    
})




