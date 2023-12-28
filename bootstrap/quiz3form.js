let instruction3Disp = document.getElementById("instruction3");
let quiz3Disp = document.getElementById("quiz3");
let quiz3Header = document.getElementById("quiz-head3");
let questionElement3 = document.getElementById("question3");
let option3A = document.getElementById("opt3A");
let option3B = document.getElementById("opt3B");
let option3C = document.getElementById("opt3C");
let option3D = document.getElementById("opt3D");
let nextButton3 = document.getElementById("next-btn3");
let timeCount3 = document.getElementById("timer_sec3");
let score3Disp = document.getElementById("score3");
let scoreText3 = document.getElementById("score-text3");
let score3Element = document.getElementById("Score3");
let time3Element = document.getElementById("Time3");
let storedScore3 = JSON.parse(localStorage.getItem("myScore3"));

let currentQuestionIndex3;
let score_3;
let index3;
let timer3;
let startTime3;
let totalScore3;
let totalQuizTime3;
let myScore3;

let questions3 = [
    {
        question3:"In a deck of cards, what is the probability of drawing either a spade or a heart?",
        answers3: ["1/4", "1/2", "1/3", "1/13"]
    },
    {
        question3:"A six-sided die is rolled. What is the probability of rolling either a 2 or a 4?",
        answers3: ["1/6", "1/3", "1/2", "1/4"]
    },
    {
        question3:"If you flip a fair coin, what is the probability of getting either heads or tails?",
        answers3: ["0", "1/2", "1", "1/4"]
    },
    {
        question3:"You draw a card from a standard deck. What is the probability of drawing either a red card or a face card?",
        answers3: ["1/4", "1/2", "3/4", "1"]
    },
    {
        question3:"If you randomly select a person from a group, what is the probability of them being either a teenager or an adult?",
        answers3: ["1/2", "1/4", "1", "0"]
    },
    {
        question3:"Two six-sided dice are rolled. What is the probability of the sum being either 7 or 11?",
        answers3: ["1/6", "1/12", "1/8", "1/4"]
    },
    {
        question3:"In a bag, there are 5 red marbles and 3 green marbles. What is the probability of drawing either a red marble or a green marble?",
        answers3: ["3/8", "1/2", "5/8", "1"]
    },
    {
        question3:"You roll a fair six-sided die. What is the probability of rolling either an even number or a prime number?",
        answers3: ["1/3", "2/3", "1/2", "1/6"]
    },
    {
        question3:"If you spin a spinner with 4 equal sections numbered 1 through 4, what is the probability of landing on either an odd number or an even number?",
        answers3: ["1/2", "3/4", "1", "1/4"]
    },
    {
        question3:"You draw a card from a standard deck. What is the probability of drawing either a black card or a numbered card?",
        answers3: ["1/2", "1/4", "3/4", "1/3"]
    },
];

let correctAnswerIndexes3 = [1, 2, 2, 2, 2, 0, 2, 1, 0, 3];
  

function startQuiz3() {
    instruction3Disp.classList.add("d-none");
    score3Disp.classList.add("d-none");
    quiz3Disp.classList.remove("d-none");
    startTime3 = new Date();

    currentQuestionIndex3 = 0;
    score_3 = 0;
    index3 = 0;
    displayQuestion3();
}

option3A.addEventListener("click", () => {
    index3 = 0;
    option3A.classList.add("active");
    option3B.classList.remove("active");
    option3C.classList.remove("active");
    option3D.classList.remove("active");
    nextButton3.style.visibility = "visible";
});

option3B.addEventListener("click", () => {
    index3 = 1;
    option3A.classList.remove("active");
    option3B.classList.add("active");
    option3C.classList.remove("active");
    option3D.classList.remove("active");
    nextButton3.style.visibility = "visible";
});

option3C.addEventListener("click", () => {
    index3 = 2;
    option3A.classList.remove("active");
    option3B.classList.remove("active");
    option3C.classList.add("active");
    option3D.classList.remove("active");
    nextButton3.style.visibility = "visible";
});

