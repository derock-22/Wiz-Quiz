const questions = [
    {
        question: "What is the main purpose of the wedding shoe game?",
        answers: [
            { text: "To determine who will pay the wedding bills", correct: false },
            { text: "To predict how many children the couple will have", correct: false },
            { text: "To see who knows the couple best", correct: true },
            { text: "To determine who will wear the pants in the relationship", correct: false },
        ]
    },
    {
        question: "What type shoes are typically used in the wedding shoe game?",
        answers: [
            { text: "High heels", correct: false },
            { text: "Flip flops", correct: false },
            { text: "Sneakers", correct: false },
            { text: "The bride and grooms own shoes", correct: true },
        ]
    },
    {
        question: "Who usually participate in the wedding shoe game?",
        answers: [
            { text: "The wedding party", correct: false },
            { text: "The bride and groom only", correct: true },
            { text: "The bride, groom, and their parents", correct: false },
            { text: "All the wedding guests", correct: false },
        ]
    },
    {
        question: "How many shoes are typically used in the wedding shoe game?",
        answers: [
            { text: "2", correct: true },
            { text: "4", correct: false },
            { text: "6", correct: false },
            { text: "8", correct: false },
        ]
    },
    {
        question: "What is the typical format of the wedding shoe game?",
        answers: [
            { text: "The DJ or MC", correct: true },
            { text: "The bride's father", correct: false },
            { text: "The groom's best man", correct: false },
            { text: "The wedding planner", correct: false },
        ]
    },
    {
        question: "What is the prize for winning the wedding shoe game?",
        answers: [
            { text: "A free Honeymoon", correct: false },
            { text: "A giftcard", correct: false },
            { text: "Bragging rights", correct: true },
            { text: "A special dance with the bride or groom", correct: false },
        ]
    },
    {
        question: "How long does the wedding shoe game typically last?",
        answers: [
            { text: "5 minutes", correct: false },
            { text: "10 minutes", correct: false },
            { text: "15 minutes", correct: true },
            { text: "30 minutes", correct: false },
        ]
    },
    {
        question: "What is the tone of the wedding shoe game?",
        answers: [
            { text: "Serious and formal", correct: false },
            { text: "Funny and lighthearted", correct: true },
            { text: "Romantic and sentimental", correct: false },
            { text: "Competitive and cutthroat", correct: false },
        ]
    },
    {
        question: "When is the wedding shoe game typically played?",
        answers: [
            { text: "During the ceremony", correct: false },
            { text: "During the reception", correct: true },
            { text: "During the rehearsal dinner", correct: false },
            { text: "During the post-wedding brunch", correct: false },
        ]
    },
    {
        question: "Who usually prepares the questions for the wedding shoe game?",
        answers: [
            { text: "The bride and groom", correct: true },
            { text: "The wedding planner", correct: false },
            { text: "The DJ or MC", correct: false },
            { text: "The wedding party", correct: false },
        ]
    },
    {
        question: "What type of questions are typically asked in the wedding shoe game?",
        answers: [
            { text: "Trivia questions about the couple's relationship", correct: true },
            { text: "Questions about the couple's interests and hobbies", correct: false },
            { text: "Questions about the couple's future plans", correct: false },
            { text: "Questions about the couple's families", correct: false },
        ]
    },
    {
        question: "How do the bride and groom answer the questions in the wedding shoe game?",
        answers: [
            { text: "By writing down their answers", correct: false },
            { text: "By shouting out their answers", correct: false },
            { text: "By holding up one of their shoes", correct: true },
            { text: "By giving a thumbs up or thumbs down", correct: false },
        ]
    },
    {
        question: "What is the purpose of the shoes in the wedding shoe game?",
        answers: [
            { text: "To symbolize the couple's commitment to each other", correct: false },
            { text: "To represent the couple's different personalities", correct: false },
            { text: "To serve as a prop for the game", correct: true },
            { text: "To be a prize winner", correct: false },
        ]
    },
    {
        question: "How many questions are typically asked in the wedding shoe game?",
        answers: [
            { text: "5-10", correct: false },
            { text: "10-15", correct: true },
            { text: "15-20", correct: false },
            { text: "20-25", correct: false },
        ]
    },
    {
        question: "What is the atmosphere like during the wedding shoe game?",
        answers: [
            { text: "Formal and serious", correct: false },
            { text: "Fun and playful", correct: true },
            { text: "Romantic and sentimental", correct: false },
            { text: "Competitive and tense", correct: false },
        ]
    },
    {
        question: "Who usually keeps score in the wedding shoe game?",
        answers: [
            { text: "The DJ or MC", correct: true },
            { text: "The wedding planner", correct: false },
            { text: "The bride and groom", correct: false },
            { text: "The wedding party", correct: false },
        ]
    },
    {
        question: "What happens if a bride or groom answers a question differently?",
        answers: [
            { text: "They gain a point", correct: false },
            { text: "They have to do a fun or penalty task", correct: true },
            { text: "They loose a point", correct: false},
            { text: "The game is paused while they discuss their answer", correct: false },
        ]
    },
    // {
    //     question: "?",
    //     answers: [
    //         { text: "", correct: false },
    //         { text: "", correct: false },
    //         { text: "", correct: true },
    //         { text: "", correct: false },
    //     ]
    // },
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            { text: "Kalahari", correct: false },
            { text: "Gobi", correct: false },
            { text: "Sahara", correct: false },
            { text: "Antarctica", correct: true },
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Asia", correct: false },
            { text: "Arctic", correct: false },
            { text: "Australia", correct: true },
            { text: "Africa", correct: false },
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answers: [
            { text: "Vatican City", correct: true },
            { text: "Bhutan", correct: false },
            { text: "Nepal", correct: false },
            { text: "Ethiopia", correct: false },
        ]
    },
    {
        question: "What is the capital of France?",
        answers: [
            { text: "London", correct: false },
            { text: "Paris", correct: true },
            { text: "Berlin", correct: false },
            { text: "Rome", correct: false }
        ]
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answers: [
            { text: "Harper Lee", correct: true },
            { text: "J.K. Rowling", correct: false },
            { text: "Stephen King", correct: false },
            { text: "Mark Twain", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for water?",
        answers: [
            { text: "H2O", correct: true },
            { text: "CO2", correct: false },
            { text: "O2", correct: false },
            { text: "NaCl", correct: false }
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text: "Leonardo da Vinci", correct: true },
            { text: "Vincent van Gogh", correct: false },
            { text: "Pablo Picasso", correct: false },
            { text: "Michelangelo", correct: false }
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Mars", correct: false },
            { text: "Saturn", correct: false }
        ]
    },
    {
        question: "Who is the Prime Minister of the United Kingdom?",
        answers: [
            { text: "Boris Johnson", correct: true },
            { text: "David Cameron", correct: false },
            { text: "Theresa May", correct: false },
            { text: "Tony Blair", correct: false }
        ]
    },
    {
        question: "What is the capital of Canada?",
        answers: [
            { text: "Ottawa", correct: true },
            { text: "Toronto", correct: false },
            { text: "Montreal", correct: false },
            { text: "Vancouver", correct: false }
        ]
    },
    {
        question: "How many branches of government are there in the United States?",
        answers: [
            { text: "Three", correct: true },
            { text: "Four", correct: false },
            { text: "Five", correct: false },
            { text: "Two", correct: false }
        ]
    },
    {
        question: "What is the name of the legislative body in the United States?",
        answers: [
            { text: "Congress", correct: true },
            { text: "Senate", correct: false },
            { text: "House of Representatives", correct: false },
            { text: "Parliament", correct: false }
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;


function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showscore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showscore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();

