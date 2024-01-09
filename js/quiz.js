const questions = [
    {
        question: "What is the Jew’s dress?",
        answers: [
            { text: "Kippa", correct: true},
            { text: "Tunic", correct: false},
            { text: "Hijab", correct: false},
            { text: "Sail", correct: false},
        ]
    },
    {
        question: "What is Shabbat in Judaism, and when is it observed? ?",
        answers: [
            { text: "A day of fasting observed on Mondays", correct: false},
            { text: "The weekly day of rest observed from Friday evening to Saturday evening ", correct: true},
            { text: "A special holiday celebrated for a week in spring", correct: false},
            { text: "A monthly gathering for communal prayers", correct: false},
        ]
    },
    {
        question: "How are kosher foods defined in Jewish dietary laws?",
        answers: [
            { text: "No wine", correct: false},
            { text: "No meat", correct: false},
            { text: "Only vegan", correct: false},
            { text: "All food adhere to Torah", correct: true},
        ]
    },
    {
        question: "What does the concept of Tikkun Olam emphasize in Judaism?",
        answers: [
            { text: "The importance of personal wealth", correct: false},
            { text: "Repairing the environment only", correct: false},
            { text: "Help others like yourself", correct: true},
            { text: "Focusing solely on spiritual growth", correct: false},
        ]
    },
    {
        question: "Can you name three examples of commandments (Mitzvot) in Judaism?",
        answers: [
            { text: "Celebrating birthdays, reading newspapers, and gardening            ", correct: false},
            { text: "Keeping kosher, giving to charity, and observing Shabbat", correct: true},
            { text: "Going to the gym, learning foreign languages, and shopping", correct: false},
            { text: "Watching movies, playing sports, and traveling", correct: false},
        ]
    },
    {
        question: "What is the book of Jewish",
        answers: [
            { text: "Torah", correct: true},
            { text: "Coran", correct: false},
            { text: "Bible", correct: false},
            { text: "W3 Dictiionnary", correct: false},
        ]
    },
    {
        question: "How do Jewish families typically observe Shabbat?",
        answers: [
            { text: "By working continuously for 24 hours", correct: false},
            { text: "By abstaining from using technology", correct: false},
            { text: "By coming together for special meals and prayers ", correct: true},
            { text: "By going on a vacation", correct: false},
        ]
    },
    {
        question: "What is the first law of the Torah",
        answers: [
            { text: "Eat only at breakfast", correct: false},
            { text: "Learn to code at Devlopper Institute", correct: false},
            { text: "There is only one God", correct: true},
            { text: "Not to kill", correct: false},
        ]
    },
    {
        question: "How many Jews died in World War II?",
        answers: [
            { text: "6 000 000", correct: true},
            { text: "2 000 000", correct: false},
            { text: "20 000", correct: false},
            { text: "1000", correct: false},
        ]
    },
    {
        question: "Since when does Israel belong to the Jews historically? (Approximately)",
        answers: [
            { text: "80 years", correct: false},
            { text: "3000 years", correct: true},
            { text: "500 years", correct: false},
            { text: "1 000 000 years ", correct: false},
        ]
    },

]

const questionElement = document.getElementById("question")
const answerButtons = document.getElementById("answer-button")
const nextButton = document.getElementById("next-btn")

let currentQuestionIndex = 0
let score = 0

function startQuiz(){
    currentQuestionIndex= 0
    score= 0
    nextButton.innerHTML = "Next"
    showQuestion()
}

function showQuestion(){
    resetState()
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add("btn")
        answerButtons.appendChild(button)  
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
    })
}


function resetState(){
    nextButton.style.display = "none"
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true"
    if(isCorrect){
        selectedBtn.classList.add("correct")
        score++
    }else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true
    })
    nextButton.style.display = "block"
}

function showScore(){
    resetState()
    questionElement.innerHTML = "Your score " + score + "/" + questions.length
    nextButton.innerHTML = "Play Again"
    nextButton.style.display = "block"
}

function handleNextButton(){
    currentQuestionIndex++
    if(currentQuestionIndex < questions.length){
        showQuestion()
    }else{
        showScore()
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex< questions.length){
        handleNextButton()
    }else{
        startQuiz()
    }
})

startQuiz()