option3D.addEventListener("click", () => {
    index3 = 3;
    option3A.classList.remove("active");
    option3B.classList.remove("active");
    option3C.classList.remove("active");
    option3D.classList.add("active");
    nextButton3.style.visibility = "visible";
});

function startTimer3(seconds) {
    let timeLeft = seconds;

    function updateTimer() {
        timeCount3.innerHTML = timeLeft + "s";
        if (timeLeft == 0) {
            clearTimeout(timer3);
            showScore3();
        } else {
            timeLeft--;
            timer3 = setTimeout(updateTimer, 1000);
        }
    }
    
    updateTimer();
}

function displayQuestion3() {
    let currentQuestion3 = questions3[currentQuestionIndex3];
    quiz3Header.innerHTML = currentQuestionIndex3 + 1 + " of " + questions3.length + " Questions";
    questionElement3.innerHTML = currentQuestion3.question3;

    let buttons3 = document.querySelectorAll("#ans-btns3 button");
    currentQuestion3.answers3.forEach((answer, index) => {
        buttons3[index].innerHTML = answer;
    });
      
    if ((currentQuestionIndex3 + 1) < questions3.length) {
        nextButton3.innerHTML = "Next";
    } else if ((currentQuestionIndex3 + 1) == questions3.length) {
        nextButton3.innerHTML = "Submit";
    }

    clearTimeout(timer3);
    startTimer3(20);
}

nextButton3.addEventListener("click", () => {
    let correctAnswerIndex3 = correctAnswerIndexes3[currentQuestionIndex3];
    if (correctAnswerIndex3 == index3) {
        score_3++;
    }

    currentQuestionIndex3++;
    if (currentQuestionIndex3 < questions3.length) {
        resetButtonStyle3();
        displayQuestion3();
    } else {
        clearTimeout(timer3);
        showScore3();
    }

    nextButton3.style.visibility = "hidden";
});

function resetButtonStyle3() {
    option3A.classList.remove("active");
    option3B.classList.remove("active");
    option3C.classList.remove("active");
    option3D.classList.remove("active");
}

score3Element.innerHTML = "High Score: " + storedScore3.score3;
time3Element.innerHTML = "Best Time: " + storedScore3.time3 + " seconds";

function showScore3() {
    totalScore3 = score_3;
    let endTime3 = new Date();
    totalQuizTime3 = calculateTime(startTime3, endTime3);

    scoreText3.innerHTML = "Your score is " + totalScore3 + " out of " + questions3.length + "<br>Total time: " + totalQuizTime3 + " seconds";

    if (!storedScore3) {
        storedScore3 = {
            score3: 0,
            time3: 200.00
        };
    }
    if (totalScore3 > storedScore3.score3) {
        storedScore3.score3 = totalScore3;
        storedScore3.time3 = totalQuizTime3;
    } else if (totalScore3 == storedScore3.score3) {
        storedScore3.score3 = totalScore3;
        if (totalQuizTime3 < storedScore3.time3) {
            storedScore3.time3 = totalQuizTime3;
        }
    }
    localStorage.setItem('myScore3', JSON.stringify(storedScore3));
    quiz3Disp.classList.add("d-none");
    score3Disp.classList.remove("d-none");
}

function calculateTime(start, end) {
    let timeDiff3 = (end - start) / 1000;
    return timeDiff3.toFixed(2);
}

function restartButton3() {
    instruction3Disp.classList.remove("d-none");
    score3Disp.classList.add("d-none");
    option3A.classList.remove("active");
    option3B.classList.remove("active");
    option3C.classList.remove("active");
    option3D.classList.remove("active");
}

function exitButton3() {
    instruction3Disp.classList.remove("d-none");
    score3Disp.classList.add("d-none");
    option3A.classList.remove("active");
    option3B.classList.remove("active");
    option3C.classList.remove("active");
    option3D.classList.remove("active");

    score3Element.innerHTML = "High Score: " + storedScore3.score3;
    time3Element.innerHTML = "Best Time: " + storedScore3.time3 + " seconds";
}