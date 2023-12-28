let instruction2Disp = document.getElementById("instruction2");
let quiz2Disp = document.getElementById("quiz2");
let quiz2Header = document.getElementById("quiz-head2");
let questionElement2 = document.getElementById("question2");
let option2A = document.getElementById("opt2A");
let option2B = document.getElementById("opt2B");
let option2C = document.getElementById("opt2C");
let option2D = document.getElementById("opt2D");
let nextButton2 = document.getElementById("next-btn2");
let timeCount2 = document.getElementById("timer_sec2");
let score2Disp = document.getElementById("score2");
let scoreText2 = document.getElementById("score-text2");
let score2Element = document.getElementById("Score2");
let time2Element = document.getElementById("Time2");
let storedScore2 = JSON.parse(localStorage.getItem("myScore2"));

let currentQuestionIndex2;
let score_2;
let index2;
let timer2;
let startTime2;
let totalScore2;
let totalQuizTime2;
let myScore2;

let questions2 = [
    {
        question2:"Events are independent if the occurrence of one event does not affect the probability of the other.",
        answers2: ["True", "False"]
    },
    {
        question2:"You flip a fair coin twice. What is the probability of getting heads on the first flip and tails on the second?",
        answers2: ["1/4", "1/2", "1/3", "1/4"]
    },
    {
        question2:"A bag contains 5 red balls and 4 green balls. If you draw one ball, replace it, and then draw a second ball, what is the probability of getting a red ball both times?",
        answers2: ["5/36", "1/9", "5/16", "1/4"]
    },
    {
        question2:"You roll a fair six-sided die. What is the probability of rolling a 3 on the first roll and a 4 on the second roll?",
        answers2: ["1/12", "1/6", "1/36", "1/18"]
    },
    {
        question2:"In a deck of cards, you draw one card and do not replace it. What is the probability of drawing two kings in a row?",
        answers2: ["1/221", "1/2210", "1/169", "1/52"]
    },
    {
        question2:"You select a marble from a bag containing 3 red marbles and 5 blue marbles. If you do not replace the marble, what is the probability of drawing two red marbles in a row?",
        answers2: ["3/40", "3/64", "3/56", "3/35",]
    },
    {
        question2:"You draw a card from a deck, record the outcome, and then draw a second card without replacing the first. What is the probability of drawing two aces in a row?",
        answers2: ["1/221", "1/169", "1/132", "1/2210",]
    },
    {
        question2:"A box contains 4 red balls and 3 green balls. If you draw two balls without replacement, what is the probability of getting a red ball and then a green ball?",
        answers2: ["2/21", "4/21", "3/14", "7/24",]
    },
    {
        question2:"You roll a fair six-sided die and then flip a fair coin. What is the probability of rolling a 3 on the die and getting heads on the coin flip?",
        answers2: ["1/6", "1/12", "1/3", "1/18",]
    },
    {
        question2:"A bag contains 2 yellow marbles, 3 red marbles, and 4 blue marbles. If you draw two marbles without replacement, what is the probability of getting a yellow marble and then a red marble?",
        answers2: ["1/12", "1/15", "1/18", "1/24",]
    },
];

let correctAnswerIndexes2 = [0, 1, 2, 0, 2, 0, 3, 1, 3, 2];
  

function startQuiz2() {
    instruction2Disp.classList.add("d-none");
    score2Disp.classList.add("d-none");
    quiz2Disp.classList.remove("d-none");
    startTime2 = new Date();

    currentQuestionIndex2 = 0;
    score_2 = 0;
    index2 = 0;
    displayQuestion2();
}

option2A.addEventListener("click", () => {
    index2 = 0;
    option2A.classList.add("active");
    option2B.classList.remove("active");
    option2C.classList.remove("active");
    option2D.classList.remove("active");
    nextButton2.style.visibility = "visible";
});

option2B.addEventListener("click", () => {
    index2 = 1;
    option2A.classList.remove("active");
    option2B.classList.add("active");
    option2C.classList.remove("active");
    option2D.classList.remove("active");
    nextButton2.style.visibility = "visible";
});

option2C.addEventListener("click", () => {
    index2 = 2;
    option2A.classList.remove("active");
    option2B.classList.remove("active");
    option2C.classList.add("active");
    option2D.classList.remove("active");
    nextButton2.style.visibility = "visible";
});

