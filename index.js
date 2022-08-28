var readlineSync = require("readline-sync")
var score = 0
var userName = readlineSync.question("Please Enter Your Name :")
console.log("Welcome ", userName)
function play(question, answer) {
  var userAnswer = readlineSync.question(question)
  if (userAnswer === answer) {
    console.log("You are right")
    score += 10
  }
  else {
    console.log("You are wrong ")
    score -= 10
  }
  console.log("You scored :", score)
  console.log("------------")
  if (score == 20) { console.log("You reached level 2") }
  if (score == 40)
    console.log("You reached level 3")
  console.log("Your final score are: ", score)
}

var questionOne =
{
  question: "Who build the Taj Mahal ",
  answer: "Shah Jahan",
}
var questionTwo =
{
  question: "Where is Taj Mahal located ",
  answer: "Agra",
}
var questionThree =
{
  question: "What colour marble is Taj Mahal made of ",
  answer: "white",
}
var questionFour =
{
  question: "Is Taj Mahal among the seven wonders of the world? ",
  answer: "yes",
}
var questionFive =
{
  question: "Did you like this quiz? ",
  answer: "yes",
}
var quiz = [questionOne, questionTwo, questionThree, questionFour, questionFive]
for (i = 0; i < quiz.length; i++) {
  var currentQuestion = quiz[i]
  play(currentQuestion.question, currentQuestion.answer)
}
