
const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    // Add more questions here
];

const quizForm = document.getElementById('quizForm');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const resultElement = document.getElementById('result');

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    const current = quizData[currentQuestion];

    questionElement.textContent = current.question;
    optionsElement.innerHTML = '';

    current.options.forEach(option => {
        const label = document.createElement('label');
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'option';
        radio.value = option;
        label.textContent = option;
        optionsElement.appendChild(label);
        optionsElement.appendChild(radio);
        optionsElement.appendChild(document.createElement('br'));
    });
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');

    if (!selectedOption) {
        alert('Please select an option');
        return;
    }

    const userAnswer = selectedOption.value;
    const correctAnswer = quizData[currentQuestion].answer;

    if (userAnswer === correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    resultElement.textContent = `You scored ${score} out of ${quizData.length}.`;
}

quizForm.addEventListener('submit', function(event) {
    event.preventDefault();
    checkAnswer();
});

// Display the first question when the page loads
displayQuestion();
