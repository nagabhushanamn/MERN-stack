

//-----------------------------------------------------------

let questions = [
    {
        question: "inside which HTML element do we put the javascript?",
        choice1: "<script>",
        choice2: "<javascript>",
        choice3: "<js>",
        choice4: "<scripting>",
        answer: 1
    },
    {
        question: "how do you write 'HelloWorld' in an alert box",
        choice1: "msgBox('HelloWorld')",
        choice2: "alertBox('HelloWorld')",
        choice3: "msg('HelloWorld')",
        choice4: "alert('HelloWorld')",
        answer: 4
    }
]

//-----------------------------------------------------------


const questionEle = document.querySelector('#question')
const choiceElements = document.querySelectorAll('.choice-text')
const questionCounterEle=document.getElementById('question-counter')
const scoreEle=document.getElementById('score')



let currentQuestion = {}
let questionCounter = 0
let availableQuestions = [] // 
let acceptingAnswer = false
let score=0
const MAX_QUESTION = 2


const startQuiz = () => {
    score=0
    questionCounter = 0
    availableQuestions = [...questions] // load questions
    renderNextQuestion()
}


const renderNextQuestion = () => {

    if (availableQuestions.length === 0 || questionCounter >= 2) {
        window.location.assign("/quiz-end.html")// <a href="/quiz-end.html"><a>
        return
    }

    questionCounter++
    const questionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex]

    questionCounterEle.innerText=`${questionCounter}/${MAX_QUESTION}`

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


        const classToApply = Number.parseInt(selectedAnswer) === currentQuestion.answer ? 'correct' : 'incorrect'

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            renderNextQuestion()
        }, 1000)

    })
})

startQuiz()