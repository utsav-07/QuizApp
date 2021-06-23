const quizDb = [
    {
        question : "Q1 : what is the full form of html ?",
        a: "Hello to my land",
        b: "hey text markup language",
        c: "hypertext makeup language",
        d: "hypertext markup language",
        ans: "ans4"
    },
    {
        question : "Q2 : what is the full form of cc ?",
        a: "Cascading Style Sheets",
        b: "Cascading Style Sheep",
        c: "Cartoon Style Sheet",
        d: "Cascading Super Sheet",
        ans: "ans1"   
    },
    {
        question : "Q3 : what is the full form of html ?",
        a: "Hello to my land",
        b: "hey text markup language",
        c: "hypertext makeup language",
        d: "hypertext markup language",
        ans: "ans4"
    },
    {
        question : "Q4 : what is the full form of cc ?",
        a: "Cascading Style Sheets",
        b: "Cascading Style Sheep",
        c: "Cartoon Style Sheet",
        d: "Cascading Super Sheet",
        ans: "ans1"   
    },
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');

const uname = document.querySelector('.uname');
const psw = document.querySelector('.psw');
const submit_login_form = document.querySelector('#submit_login_form');
const questionArea = document.querySelector('.questionArea');
const loginArea = document.querySelector('.loginArea');


const rulesArea = document.querySelector('.rulesArea');
const agree = document.querySelector('.agree');
const startQuiz = document.querySelector('#startQuiz');
const agreeBox = document.querySelector('#agreeBox');


let questionCount =0;
let score =0 ;

const loadQuestion = () => {

    const questionList = quizDb[questionCount];
    question.innerHTML = questionList.question;

    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
}

loadQuestion();

const showScore = document.querySelector('#showScore');

const getCheckAnswer = () => {
    let answer;
   console.log(answers);
    answers.forEach((curAnsElem) => {
        //console.log(curAnsElem);
            if(curAnsElem.checked){
                answer = curAnsElem.id;
               // console.log(answer)
            }

           
    });
    return answer;

}


const deselectAll = () => {
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            curAnsElem.checked =false;
        }
    })
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();

    ///console.log(checkedAnswer);

    if(checkedAnswer === quizDb[questionCount].ans){
        score++;
    }

    questionCount++;
    deselectAll();
    if(questionCount < quizDb.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML = `
            <h3> You Scored ${score}/${quizDb.length}</h3>
            <button class = "btn" onclick = "location.reload()">Play Again</button>
        `

        showScore.classList.remove('scoreArea')
    }
})


submit_login_form.addEventListener('click' , ()=>{
    console.log(uname.value);
    console.log(psw.value);

    if(uname.value === 'admin' && psw.value === 'admin'){
        rulesArea.classList.remove('rulesArea');
        loginArea.style.display = 'none';
       // alert('login success');
    }
    else{
        alert('login failed');
    }

})

startQuiz.addEventListener('click' , ()=> {
    if(agree.checked){
        console.log('checked');
        questionArea.classList.remove('questionArea');
        rulesArea.classList.add('rulesArea');

    }
    else{
        console.log('unchecked');
    }
})