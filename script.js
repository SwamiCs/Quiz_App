const questions = [
    {
        question: "Which Satavahana ruler composed Gathasaptashati?",
        answers: [
            {text: "Simuka", correct: false},
            {text: "Gautamiputra Satkarni", correct: false},
            {text: "Pulumayi", correct: false},
            {text: "Hala", correct: true}
        ]
    },
        {
        question: "Which of the following Chola kings was the first to capture Maldives?",
        answers: [
            {text: "Rajaraja", correct: true},
            {text: "Rajendra I", correct: false},
            {text: "Rajadhiraja", correct: false},
            {text: "Rajendra II", correct: false}
        ]
    },
        {
        question: "The Chalukya king, Pulakesin II defeated Harshavardhan on the banks of which river?",
        answers: [
            {text: "Narmada", correct: true},
            {text: "Kaveri", correct: false},
            {text: "Niranjana", correct: false},
            {text: "Rijupalika", correct: false}
        ]
    },
        {
        question: "Which rock edict describes Asoka’s first Dhamma Yatra to Bodhgaya and Bodhi Tree?",
        answers: [
            {text: "Major Rock Edict V", correct: false},
            {text: "Major Rock Edict VI", correct: false},
            {text: "Major Rock Edict VII", correct: false},
            {text: "Major Rock Edict VIII", correct: true}
        ]
    },
        {
        question: "Who was Paura during the Maurya empire?",
        answers: [
            {text: "Governor of the city", correct: true},
            {text: "Chief Judge", correct: false},
            {text: "Mantri", correct: false},
            {text: "Dandapal", correct: false}
        ]
    },
        {
        question: "Who was the founder of Gupta Dynasty?",
        answers: [
            {text: "Sri Gupta", correct: true},
            {text: "Samudragupta", correct: false},
            {text: "Chandragupta I", correct: false},
            {text: "Chandragupta II", correct: false}
        ]
    },
        {
        question: "Who among the following foreign traveller came to India during the reign of Chandragupta II?",
        answers: [
            {text: "Hiuen-Tsang", correct: false},
            {text: "Fa Hein", correct: true},
            {text: "Megasthenes", correct: false},
            {text: "Ibn Batuta", correct: false}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Your Score ${score} out of ${questions.length}!`;
    nextButton.innerHTML - "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", () =>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz;
    }
});

startQuiz();