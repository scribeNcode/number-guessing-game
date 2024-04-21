//create a randomNum -> must be between 0 & 100

let randomNum = Math.floor(Math.random() * (100 - 0 )) + 1
console.log(randomNum)

//An array of sarcastic message with 5 0ptions
let sarcasticInput = ["hubbyy", "woo", "intoo", "olodo", "shame"]
let sarcasticIndex = Math.floor((Math.random() * (5 - 0))) + 0
let sarcasticMessage = sarcasticInput[sarcasticIndex]
console.log(sarcasticMessage)


let userInputNum = document.querySelector('.userGuessNumberInput')
//GET DISPALY DIV
let displayDiv = document.querySelector('.submitButResult')
//Target submit button 
let button = document.querySelector('.submitBut');
// Get form tag
let gameSec = document.querySelector('.gameSection')

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
  attemptsTag.innerText = numbersOfAttemptLeft
  console.log(numbersOfAttemptLeft)
  console.log(numOfClick)
  console.log(userInputNum)
  console.log(randomNum)

  if(displayDiv.childNodes.length > 0){
    displayDiv.innerHTML = ''
}

if(numOfClick === 3){
    button.disabled=true
    button.style.backgroundColor = "#e5e5e5"
    pTag.innerText = "You have reached the maximum number of trial"
    //create funny text tag
    let funnyReply = document.createElement('p')
    funnyReply.classList.add('funnyReplyStyle')
    funnyReply.innerText = `${sarcasticMessage}, The correct number is ${randomNum}`
    gameSec.appendChild(funnyReply)
}

  if(userInputNum.value === randomNum ){
    pTag.innerText = "CONGRATULATIONS!"
}else if(userInputNum.value < randomNum ){
    pTag.innerText = "It is lesser than the number"
}else if(userInputNum.value > randomNum){
    pTag.innerText = "It is greater than the number"
}else{
    pTag.innerText ="End"
}

//   pTag.innerText = userInputNum.value
  displayDiv.appendChild(pTag)
    
})







// luke 21 / 12 vrs 5