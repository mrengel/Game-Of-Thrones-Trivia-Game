var panel = $("#questions");

var questions = [{
  question: "Which one of these is not a house in Westeros?",
  answers: ["Baratheon", "Stark", "Lannister", "Voldemort"],
  correctAnswer: "Voldemort"
}, 
{
  question: "At the beginning of GoT which house holds the Iron Throne?",
  answers: ["Baratheon", "Stark", "Lannister", "Grey Joy"],
  correctAnswer: "Baratheon"
}, 
{
  question: "How many books are there currently in A Song of Ice and Fire?",
  answers: ["Two", "Three", "Four", "Five"],
  correctAnswer: "Five"
}, 
{
  question: "Which one of these is not a name of one of the Stark Direwolves?",
  answers: ["Summer", "Winter", "Ghost", "Lady"],
  correctAnswer: "Winter"

}];

var timer;
var game = {
  correct: 0,
  incorrect: 0,
  counter: 60,
  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      game.done();
    }
  },
  start: function() {
    timer = setInterval(game.countdown, 1000);
    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>60</span> Seconds</h2>");
    $("#start").remove();
    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }
    panel.append("<button id='done'>Done</button>");
  },

  //Attempted a reset function that would be called by clicking the page
  //reset: function() {
    //panel.remove();
    //game.start();
      //}
    //}
    //panel.append("<button id='done'>Done</button>");
  //},
  done: function() {
    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();
  },
  result: function() {
    clearInterval(timer);
    $("#sub-wrapper h2").remove();
    panel.html("<h2>Your Results</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    if (this.correct<this.incorrect){
      panel.append("<h1>Winter has come for you...<h1>");
    }
    else if (this.correct>this.incorrect) {
      panel.append("<h1>Yours will be the Song of Ice and Fire!<h1>");
    }
    else{
      panel.append("<h1>Winter is Coming<h1>");
    }
    //$(document).on("click",function() {
      //game.reset();
    //});
  }
};

$(document).on("click", "#start", function() {
  game.start();
});
$(document).on("click", "#done", function() {
  game.done();
});