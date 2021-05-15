import questionsBank from './questionBank.js';

const question = document.querySelector("#question");
const answers = document.getElementsByName("answers");
const onSubmit = document.querySelector("#onSubmit");
let currentIndex = 0;
let score = 0;

const loadQuiz = () => {
  const currentQuestion = questionsBank[currentIndex];

  question.innerHTML = currentQuestion.question;
  document.querySelector("#option1").value = currentQuestion.option1;
  document.querySelector("#option2").value = currentQuestion.option2;
  document.querySelector("#option3").value = currentQuestion.option3;
  document.querySelector("#option4").value = currentQuestion.option4;
  document.querySelector("#option1_text").innerHTML = currentQuestion.option1;
  document.querySelector("#option2_text").innerHTML = currentQuestion.option2;
  document.querySelector("#option3_text").innerHTML = currentQuestion.option3;
  document.querySelector("#option4_text").innerHTML = currentQuestion.option4;
}

const isQuestionSelected = () => {
  let answer;

  answers.forEach(item => {
    if (item.checked) {
      answer = item;
    }
  })

  return answer;
}

const unselectOptions = () => {
  answers.forEach(item => {
    item.checked = false;
  })
}

onSubmit.addEventListener("click", () => {
  // if radio button is not selected, don't submit
  const answer = isQuestionSelected();

  if (answer) {
    if (answer.value === questionsBank[currentIndex].correct) {
      score++;
    }
    currentIndex++; 
  };
  // after submit, remove radio selected value
  unselectOptions();
  // total score after end of quiz
  if (currentIndex > (questionsBank.length - 1)) {
    question.innerHTML = `<h2>You have answered ${score} out of ${questionsBank.length} questions.</h2>`;
    document.querySelector("#questionsList").style.display = 'none';
    onSubmit.innerHTML = `<a onclick="location.reload()">Reload</a>`;
  } else {
    loadQuiz();
  }
})

loadQuiz();
