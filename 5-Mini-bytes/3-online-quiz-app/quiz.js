

//-----------------------------------------------------------

let questions = []
let url = "questions.json"

// XHR or Fetch
let xhr = new XMLHttpRequest();

//----------------------------------------
// sync
//----------------------------------------

// xhr.open('GET', url, false)
// xhr.send()
// let jsonText = xhr.responseText;
// questions = JSON.parse(jsonText)

//----------------------------------------
// async
//----------------------------------------
xhr.open('GET', url, true)
xhr.send()
document.getElementById("loading-status").innerText = "loading...."

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        let jsonText = xhr.responseText;
        questions = JSON.parse(jsonText)
        debugger
        document.getElementById("loading-status").innerText = ""
        startQuiz()
    }
}



//-----------------------------------------------------------


const questionEle = document.querySelector('#question')
const choiceElements = document.querySelectorAll('.choice-text')
const questionCounterEle = document.getElementById('question-counter')
const scoreEle = document.getElementById('score')
const progressBarFill = document.getElementById('progress-bar-fill')



let currentQuestion = {}
let questionCounter = 0
let availableQuestions = [] // 
let acceptingAnswer = false
let score = 0
const MAX_QUESTION = 2


const startQuiz = () => {
    score = 0
    questionCounter = 0
    availableQuestions = [...questions] // load questions
    renderNextQuestion()
}


const renderNextQuestion = () => {

    if (availableQuestions.length === 0 || questionCounter >= 2) {
        localStorage.setItem("mostRecentScore", score);
        location.assign("/quiz-end.html")// <a href="/quiz-end.html"><a>
        return
    }

    questionCounter++
    const questionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex]

    questionCounterEle.innerText = `${questionCounter}/${MAX_QUESTION}`
    questionEle.innerText = currentQuestion.question
    choiceElements.forEach(choiceEle => {
        const number = choiceEle.dataset["number"]
        choiceEle.innerText = currentQuestion[`choice${number}`]
    })

    availableQuestions.splice(questionIndex, 1)
    acceptingAnswer = true

}

choiceElements.forEach(choiceEle => {
    choiceEle.addEventListener('click', e => {

        if (!acceptingAnswer) return
        acceptingAnswer = false

        const selectedChoice = e.target
        const selectedAnswer = Number.parseInt(selectedChoice.dataset['number'])


        //const classToApply = Number.parseInt(selectedAnswer) === currentQuestion.answer ? 'correct' : 'incorrect'
        let classToApply = ''
        if (Number.parseInt(selectedAnswer) === currentQuestion.answer) {
            classToApply = "correct"
            score++
        } else {
            classToApply = "incorrect"
        }

        scoreEle.innerText = score
        selectedChoice.parentElement.classList.add(classToApply)

        progressBarFill.style.width = `${(questionCounter / MAX_QUESTION * 100)}%`
        // progressBarFill.innerText=`${(questionCounter/MAX_QUESTION)*100}%`

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            renderNextQuestion()
        }, 1000)

    })
})

