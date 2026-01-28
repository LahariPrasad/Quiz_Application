document.addEventListener("DOMContentLoaded", () => {

  const startBtn = document.getElementById("start-btn");
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");
  const nextBtn = document.getElementById("next-btn");
  const resultContainer = document.getElementById("result-container");
  const scoreEl = document.getElementById("score");
  const restartBtn = document.getElementById("restart-btn");

  const quizData = [
    {
      question: "what is capital of France?",
      choices: [
        "paris","london","berlin","newyork"
      ],
      correct: 0
    },
    {
      question: "who is best husband in the world?",
      choices: ["ramesh", "suresh","prasad","girish"],
      correct: 2
    },
    {
      question: "which planet is known as the red planet?",
      choices: ["mars","venus","jupitor","saturn"],
      correct: 0
    },
      
  ];

  let currentQuestion = 0;
  let score = 0;
  let answered = false;

  startBtn.addEventListener("click", startQuiz);
  nextBtn.addEventListener("click", nextQuestion);
  restartBtn.addEventListener("click", restartQuiz);

  function startQuiz() {
    startBtn.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    loadQuestion();
  }

  function loadQuestion() {
    answered = false;
    nextBtn.classList.add("hidden");
    choicesList.innerHTML = "";

    const currentData = quizData[currentQuestion];
    questionText.innerText = currentData.question;

    currentData.choices.forEach((choice, index) => {
      const li = document.createElement("li");
      li.innerText = choice;

      li.onclick = () => selectAnswer(index);
      choicesList.appendChild(li);
    });
  }

  function selectAnswer(index) {
    if (answered) return;
    answered = true;

    if (index === quizData[currentQuestion].correct) {
      score++;
    }
    nextBtn.classList.remove("hidden");
  }

  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }

  function showResult() {
    questionContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreEl.innerText = `${score} / ${quizData.length}`;
  }

  function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    resultContainer.classList.add("hidden");
    startBtn.classList.remove("hidden");
  }

});
