document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("next-btn");
  const restartBtn = document.getElementById("restart-btn");
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");
  const resultContainer = document.getElementById("result-conatiner");
  const scoreDisplay = document.getElementById("score");

  const questions = [
    {
      question: "What is the capital of france",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },

    {
      question: "What is the boiling point of water at sea level?",
      choices: ["90°C", "100°C", "110°C", "120°C"],
      answer: "100°C",
    },

    {
      question: "Which planet is known as the Red planet",
      choices: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "Which country is famous for the Great Pyramid of Giza?",
      choices: ["Mexico", "Greece", "Egypt", "India"],
      answer: "Egypt",
    },
    {
      question: "What is the largest mammal in the world?",
      choices: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      answer: "Blue Whale",
    },
  ];

  let currentQuestionIndex = 0;
  let score = 0;

  startBtn.addEventListener("click", startQuiz);

  function startQuiz() {
    startBtn.classList.add("hidden");
    resultContainer.classList.add("hidden");
    resultContainer.classList.remove("align");
    questionContainer.classList.remove("hidden");
    questionText.classList.remove("hidden");

    showQuestion();
  }

  function showQuestion() {
    nextBtn.classList.add("hidden");
    questionText.textContent = questions[currentQuestionIndex].question;
    choicesList.innerHTML = ""; // clears thye previous choices
    questions[currentQuestionIndex].choices.forEach((choice) => {
      const li = document.createElement("li");
      li.textContent = choice;

      li.addEventListener("click", (e) => {
        if (e.target.tagName === "LI") {
          li.classList.add("selectedLi");
        }
        selectAnswer(choice);
      });
      choicesList.appendChild(li);
    });
  }

  function selectAnswer(choice) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    // li.classList.add("selectedLi");

    if (choice === correctAnswer) {
      score++;
    }
    nextBtn.classList.remove("hidden");
  }

  nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  });

  function showResult() {
    questionContainer.classList.add("hidden");
    questionContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    resultContainer.classList.add("align");
    scoreDisplay.textContent = `Score is : ${score} out of ${questions.length}`;
  }

  restartBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add("hidden");
    resultContainer.classList.remove("align");
    startQuiz();
  });
});
