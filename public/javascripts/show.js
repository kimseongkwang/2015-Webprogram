$(document).ready(function(){
  $(document).on('click', '#complete', function(){

  var SingleOpinion;
  var Opinion;

  var questions = $('form').eq(0).serializeArray();

  for(i = 0; i< questions.length; i++ ){
    if(questions[i].name == 'SingleOpinion'){
      SingleOpinion = questions[i].value;
    } else if(questions[i].name == 'Opinion'){
      Opinion = questions[i].value;
    }
  }

  $.ajax({
      type: 'POST',
      url: '/survey/result',
      data:{
        SingleOpinion: SingleOpinion,
        Opinion : Opinion,
      //  questions : questions
      },success: function(data) {

      },complete: function() {

      }
    });
  });
)};
