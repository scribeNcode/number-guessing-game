//create a randomNum -> must be between 0 & 100

let randomNum = Math.floor(Math.random() * (100 - 0 )) + 1
console.log(randomNum)

//An array of sarcastic message with 5 0ptions
let sarcasticInput = ["hubbyy", "woo", "intoo", "olodo", "shame"]
let sarcasticIndex = Math.floor((Math.random() * (5 - 0))) + 0
let sarcasticMessage = sarcasticInput[sarcasticIndex]
console.log(sarcasticMessage)

//Take userInput
let inPutTag = document.querySelector('.userGuessNumber')
let submitButton = document.querySelector('.submitBut')
let displayDiv = document.querySelector('submitButResult')

submitButton.addEventListener('click',(e)=>{
    e.preventDefault()
    let userTypedNum = document.createElement('p')
    userTypedNum.classList.add('userTypedP')
    userTypedNum.innerText = inPutTag.value
    displayDiv.appendChild(userTypedNum)
})





// luke 21 / 12 vrs 5