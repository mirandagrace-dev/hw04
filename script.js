//HW04

//instructor suggestions
// view high scores is a comp[letely different page - do this very last!
// do the timer second to last! setInterval()
// think about the data structure - we'll want an array of objects
// What are we doing? what's the high level concept we are using to display on the page?..
// ..DOM MANIPUTALTION. EVERYTHING CREATED BY JS
// What tool are we using to listen for button clicks? - use data attributes,..
// ..event delegation. Do I add some sort of a data..
// ..attribute to each answer options? the key is we want to listen to onething..
// ..and one thing only and then use event delegation to see if the tyarget matches.
// change position of answer options each time the quiz is taken -- optional

// Pseudo Code
//use DOM manipulation
// global variables
// js variables
// create question objects for each question..
//    ..with array properties for the answers
// inside the questoin object that has an array of questions
//    grab each question and show the corresponding answer options
// Add click event for the chosen answer - make counter for correct answers
// USE CONDITIONALS FOR THE ANSWERS, MAYBE A SWITCH STATEMENT
//

//var top = document.getElementById("top-section");
//var quiz = document.getElementById("quiz");
//var quiz = document.getElementById("answers");

//array of question objects
var quiz = [];
var Q1 = {
  question: "what does html stand for?",
  answers: [
    "Hypertext Markup Languag",
    "Honor Typescript Many Lives",
    "Home Town Mayor Language",
    "none of the above",
  ],
};
var Q2 = {
  question: "what does CSS stand for?",
  answers: [
    "Cats Sleep Soundly",
    "Cascading Site Styles",
    "Cascading Style Sheet",
    "None of the above.",
  ],
};
var Q3 = {
  question: "What html library allows us to use a grid system?",
  answers: ["Gridz.io", "Bootsnap", "JQuery", "None of the above"],
};
var Q4 = {
  question: "What is 'Language of the Web'",
  answers: ["HTML", "Javascript", "CSS", "All of the above"],
};

var quiz = [Q1, Q2, Q3, Q4];

//rotate through array of question objects
var ugh = 0;
for (var i = 0; i < quiz.length; i++) {
  console.log(quiz[i].answers[ugh]);
  ugh++;
  //display question
  var question = document.createElement("H1");
  question.textContent = quiz[i].question;

  var div = document.createElement("div");
  div.appendChild(question);
  document.body.appendChild(div);

  var ugh = 0;
  for (var x = 0; x < 4; x++) {
    var answer = document.createElement("button");
    answer.setAttribute("class", "btn btn-primary");
    answer.textContent = quiz[i].answers[x];
    div.appendChild(answer);
  }
}
