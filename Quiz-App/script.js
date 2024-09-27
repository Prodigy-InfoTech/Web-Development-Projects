const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const scoreElement = document.getElementById('score')

let shuffledQuestions, currentQuestionIndex, score

console.log("Made with 💗 by Avnee")

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  score = 0
  scoreElement.innerText = 'Score: 0'
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (correct) {
    score++
    scoreElement.innerText = 'Score: ' + score
  }
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What is 2 + 2?',
    answers: [
      { text: '4', correct: true },
      { text: '22', correct: false }
    ]
  },
  {
    question: 'What is the scientific name of a butterfly?',
    answers: [
      { text: 'Apis', correct: false },
      { text: 'Coleoptera', correct: false },
      { text: 'Formicidae', correct: false },
      { text: 'Rhopalocera', correct: true }
    ]
  },
  {
    question: 'How hot is the surface of the sun?',
    answers: [
      { text: '1,233 K', correct: false },
      { text: '5,778 K', correct: true },
      { text: '12,130 K', correct: false },
      { text: '101,300 K', correct: false }
    ]
  },
  {
    question: 'What is the capital of Spain?',
    answers: [
      { text: 'Berlin', correct: false },
      { text: 'Buenos Aires', correct: false },
      { text: 'Madrid', correct: true },
      { text: 'San Juan', correct: false }
    ]
  },
  {
    question: 'How far is the moon from Earth?',
    answers: [
      { text: '7,918 miles (12,742 km)', correct: false },
      { text: '86,881 miles (139,822 km)', correct: false },
      { text: '238,400 miles (384,400 km)', correct: true },
      { text: '35,980,000 miles (57,910,000 km)', correct: false }
    ]
  },
  {
    question: 'When did The Avengers come out?',
    answers: [
      { text: 'May 2, 2008', correct: false },
      { text: 'May 4, 2012', correct: true },
      { text: 'May 3, 2013', correct: false },
      { text: 'April 4, 2014', correct: false }
    ]
  },
  {
    question: 'Is web development fun?',
    answers: [
      { text: 'Kinda', correct: false },
      { text: 'YES!!!', correct: true },
      { text: 'Um no', correct: false },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'What is 65 times 52?',
    answers: [
      { text: '117', correct: false },
      { text: '3120', correct: false },
      { text: '3380', correct: true },
      { text: '3520', correct: false }
    ]
  }
]