'use strict';

let QUESTIONS = [
    {
        'question': 'What is Dwights last name?',
        'choice1': 'Halpert',
        'choice2': 'Schrute',
        'choice3': 'Bernard',
        'choice4': 'Scott',
        'correctAnswer': 'Schrute'
    },

    {
        'question': 'What is Jim\'s last name?',
        'choice1': 'Scott',
        'choice2': 'Beezly',
        'choice3': 'Halpert',
        'choice4': 'Malone',
        'correctAnswer': 'Halpert'
    },

    {
        'question': 'Who was Pam first engaged to?',
        'choice1': 'Jim',
        'choice2': 'Kevin',
        'choice3': 'Roy',
        'choice4': 'Dwight',
        'correctAnswer': 'Roy'
    },

    {
        'question': 'Who did Michael Scott hit with a car?',
        'choice1': 'Pam',
        'choice2': 'Jan',
        'choice3': 'Meredith',
        'choice4': 'Phyllis',
        'correctAnswer': 'Meredith'
    },

    {
        'question': 'What did Andy call Jim?',
        'choice1': 'Big Tuna',
        'choice2': 'Fish',
        'choice3': 'Mentor',
        'choice4': 'Big Fish',
        'correctAnswer': 'Big Tuna'
    },
]


let questionNumber= 0;
let numberQuestion = 0;
let testScore = 0;

function generateQuizQuestions() {
    console.log(numberQuestion);
    const quizQuestion = `
    <section>
        <p>Question ${questionNumber += 1}</p>
        <form id='multipleChoice'>
            <legend>${QUESTIONS[numberQuestion].question}</legend>
            <div class='buttonChoices'>
                <input type="radio" id='${QUESTIONS[numberQuestion].choice1}'  name= 'question' value="${QUESTIONS[numberQuestion].choice1}"><label for='${QUESTIONS[numberQuestion].choice1}'>${QUESTIONS[numberQuestion].choice1}</label>
                <input type="radio" id='${QUESTIONS[numberQuestion].choice2}'  name= 'question' value="${QUESTIONS[numberQuestion].choice2}"><label for='${QUESTIONS[numberQuestion].choice2}'>${QUESTIONS[numberQuestion].choice2}</label>
                <input type="radio" id='${QUESTIONS[numberQuestion].choice3}'  name= 'question' value="${QUESTIONS[numberQuestion].choice3}"><label for='${QUESTIONS[numberQuestion].choice3}'>${QUESTIONS[numberQuestion].choice3}</label>
                <input type="radio" id='${QUESTIONS[numberQuestion].choice4}'  name= 'question' value="${QUESTIONS[numberQuestion].choice4}"><label for='${QUESTIONS[numberQuestion].choice4}'>${QUESTIONS[numberQuestion].choice4}</label>
            </div>
            <div class='answerButton'>
                <button type='submit' id='theAnswerButton'>Answer</button>
        </form>
    </section>`;
    return quizQuestion;
}

function startQuiz() {
    let quizQuestion = generateQuizQuestions();
    $('#quizStarter').on('click', '#startButton', function (s) {
        s.preventDefault();
        $('.h1').html(`Quesion ${numberQuestion + 1}`);
        $('#quizStarter').hide();
        $('.question').html(quizQuestion);
    });
}

function showAnswer() {
    $('.question').on('click', '#theAnswerButton', function (a) {
        a.preventDefault();
        $('.question').find('.answerButton').hide();
        if ($(!'input[name="question"]').is('.checked')) {
            alert('Please select an option')
        } else {
            $('.answer').show();
            let radioValue = $('input[name="question"]:checked').val();
            console.log(radioValue);
            if (radioValue === QUESTIONS[numberQuestion].correctAnswer) {
                testScore += 20;
                $('.answer').html(`<p>You're correct!</p><button type='button' id='nextQuestion'>Next Question</button>`);
            } else {
                $('.answer').html(`<p> Sorry, the correct answer was ${QUESTIONS[numberQuestion].correctAnswer}.</p><button type='button' id='nextQuestion'>Next Question</button>`);
            }
            numberQuestion++;
        }
    });
}

function nextQuestion() {
    $('.answer').on('click', '#nextQuestion', function (n) {
        n.preventDefault();
        if (numberQuestion >= 5) {
            completeQuiz();
        } else {
            $('.answer').val = '';
            $('.answer').hide();
            let quizQuestion = generateQuizQuestions();
            updateScore();
            $('.question').html(quizQuestion);
        }
    });
}

function updateScore() {
    
    $('.testScore').html(`<p>Current score is ${testScore}/100</p>`)
}

function scoreLevel() {
    console.log(testScore);
}

function completeQuiz() {
    $('.h1').html(`You got ${testScore}/10!`)
    $('.testScore').hide();
    let scoreLevelString = '';
    if (testScore < 50) {
        scoreLevelString = `<p>Kevin can do better than that!</p>`
    } else if (testScore < - 50 && testScore < 80) {
        scoreLevelString = `<p>Maybe.. Just Maybe you might be an Office fan</p>`
    } else if (testScore >= 80) {
        scoreLevelString = `<p>You truly are an Office Fan! How many times have you watched the show?</p>`
    }
    $('.question').html(scoreLevelString);
    $('.question').append('<button type="button" id="restartQuiz">Try Quiz Again</button>');
    scoreLevel();
    $('.answer').hide();
    $('.question').on('click', '#restartQuiz', function () {
        event.preventDefault();
        testScore = 0;
        numberQuestion = 0;
        $('.container').html(`
            <h1>The Office Trivia</h1>
        <section="quizStarter">
            <p> Do you think you're the most knowledgeable on The Office? Have you seen all the shows 12 times like a true fan? Come and test your knowledge! </p>
            <button id="startButton" type="button">Start</button>
        </section>
        <section class="question"></section>
        <section class="answer"></section>
        `);
        handleQuiz();
    });
}


function runQuiz() {
    showAnswer();
    nextQuestion();
}



function handleQuiz() {
    startQuiz();
    runQuiz();
}


$(handleQuiz);