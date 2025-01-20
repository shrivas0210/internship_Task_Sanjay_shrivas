const quiz = [
  {
    Question:"What is the most used programing language in 2025 ?",
    ans1text: "javaScript",
    ans2text: "c",
    ans3text: "java",
    ans4text: "Pythan",
    answer: "javaScript",
  },
  {
    Question: "Who is the prseident of india ?",
    ans1text: "Rahul gandhi",
    ans2text: "Narendra modi",
    ans3text: "Mammta Benagy",
    ans4text: "Lalu Yadav",
    answer: "Narendra modi",
  },
  {
    Question:"What does HTML stand for ?",
    ans1text: "Cascading Style Sheet",
    ans2text: "Json object notation",
    ans3text: "HyperText Markup Language",
    ans4text: "Structured Query Language",
    answer: "HyperText Markup Language",    
  },
  {
    Question:'which year javascript was launched',
    ans1text: "1996",
    ans2text: "1994",
    ans3text: "1993",
    ans4text: "1995",
    answer: "1995",
  }

]

const Question = document.getElementById('Quiz-question');
const option_a = document.getElementById("text_option_a");
const option_b = document.getElementById("text_option_b");
const option_c = document.getElementById("text_option_c");
const option_d = document.getElementById("text_option_d");
const answerElement = document.querySelectorAll('.answer');


const submit = document.getElementById('submit');

let currentQuestion = 0;
let score = 0;

Question.textContent = quiz[currentQuestion].Question;
option_a.textContent = quiz[currentQuestion].ans1text;
option_b.textContent = quiz[currentQuestion].ans2text;
option_c.textContent = quiz[currentQuestion].ans3text;
option_d.textContent = quiz[currentQuestion].ans4text;

submit.addEventListener('click',() =>{
  const checkAns = document.querySelector('input[type="radio"]:checked')
  if(checkAns === null){
    alert('Please select an Answer')
  }else{
    if(checkAns.nextElementSibling.textContent === quiz[currentQuestion].answer){
      score++;
    }

    
    currentQuestion++;
    if(currentQuestion < quiz.length){
      Question.textContent = quiz[currentQuestion].Question;
      option_a.textContent = quiz[currentQuestion].ans1text;
      option_b.textContent = quiz[currentQuestion].ans2text;
      option_c.textContent = quiz[currentQuestion].ans3text;
      option_d.textContent = quiz[currentQuestion].ans4text;
      checkAns.checked = false;
    }else{
      alert('You score is '+ score + 'out of ' + quiz.length);
      location.reload();
    }

  }
})





