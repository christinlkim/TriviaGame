var panel = $("#quiz-area");

//Question docket
var questions = [{
  question: "Where was POTUS born?",
  answers: ["A", "B", "C", "D"],
  correctAnswer: "C"
}, {
  question: "How many siblings does POTUS have?",
  answers: ["A", "B", "C", "D"],
  correctAnswer: "A"
}, {
  question: "Where did POTUS go to college?",
  answers: ["A", "B", "C", "D"],
  correctAnswer: "D"
}, {
  question: "What is POTUS' net worth?",
  answers: ["A", "B", "C", "D"],
  correctAnswer: "A"
}, {
  question: "How did POTUS acquire his wealth?",
  answers: ["A", "B", "C", "D"],
  correctAnswer: "A"
}];













//Variable that will hold the setInterval
var timer;

var game = {

  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if(game.counter === 0) {
      console.log("TIME IS UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question" + i +
        "'value='" + questions[i].answers[j] + "''>") + questions[i].answers[j]);
      }
    }

    
  }
}
