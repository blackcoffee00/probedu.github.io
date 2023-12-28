let startQuiz1 = document.getElementById("startQuiz1");
let instructionDisp = document.getElementById("instruction1");
let quizDisp = document.getElementById("quiz1");
let quizHeader = document.getElementById("quiz-head1");
let questionElement = document.getElementById("question1");
let optionA = document.getElementById("opt1A");
let optionB = document.getElementById("opt1B");
let optionC = document.getElementById("opt1C");
let optionD = document.getElementById("opt1D");
let nextButton = document.getElementById("next-btn1");
let timeCount = document.getElementById("timer_sec1");
let scoreDisp = document.getElementById("score1");
let scoreText = document.getElementById("score-text1");
let score1Element = document.getElementById("Score1");
let time1Element = document.getElementById("Time1");
let storedScore1 = JSON.parse(localStorage.getItem("myScore1"));

let currentQuestionIndex;
let score;
let index;
let timer;
let startTime;
let totalScore;
let totalQuizTime;
let myScore1;

let questions = [
    {
      question:"If you flip a fair coin three times, what is the probability of getting exactly two heads?",
      answers: ["1/4", "3/8", "1/2", "1/8"]
    },
    {
      question:"If a month is picked at random, what is the probability that the month will start with M?",
      answers: ["1/12", "1/6", "2/6", "4/12"]
    },
    {
      question:"When you roll a pair of dice, how many outcomes are there?",
      answers: ["6", "12", "36", "24"]
    },
    {
      question:"A bag contains 4 red balls and 6 blue balls. What is the probability of drawing a red ball?",
      answers: ["2/5", "3/5", "1/4", "2/3"]
    },
    {
      question:"What is the probability of rolling an even number on a six-sided die?",
      answers: ["1/6", "1/2", "2/3", "1/3"]
    },
    {
      question:"A spinner has 8 equal sections, numbered 1 through 8. What is the probability of landing on an even number?",
      answers: ["1/2", "1/8", "1/4", "3/8"]
    },
    {
      question:"If you draw a card from a standard deck of 52 cards, what is the probability of drawing a spade?",
      answers: ["1/13", "1/4", "1/52", "1/2"]
    },
    {
      question:"If the probability of an event A is 0.3, what is the probability of the complement of A?",
      answers: ["0.7", "0.3", "0.5", "1.0"]
    },
    {
      question:"If you draw two cards from a deck without replacement, what is the probability that both cards are hearts?",
      answers: ["1/26", "1/13", "1/17", "1/221"]
    },
    {
      question:"If the probability of rain tomorrow is 0.6 and the probability of not raining is 0.4, what is the probability of either raining or not raining?",
      answers: ["1.0", "0.1", "0.8", "0.6"]
    },
];

let correctAnswerIndexes = [1, 1, 2, 0, 1, 0, 1, 0, 2, 0];
  

startQuiz1.addEventListener("click", () => {
    instructionDisp.classList.add("d-none");
    scoreDisp.classList.add("d-none");
    quizDisp.classList.remove("d-none");
    startTime = new Date();

    currentQuestionIndex = 0;
    score = 0;
    index = 0;
    displayQuestion();
});

optionA.addEventListener("click", () => {
    index = 0;
    optionA.classList.add("active");
    optionB.classList.remove("active");
    optionC.classList.remove("active");
    optionD.classList.remove("active");
    nextButton.style.visibility = "visible";
});

optionB.addEventListener("click", () => {
    index = 1;
    optionA.classList.remove("active");
    optionB.classList.add("active");
    optionC.classList.remove("active");
    optionD.classList.remove("active");
    nextButton.style.visibility = "visible";
});

optionC.addEventListener("click", () => {
    index = 2;
    optionA.classList.remove("active");
    optionB.classList.remove("active");
    optionC.classList.add("active");
    optionD.classList.remove("active");
    nextButton.style.visibility = "visible";
});

optionD.addEventListener("click", () => {
    index = 3;
    optionA.classList.remove("active");
    optionB.classList.remove("active");
    optionC.classList.remove("active");
    optionD.classList.add("active");
    nextButton.style.visibility = "visible";
});

function startTimer(seconds) {
    let timeLeft = seconds;

    function updateTimer() {
        timeCount.innerHTML = timeLeft + "s";
        if (timeLeft == 0) {
            clearTimeout(timer);
            showScore();
        } else {
            timeLeft--;
            timer = setTimeout(updateTimer, 1000);
        }
    }
    
    updateTimer();
}

function displayQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    quizHeader.innerHTML = currentQuestionIndex + 1 + " of " + questions.length + " Questions";
    questionElement.innerHTML = currentQuestion.question;

    let buttons = document.querySelectorAll("#ans-btns1 button");
    currentQuestion.answers.forEach((answer, index) => {
        buttons[index].innerHTML = answer;
    });
      
    if ((currentQuestionIndex + 1) < questions.length) {
        nextButton.innerHTML = "Next";
    } else if ((currentQuestionIndex + 1) == questions.length) {
        nextButton.innerHTML = "Submit";
    }

    clearTimeout(timer);
    startTimer(20);
}

nextButton.addEventListener("click", () => {
    let correctAnswerIndex = correctAnswerIndexes[currentQuestionIndex];
    if (correctAnswerIndex == index) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        resetButtonStyle();
        displayQuestion();
    } else {
        clearTimeout(timer);
        showScore();
    }

    nextButton.style.visibility = "hidden";
});

function resetButtonStyle() {
    optionA.classList.remove("active");
    optionB.classList.remove("active");
    optionC.classList.remove("active");
    optionD.classList.remove("active");
}

score1Element.innerHTML = "High Score: " + storedScore1.score1;
time1Element.innerHTML = "Best Time: " + storedScore1.time1 + " seconds";

function showScore() {
    totalScore = score;
    let endTime = new Date();
    totalQuizTime = calculateTime(startTime, endTime);

    scoreText.innerHTML = "Your score is " + totalScore + " out of " + questions.length + "<br>Total time: " + totalQuizTime + " seconds";

    if (!storedScore1) {
        storedScore1 = {
            score1: 0,
            time1: 200.00
        };
    }

    if (totalScore > storedScore1.score1) {
        storedScore1.score1 = totalScore;
        storedScore1.time1 = totalQuizTime;
    } else if (totalScore == storedScore1.score1) {
        storedScore1.score1 = totalScore;
        if (totalQuizTime < storedScore1.time1) {
            storedScore1.time1 = totalQuizTime;
        }
    }
    localStorage.setItem('myScore1', JSON.stringify(storedScore1));

    quizDisp.classList.add("d-none");
    scoreDisp.classList.remove("d-none");
}

function calculateTime(start, end) {
    let timeDiff = (end - start) / 1000;
    return timeDiff.toFixed(2);
}

function restartButton1() {
    instructionDisp.classList.remove("d-none");
    scoreDisp.classList.add("d-none");
    optionA.classList.remove("active");
    optionB.classList.remove("active");
    optionC.classList.remove("active");
    optionD.classList.remove("active");
}

function exitButton1() {
    instructionDisp.classList.remove("d-none");
    scoreDisp.classList.add("d-none");
    optionA.classList.remove("active");
    optionB.classList.remove("active");
    optionC.classList.remove("active");
    optionD.classList.remove("active");

    score1Element.innerHTML = "High Score: " + storedScore1.score1;
    time1Element.innerHTML = "Best Time: " + storedScore1.time1 + " seconds";
}