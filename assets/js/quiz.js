var container = document.querySelector('.container');
var question = document.querySelector('.question');
var timerEl = document.getElementById('timer');
var optioncontainer = document.getElementById()

let questions = ["Commonly used data types DO not include:", "The condition in an if / else statement is enclosed with ______.","Arrays in JavaScript can be used to store ______.","String values must be enclosed within ______ when being assigned to variables.","A very useful tool used during development and debugging for printing content to the debugger is:",]
let answers1 = ["strings","quotes", "numbers and strings","commas","JavaScript"]
let answers2 = ["booleans","curly brackets", "other arrays","curly brackets","terminal/bash"]
let answers3 = ["alerts","parenthesis", "booleans","quotes","for loops"]
let answers4 = ["numbers","square brackets", "all of the above","parenthesis","console.log"]
let correct = [3,3,4,3,4]


function game() {
    var timeLeft = 75;

    var timer = setInterval(function() {
      timerEl.textContent = timeLeft;
      timeLeft--;
      if (timeLeft === 0){
        clearInterval(timer);
        localStorage.setItem("score",0);
        location.href="over.html";
      }
    }, 1000);

    for (var i = 0;i < 5;i++){
        question = questions[i];
    
      }


    localStorage.setItem("score",timeLeft);
    location.href="over.html";
}

  game();