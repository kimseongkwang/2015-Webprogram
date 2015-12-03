// var QController = function(){
//
//   var questionAdd = function(){
//     var self = this;
//     $("#post-question").click(function() {
//       $("#questions").append($("#questionTemplate").html());
//     });
//   }

  // script(type='text/javascript').
  //   $(document).on('change', '#category', function() {
  //     $(this).parents('.content').find('#Qtype').empty();
  //     switch($(this).val())
  //       {
  //         case '객관식': $(this).parents('.content').find('#Qtype').append($("#sltformTemplate").html());
  //         break;
  //         case '단일입력': $(this).parents('.content').find('#Qtype').append($("#SingleOpinionTemplate").html());
  //         break;
  //         case '의견': $(this).parents('.content').find('#Qtype').append($("#OpinionTemplate").html());
  //         break;
  //       }
  //
  //     });
$(document).ready(function(){


  $(document).on('click', '#post-question' , function() {
    $("#questions").append($("#questionTemplate").html());
    //$(document).find('.Qtype').append($("#sltformTemplate").html());
  });

  $(document).on('change', '#category', function() {
    $(this).parents('.content').find('.Qtype').empty();
    switch($(this).val())
      {
        case '객관식': $(this).parents('.content').find('.Qtype').append($("#sltformTemplate").html());
        break;
        case '단일입력': $(this).parents('.content').find('.Qtype').append($("#SingleOpinionTemplate").html());
        break;
        case '의견': $(this).parents('.content').find('.Qtype').append($("#OpinionTemplate").html());
        break;
      }
    });
});


//   return questionAdd;
// }();
