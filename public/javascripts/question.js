$(document).ready(function(){

  var Qnum = 0;
  $(document).on('click', '#add-question' , function() {
      $("#questions").append($("#questionTemplate").html());

    //$(document).find('.Qtype').empty();
    // $(document).find('#Qtype').append($("#sltformTemplate").html());
      $(".content").eq(Qnum).find('#Qnum').append(Qnum/2+1);
      $(".content").eq(Qnum).find('#Qtype').append($("#sltformTemplate").html());
       Qnum +=2;
   });

  //보기 추가버튼 클릭시 #exampleAdd 위치에 보기 추가
  $(document).on('click', '#add-example' , function() {
    //$(this).parents('.content').find('#exampleAdd').empty();
    $(this).parents('.content').find('#exampleAdd').append($("#exampleAddTemplate").html());
    //$(document).find('.Qtype').append($("#sltformTemplate").html());
  });

  //삭제 버튼 클릭시 클릭한 content만 삭제
  $(document).on('click', '#delete-example' , function() {
    //$(this).parents('.content').find('#exampleAdd').empty();
    $(this).parents('#Delexample').empty();
    //$(document).find('.Qtype').append($("#sltformTemplate").html());
  });

  //카테고리 change시 동작
  $(document).on('change', '#category', function() {
    $(this).parents('.content').find('#Qtype').empty();
    switch($(this).val())
      {
        case '객관식': $(this).parents('.content').find('#Qtype').append($("#sltformTemplate").html());
        break;
        case '단일입력': $(this).parents('.content').find('#Qtype').append($("#SingleOpinionTemplate").html());
        break;
        case '의견': $(this).parents('.content').find('#Qtype').append($("#OpinionTemplate").html());
        break;
      }
    });

    $(document).on('click', '#complete', function(){
      var surveyBasic = $('form').eq(0).serialize();

      $.ajax({
        type: 'POST',
        url: '/survey/index',
        data:{
          title: surveyBasic.title,
          content : surveyBasic.content,
        },success: function(data) {

        },complete: function() {

        }
      });
    });


});
