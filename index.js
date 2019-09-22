'use strict';

let QUESTIONS = [
    {'question': 'What is Dwight\'s last name?',
    'choice1': 'Halpert',
    'choice2': 'Schrute',
    'choice3': 'Bernard',
    'choice4': 'Scott',
    'correctAnswer':'Schrute'},

    {'question': 'What is Jim\'s last name?',
    'choice1': 'Scott',
    'choice2': 'Beezly',
    'choice3': 'Halpert',
    'choice4': 'Malone',
    'correctAnswer': 'Halpert'},

    {'question': 'Who was Pam first engaged to?',
    'choice1': 'Jim',
    'choice2': 'Kevin',
    'choice3': 'Roy',
    'choice4': 'Dwight',
    'correctAnswer': 'Roy'},
    
    {'question': 'Who did Michael Scott hit with a car?',
    'choice1': 'Pam',
    'choice2': 'Jan',
    'choice3': 'Meredith',
    'choice4': 'Phyllis',
    'correctAnswer': 'Meredith'},

    {'question': 'What did Andy call Jim?',
    'choice1': 'Big Tuna',
    'choice2': 'Fish',
    'choice3': 'Mentor',
    'choice4': 'Big Fish',
    'correctAnswer': 'Big Tuna'},
]



let numberQuestion = 0;
let testScore = 0;

function generateQuizQuestions() {
    console.log('Generating quiz question string');

    console.log(questionNumber);
    const quizQuestion = `
    <section>
        <form id='multipleChoice'>
            <legend>${QUESTIONS[questionNumber].question}</legend>
            <div class='buttonChoices'>
                <input type="radio" id='${QUESTIONS[questionNumber].option1}'  name= 'question' value="${QUESTIONS[questionNumber].option1}"><label for='${QUESTIONS[questionNumber].option1}'>${QUESTIONS[questionNumber].option1}</label>
                <input type="radio" id='${QUESTIONS[questionNumber].option2}'  name= 'question' value="${QUESTIONS[questionNumber].option2}"><label for='${QUESTIONS[questionNumber].option2}'>${QUESTIONS[questionNumber].option2}</label>
                <input type="radio" id='${QUESTIONS[questionNumber].option3}'  name= 'question' value="${QUESTIONS[questionNumber].option3}"><label for='${QUESTIONS[questionNumber].option3}'>${QUESTIONS[questionNumber].option3}</label>
                <input type="radio" id='${QUESTIONS[questionNumber].option4}'  name= 'question' value="${QUESTIONS[questionNumber].option4}"><label for='${QUESTIONS[questionNumber].option4}'>${QUESTIONS[questionNumber].option4}</label>
            </div>
            <div class='answerButton'>
                <button type='submit' id='theAnswerButton'>Answer</button>
    </form>
</section>
        </form>
    </section>`;
    return quizQuestion; 
}

function startQuiz() {
    let quizQuestion = generateQuizQuestions();
    
}

function scoreKeeper() {
    let score = 0
    $('.multipleChoice').on('click', '.button', function() {
        if (value==='true') {
            score += 10
        } else {
            score += 0
        }
        return score
    })
    alert('it worked')
}


/*
function scoreChecker() {
    let score = []
    scoreKeeper()

}





function answerValidator() {

}


/*
function transitionBetweenQuestions() {
    this is a possible one, still not sure yet
}
*/


function initialize() {
    scoreKeeper();
}

$(initialize);