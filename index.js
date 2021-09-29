var readlineSync = require("readline-sync");

var score = 0;
var userName;


var highScores = [
  {
    name: "Gagan",
    personalscore: 4,
  },

  {
    name: "Ravi",
    personalscore: 2,
  },
]

// array of objects
var questions = [{
  question: "When is my b'day date ",
  answer: "12"
},

{
  question: "What is my age",
  answer: "23"
},

 {
  question: "Where do I belong to? ",
  answer: "Ramgarh"
},
{
  question: "Where do I currently work? ",
  answer: "Nagarro"
}];

function welcome() {
  userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " to DO YOU KNOW Gagan?");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");


highScores.push({name:userName,personalscore:score});

  highScores.map(score => console.log(score.name, " : ", score.personalscore))
}


welcome();
game();
showScores();