option2D.addEventListener("click", () => {
    index2 = 3;
    option2A.classList.remove("active");
    option2B.classList.remove("active");
    option2C.classList.remove("active");
    option2D.classList.add("active");
    nextButton2.style.visibility = "visible";
});

function startTimer2(seconds) {
    let timeLeft = seconds;

    function updateTimer() {
        timeCount2.innerHTML = timeLeft + "s";
        if (timeLeft == 0) {
            clearTimeout(timer2);
            showScore2();
        } else {
            timeLeft--;
            timer2 = setTimeout(updateTimer, 1000);
        }
    }
    
    updateTimer();
}

function displayQuestion2() {
    let currentQuestion2 = questions2[currentQuestionIndex2];
    quiz2Header.innerHTML = currentQuestionIndex2 + 1 + " of " + questions2.length + " Questions";
    questionElement2.innerHTML = currentQuestion2.question2;

    let buttons2 = document.querySelectorAll("#ans-btns2 button");
    currentQuestion2.answers2.forEach((answer, index) => {
        buttons2[index].innerHTML = answer;
    });
      
    if (currentQuestionIndex2 == 0) {
        option2C.classList.add("d-none");
        option2D.classList.add("d-none");
    } else {
        option2C.classList.remove("d-none");
        option2D.classList.remove("d-none");
    }
    if ((currentQuestionIndex2 + 1) < questions2.length) {
        nextButton2.innerHTML = "Next";
    } else if ((currentQuestionIndex2 + 1) == questions2.length) {
        nextButton2.innerHTML = "Submit";
    }

    clearTimeout(timer2);
    startTimer2(20);
}

nextButton2.addEventListener("click", () => {
    let correctAnswerIndex2 = correctAnswerIndexes2[currentQuestionIndex2];
    if (correctAnswerIndex2 == index2) {
        score_2++;
    }

    currentQuestionIndex2++;
    if (currentQuestionIndex2 < questions2.length) {
        resetButtonStyle2();
        displayQuestion2();
    } else {
        clearTimeout(timer2);
        showScore2();
    }

    nextButton2.style.visibility = "hidden";
});

function resetButtonStyle2() {
    option2A.classList.remove("active");
    option2B.classList.remove("active");
    option2C.classList.remove("active");
    option2D.classList.remove("active");
}

score2Element.innerHTML = "High Score: " + storedScore2.score2;
time2Element.innerHTML = "Best Time: " + storedScore2.time2 + " seconds";

function showScore2() {
    totalScore2 = score_2;
    let endTime2 = new Date();
    totalQuizTime2 = calculateTime(startTime2, endTime2);

    scoreText2.innerHTML = "Your score is " + totalScore2 + " out of " + questions2.length + "<br>Total time: " + totalQuizTime2 + " seconds";

    if (!storedScore2) {
        storedScore2 = {
            score2: 0,
            time2: 200.00
        };
    }
    if (totalScore2 > storedScore2.score2) {
        storedScore2.score2 = totalScore2;
        storedScore2.time2 = totalQuizTime2;
    } else if (totalScore2 == storedScore2.score2) {
        storedScore2.score2 = totalScore2;
        if (totalQuizTime2 < storedScore2.time2) {
            storedScore2.time2 = totalQuizTime2;
        }
    }
    localStorage.setItem('myScore2', JSON.stringify(storedScore2));
    quiz2Disp.classList.add("d-none");
    score2Disp.classList.remove("d-none");
}

function calculateTime(start, end) {
    let timeDiff2 = (end - start) / 1000;
    return timeDiff2.toFixed(2);
}

function restartButton2() {
    instruction2Disp.classList.remove("d-none");
    score2Disp.classList.add("d-none");
    option2A.classList.remove("active");
    option2B.classList.remove("active");
    option2C.classList.remove("active");
    option2D.classList.remove("active");
}

function exitButton2() {
    instruction2Disp.classList.remove("d-none");
    score2Disp.classList.add("d-none");
    option2A.classList.remove("active");
    option2B.classList.remove("active");
    option2C.classList.remove("active");
    option2D.classList.remove("active");

    score2Element.innerHTML = "High Score: " + storedScore2.score2;
    time2Element.innerHTML = "Best Time: " + storedScore2.time2 + " seconds";
}