const computerChoice = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')

const arr = ["rock","paper","scissors"]

const possibleChoices = document.querySelectorAll('button')

let userChoice;
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click' , (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice

    const generateComputerChoice = (arr) => {
        const randomNumber = Math.floor(Math.random() * 3)
        const item = arr[randomNumber]

        return item;
    }

    computerChoice.innerHTML = generateComputerChoice(arr);


    if(computerChoice.innerHTML === userChoice){
        resultDisplay.innerHTML = "Draw!"
    }else if(computerChoice.innerHTML=="rock" && userChoice=="scissors" || computerChoice.innerHTML=="scissors" && userChoice=="paper" || computerChoice.innerHTML=="paper" && userChoice=="rock"){
        resultDisplay.innerHTML = "Computer Wins!"
    }else {
        resultDisplay.innerHTML = "User wins!"
    }
}))