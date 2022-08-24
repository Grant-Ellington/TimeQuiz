// var- object that holds the questions
var questions = [
    {
        title: "What is Norma's favorite toy",
        multiChoice: ["the bird", "the mouse", "the treat leaf", "the worm"]
        answer: "the bird"
    }
]

// start timer variable

let secondsLeft = 76;

//element that displays the time

let timer = document.getElementById('timer');

//div for high Score
let scoresDiv = document.getElementById('score-div');

let buttondiv = div.getElementById('button');

//button for high score

let viewScoreBtn = document.getElementById('view-score');

//div to hold results

let results = document.getElementById('results');

//div for choices 

let choices = document.getElementById('choices');

//an array which store the high score

let emptyArray = JSON.parse(window.localStorage.getItem('highScores'));

//track questions

var questionCount = 0;

//score that is tracked

let score = 0;


//removes uneeded elements. '...' copies the els; thus it is checking all els.; el can geneerate dom elements of be a place holder for dom elements; therefore el is being inacted on any dom element 
const removeEls = (...els) => {
    for(let el of els)el.remove();
}

// fuction to set timer

function setTimer() {
    
}
// This fuction dispplays the questions.
function diplayQuestions () {
    removeEls(startButton);

    if(quiestionCount < questions.length) {            //If the questions gone throyugh tracked through question count is less than the number fo questions-tracked through the question,length parameter
        questionDiv.innerHTML = questions[questionCount].title;
        choices.textContent = ""; 
        // this creates the buttons within the questions via the question object. muti choice
        for(let i = 0; i<questions[questionCount].multiChoice.length; i++) {
            let el =document.createElement('button');.
            el.innerText = questions[questionCount].multiChoice[i]; // fills in the text for the buttton
            el.addEventListener("click", function (event) {
                event.stopPropagation();
                // below checks if the question answer is correct and determines the path of wether to go to the next question or  ove away from it.
                if (el.innerText === questions[questionCount].answer) {
                    score += secondsLeft;
                }else {
                    score -= 10;
                    secondsLeft = secondsLeft -15;
                }
                questionDiv.innerHTML = '';

                if(questioncount === questionCount.length) {
                    return;
                }   else {
                    questionCount++;
                    displayQuestion();
            }
            });
        }
    
    
    }

}

