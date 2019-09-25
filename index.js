'use strict';

let QUESTIONS = [
    {
        'question': 'Who was Ryan\'s son named afer?',
        'choice1': 'Drake the rapper',
        'choice2': 'Drake the bird',
        'choice3': 'His dad',
        'choice4': 'A combination between Drew and Blake',
        'correctAnswer': 'A combination between Drew and Blake'
    },

    {
        'question': 'What did Michael win an award for in Floggerton?',
        'choice1': 'Fastest typer',
        'choice2': 'Signing papers on his condo',
        'choice3': 'Organizing a 5k',
        'choice4': 'Best Regional Manager',
        'correctAnswer': 'Signing papers on his condo'
    },

    {
        'question': 'Which Harry Potter book does Dwight take with him in the game dessert island?',
        'choice1': 'Prisoner of Askaban',
        'choice2': 'Goblet of Fire',
        'choice3': 'Order of the Pheonix',
        'choice4': 'Sorcerer\'s Stone',
        'correctAnswer': 'Prisoner of Askaban'
    },

    {
        'question': 'What is Andy Bernard\'s extension?',
        'choice1': '156',
        'choice2': '134',
        'choice3': '911',
        'choice4': '178',
        'correctAnswer': '134'
    },

    {
        'question': 'Who does Micahel fire on Halloween?',
        'choice1': 'Kevin',
        'choice2': 'Andy',
        'choice3': 'Angela',
        'choice4': 'Devon',
        'correctAnswer': 'Devon'
    },
    
    {   'question': 'Why did Michael wait until Halloween to fire Devon?',
        'choice1': 'It\'s really scary stuff',
        'choice2': 'It was time to finally fire him',
        'choice3': 'I felt like it',
        'choice4': 'Dwight didn\'t like him',
        'correctAnswer': 'It\'s really scary stuff'
    },
    
    {   'question': 'How much money does Nelly give Darrel to buy tacos at the animal fundraiser?',
        'choice1': '$30',
        'choice2': '$10',
        'choice3': '$40',
        'choice4': '$5',
        'correctAnswer': '$30',
    },
   
    {   'question': 'What does David Wallace auction off in the Crime Aid Auction?',
        'choice1': 'A pay raise',
        'choice2': 'The monthly bonus',
        'choice3': 'A weekend at his house in Martha\'s Vineyard',
        'choice4': 'A weekend at his house in New York',
        'correctAnswer': 'A weekend at his house in Martha\'s Vineyard',

    },
    
    {   'question': 'What are the three closets designated for during the PDA episode?',
        'choice1': 'One for each cleaning task',
        'choice2': 'One for each base, no homers',
        'choice3': 'One for each girl in The Office, except Meredith',
        'choice4': 'They act as regular closets, nothing weird',
        'correctAnswer': 'One for each base, no homers',
    },
    
    {   'question': 'What does Ryan think Creed smells like?',
        'choice1': 'Death',
        'choice2': 'Old Man',
        'choice3': 'Meredith',
        'choice4': 'Petunias',
        'correctAnswer': 'Old Man',

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
                <button type='submit' id='theAnswerButton' class="button">Answer</button>
            </div>
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
    $('.question').on('click', '#theAnswerButton', function (q) {
        q.preventDefault();
        
        if (!$('input[name="question"]').is(':checked')) {
            alert('Please select an option')
        } else {
            $('.question').hide();
            $('.question').find('.answerButton').hide();
            $('.answer').show();
            let radioValue = $('input[name="question"]:checked').val();
            console.log(radioValue);
            if (radioValue === QUESTIONS[numberQuestion].correctAnswer) {
                testScore += 10;
                $('.answer').html(`<img class="correct" src="Andy-NailedIt.gif" alt="You're correct!"/><p>You're correct!</p><button type='button' id='nextQuestion' class="button">Next Question</button>`);
            } else {
                $('.answer').html(`<img class="false" src="Dwight-False.jpg" height="270" width=="170" alt="Incorrect answser"/img><p> Sorry, the correct answer was ${QUESTIONS[numberQuestion].correctAnswer}.</p><button type='button' id='nextQuestion' class="button">Next Question</button>`);
            }
            numberQuestion++;
        }
    });
}

function nextQuestion() {
    $('.answer').on('click', '#nextQuestion', function (n) {
        n.preventDefault();
        
        if (numberQuestion >= 10) {
            completeQuiz();
        } else {
            $('.answer').val = '';
            $('.answer').hide();
            $('.question').show();
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
            <button id="startButton" type="button" class="button">Start</button>
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