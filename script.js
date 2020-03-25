console.log('loaded!')

let firstDiv = $('#first')

console.log(firstDiv.text())

let imageBox = $('#image')
let box1 = $('#box1')
let box2 = $('#box2')
let box3 = $('#box3')
let box4 = $('#box4')
let questionBox = $('#question')
let nextBtn = $('#next')
let scoreDisplay = $('#score')
let playerScore = 0
let turn = 0


let questions = [{
    prompt: "Which Pop Tart flavor is real?",
    answers: ["Maple Bacon", "Sushi", "Almond", "Green Tea"],
    image: "<img src='./img/poptart.jpg' />",
    correctAnswerIndex: 0
  }, {
    prompt: "How many lbs of potato chips does the average American consume?",
    answers: ["2lbs", "8lbs", "4lbs", "6lbs"],
    image: "<img src='./img/chips.jpg' />",
    correctAnswerIndex: 2
  }, { 
    prompt: "In what year were cheetos invented?",
    answers: ["1983", "1990", "1965", "1948"],
    image: "<img src='./img/cheeto.jpg' />",
    correctAnswerIndex: 3
  }, {
    prompt: "Where do Japanese style peanuts come from?",
    answers: ["USA", "Mexico", "Japan", "Australia"],
    image: "<img src='./img/peanuts.jpg' />",
    correctAnswerIndex: 1
    }, {
    prompt: "Which company invented Rocky Road Ice Cream?",
    answers: ["Breyers", "Dreyer", "Haagen-Dazs", "Tillamook"],
    image: "<img src='./img/rockyroad.jpg' />",
    correctAnswerIndex: 1
}];

const question = (i) => {
    imageBox.html(questions[i].image)
    questionBox.text(questions[i].prompt)
    box1.text(questions[i].answers[0])
    box2.text(questions[i].answers[1])
    box3.text(questions[i].answers[2])
    box4.text(questions[i].answers[3])
}

const score = (userAnswer) =>{
 let answerIndex = questions[turn].correctAnswerIndex;
  if (userAnswer == questions[turn].answers[answerIndex]) {
    playerScore++
    console.log("Score", playerScore)
        turnNumber()
  } else {
      turnNumber()
      console.log("Score", playerScore)
  }
}


const turnNumber = () => {
    if (turn < 4) {
        turn++
        question(turn)
  } else if (turn == 4) {
        scoreDisplay.text('You got a score of ' + playerScore + '/ 5!')
        box2.off()
        box1.off()
        box3.off()
        box4.off()
}}


const reset = () => {
    scoreDisplay.text(' ')
    turn = 0
    playerScore = 0
    question(0)
}

box1.click((event) => {
 const userAnswer = event.target.textContent;
 score(userAnswer);
})

box2.click((event) => {
 const userAnswer = event.target.textContent;
 score(userAnswer);
})

box3.click((event) => {
 const userAnswer = event.target.textContent;
 score(userAnswer);
})

box4.click((event) => {
 const userAnswer = event.target.textContent;
 score(userAnswer);
})
question(0)
nextBtn.click(reset)