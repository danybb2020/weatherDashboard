var startButton = document.getElementById("start-btn");
var questionTime = 60;
var penaltyTime = 5;
var clock = document.getElementById("clock");
var timer ;
var changingQuestions = document.getElementById("question-container");
var changingAnswers = document.getElementById("answer-buttons");
var currentIndex =  0;



function startQuiz (){
   console.log('Started');
   startButton.classList.add('hide');
   changingQuestions.classList.remove('hide');
   timer = setInterval(startTime, 1000);
   setNextQuestion();

}

function setNextQuestion(){
   var currentQuestion = questions [currentIndex];
   changingQuestions.textContent=currentQuestion.question;
   currentQuestion.answers.forEach(function(choice, i) {
      var newBtn= document.createElement("button");
      newBtn.setAttribute ("value", choice);
      newBtn.textContent =  choice;
      newBtn.onclick = selectAnswer;
      changingAnswers.appendChild(newBtn)
   });
}

function selectAnswer (){
  ///text value of the button is the same as your correct answer 
  console.log(this.getAttribute("value"));
  console.log(questions[currentIndex].correctAnswer );
  if (this.getAttribute("value") == questions[currentIndex].correctAnswer +'' ) {
    
    // get rid of old questions
    var oldButtonsArr = document.querySelectorAll('#answer-buttons button');
    oldButtonsArr.forEach(function(btn,i) {
      btn.remove();
    });

    ///corrent index goes up one 
    currentIndex ++;
    setNextQuestion();

  } else {
  questionTime = questionTime-penaltyTime;
  this.setAttribute("disabled", "disabled");
  this.textContent =  "nope";


    
  }

}

function stopGame (){
clearInterval(timer);
console.log ("End of quiz");
}

function startTime () {
  questionTime --;
  clock.textContent= questionTime ;
  if (questionTime <= 0){

  stopGame ();

  }
  
}
const questions = [
  {
    question: "Javascript is different than Java?",
    answers: [
      true, false, "both", "neither"
    
    ],
    correctAnswer: true

  },

  {
    question: "Which is not true of Javascript?",
    answers: [
      "Answer1: can be inserted into HTML pages ", "Answer2: Javascript is not a coding language" , "Answer 3: is a client-side as well as server side scripting languageh", "Answer4: JavaScript is also an Object based Programming language"
       
    ],
    correctAnswer: "Answer2: Javascript is not a coding language"
  },

  {
    question: "What is not true of an array?",
    answers: [
      "Answer1: Is is object lets you store multiple values in a single variable ", "Answer 2: It stores a fixed-size sequential collection of elements of the same type." , "Answer3: An array is used to store a collection of data,", "Answer4: It is not a collection of variables of the same type"
       
    ],
    correctAnswer: "Answer4: It is not a collection of variables of the same type"
  },

  {
    question: "Which company developed JavaScript?",
    answers: [
      "Answer1: Microsoft", "Answer 2: Netscape" , "Answer3: Google", "Answer4: Apple "
    
    ],
    correctAnswer: "Answer 2: Netscape"
  }

];
 startButton.onclick=startQuiz
