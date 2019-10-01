// let currentQuestion = 0;

// function startQuiz() {
//     $('#start-quiz').on('click', function(event)
//         renderAQuestion();
//       });
// }
//     //this function will create an event listener that 
//     //allow the start button to move to the first
//     //question by using a click event

// function questionNumberAndScore() {
//     const doctorWho = $(`<ul class='center-who'>
//         <li id="js-answered">Questions Number: ${currentQuestion + 1}/${STORE.questions.length}</li>
//         <li id="js-score">Score: ${STORE.score}/${STORE.questions.length}</li>
//         </ul>`);
//   $(".question-and-score").html(doctorWho);
// }
//     //this will update the score on whichever page the 
//     //quiz is located on based on how the questions are 
//     //answered. EX. question 2 out of 5, score 2 of 5


// function updateQuestionOptions() {
//     let question = STORE.questions[currentQuestion];
//     for(let i=0; i<question.options.length; i++) {
//         $('.js-options').append(`
//             <input type = "radio" name="options" id="option${i+1}" value= "${question.options[i]}" tabindex ="${i+1}"> 
//             <label for="option${i+1}"> ${question.options[i]}</label> <br/>
//             <span id="js-r${i+1}"></span>`)
//     }
// }
//     //this will render the <radio> options for the quiz
//     //depending on which question is being rendered


// function renderQuestions() {
//     console.log('renderQuestions')
//     let question = STORE.questions[currentQuestion];
//     questionNumberAndScore();
//     const questionWho = $(`
//     <div class='center-who'>
//         <form id="js-questions" class="question-form">
//             <fieldset>
//                 <div class="row question">
//                     <div class="col-12">
//                         <legend> ${question.question}</legend>
//                     </div>
//                 </div>

//                 <div class="row options">
//                     <div class="col-12">
//                         <div class="js-options"> </div>
//                     </div>
//                 </div>

//                 <div class="row">
//                     <div class="col-12">
//                         <button type = "submit" id="answer" tabindex="4">Allons-y!</button>
//                         <button type = "button" id="next-question" tabindex="5">Travel to the Future</button>
//                     </div>
//                 </div>
//             </fieldset>
//         </form>
//     </div>`);
// $("main").html(questionWho);
// updateQuestionOptions();
// $("#next-question").hide();
// }
//     //this function will place a new question on the screen
//     //will also update the current ? number and score
//     //there are a total of 5 stored in a seperate js file 

// function finalResult() {
//     console.log('finalResult')
//     displayResults();
//     function displayResults() {
//         let resultWho = $(
//           `<div class="results">
//             <form id="js-restart-quiz">
//               <fieldset>
//                 <div class="row">
//                   <div class="col-12">
//                     <legend>Your Score is: ${STORE.score}/${STORE.questions.length}</legend>
//                   </div>
//                 </div>
              
//                 <div class="row">
//                   <div class="col-12">
//                     <button type="button" id="restart"> Want to go back into time? </button>
//                   </div>
//                 </div>
//               </fieldset>
//           </form>
//           </div>`);
//           currentQuestion = 0;
//           STORE.score = 0;
//         $("main").html(resultWho);
//         }
// }
//     //this will be where the final score will be displayed when all ?
//     //have been answered 

// function handleQuestion() {
//     $('body').on('click','#next-question', (event) => {
//         console.log('handleQuestion', currentQuestion)
//         currentQuestion === STORE.questions.length?finalResult() : renderQuestions();
//       });
// }
//     //This is where I will add an event listener to the next question
//     //button at the botton of each page, this will be after the answer
//     // has been initially given

// function optionSelections() {
//     $('body').on("submit",'#js-questions', function(event) {
//         event.preventDefault();
//         let currentQues = STORE.questions[currentQuestion];
//         let selectedOption = $("input[name=options]:checked").val();
//         if (!selectedOption) {
//           alert("Choose an option");
//           return;
//         } 
//         let id_num = currentQues.options.findIndex(i => i === selectedOption);
//         let id = "#js-r" + ++id_num;
//         $('span').removeClass("right-answer wrong-answer");
//         if(selectedOption === currentQues.answer) {
//           STORE.score++; 
//           $(`${id}`).append(`You got it right!<br/>`);
//           $(`${id}`).addClass("right-answer");
//         }
//         else {
//           $(`${id}`).append(`You got it wrong <br/> The answer is "${currentQues.answer}"<br/>`);
//           $(`${id}`).addClass("wrong-answer");
//         }
    
//         currentQuestion++;
//         console.log(currentQuestion)
//         $("#js-score").text(`Score: ${STORE.score}/${STORE.questions.length}`);
//         $('#answer').hide();
//         $("input[type=radio]").attr('disabled', true);
//         $('#next-question').show();
//     });
// }
//     //this function will have most of the content
//     //it will have an even listener of submit so that the answer can
//     //be read. It will also conatin what will display on the screen 
//     //depending on the answer selected

// function restartQuiz() {
//     $('body').on('click', '#restart', (event) => {
//         startQuiz();
//     });
// }
//     //create an event listener that will allow  the user
//     // to restart the quiz when they have completed it

// function handleQuiz() {
//     startQuiz();
//     renderQuestions();
//     optionSelections();
//     restartQuiz();
//     handleQuestion();
// }

// $(handleQuiz);
