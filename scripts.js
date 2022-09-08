
const quizData = [
    {
        question: 'How old is Chijioke?',
        a: '34',
        b: '35',
        c: '36',
        d: '37',
        correct: 'c'
    },
    {
        question: 'What is the most used programming language in 2019?',
        a: 'Java',
        b: 'JavaScript',
        c: 'C',
        d: 'python',
        correct: 'a'
    },
    {
        question: 'Who is the President of Nigeria?',
        a: 'Muhammed Buhari',
        b: 'Chijioke Egbo',
        c: 'Ahmed Lawan',
        d: 'Atiku Abubaka',
        correct: 'a'
    },
    {
        question: 'What is the full meaning of HTML?',
        a: 'Human test makeup language',
        b: 'Hyper Text Makeup Language',
        c: 'Syntactically Awesome Style Sheet',
        d: 'Cascading StyleSheet',
        correct: 'b'
    },
    {
        question: 'What year was JavaScript launch?',
        a: '1994',
        b: '1993',
        c: '1992',
        d: '1995',
        correct: 'd'
    }
]

const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');


// keep track of the current question
let currentQuiz = 0;
let score = 0;
//let answer = undefined;

//loead quiz

loadQuiz();

function loadQuiz(){
    deSelectAnswer();// LoadQuiz displays a page with no option selected
    // target the question
    const currentQuizData = quizData[currentQuiz];
    // cast the quiz data to the html page
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}


function getSelected(){
    
        let answer = undefined;

        answerEls.forEach(answerEl => {
            if(answerEl.checked){
                answer = answerEl.id; // store the selected option to answer for true
            }
        });

        return answer;
    }

    function deSelectAnswer(){
        answerEls.forEach(answerEl => {
            answerEl.checked = false;  
            }
        )}

    submitBtn.addEventListener('click', () => {
    // check to see the answer
        const answer = getSelected(); // the option returned by getSelected is passed to answer when called here
        
            if(answer){
                if(answer === quizData[currentQuiz].correct){
                    score++; // increment the score when the selected option is equal to the correct option in the array
                }
                 currentQuiz++ // increment the current quiz to move to the next quiz
                 if(currentQuiz < quizData.length){
                    loadQuiz() // 
                }else{
                    quiz.innerHTML = `<h2>You answered Correctly at ${score}/${quizData.length} question.</h2>
                    <button onClick="location.reload()">Reload</button>`
                }
            }
    });