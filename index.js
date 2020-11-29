var readlineSync = require('readline-sync');

var userName = readlineSync.question("What's your name? ");

console.log("Welcome to DO YOU KNOW pranav " + userName);
let score = 0;

var questions = [
  {
    question: "Where do I live? ",
    answer: "Daman"
  },
  {
    question: "Where is my school ",
    answer: "Daman"
  },
  {
    question: "Where is my college ",
    answer: "Surat"
  },
  {
    question: "What's my hobby ",
    answer: "reading books"
  },
  {
    question: "What are my interests ",
    answer: "Coding"
  },
]

  console.log("GoodLuck to you!!!.");
  function play(question, answer)
{
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() == answer.toUpperCase())
  {
    console.log("Right!");
    score += 1;
    console.log("Score: " + score);
  }
  else
  {
    console.log("Wrong!");
    console.log("Score: " + score);
  }
  console.log("----------");
 }
 for(var i = 0;i<questions.length;i++)
 {
   var userQuestion = questions[i];
   play(userQuestion.question, userQuestion.answer);
 }

console.log("YAY! You scored: " + score);