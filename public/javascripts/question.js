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

   $(document).on('click', '#delete-question' , function(){
     //var currentNum = $(this).parents('#Delquestion').find('#Qnum').text();
     //console.log(currentNum);
     $(this).parents('#Delquestion').empty();
   });


  //보기 추가버튼 클릭시 #exampleAdd 위치에 보기 추가
  $(document).on('click', '#add-example' , function() {
    //$(this).parents('.content').find('#exampleAdd').empty();
    $(this).parents('.content').find('#exampleAdd').append($("#exampleAddTemplate").html());
    //$(document).find('.Qtype').append($("#sltformTemplate").html());
  });

  //보기삭제 버튼 클릭시 클릭한 content만 삭제
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

      var title;
      var content;
      //var question;
      var category;
      //var questions = [];
      var question;
      var Qoption;

      var surveyBasic = $('form').eq(0).serializeArray();
      var questions = $('form').eq(1).serializeArray();
      var option = $('form').eq(2).serializeArray();

      for(i = 0; i< surveyBasic.length; i++ ){
        if(surveyBasic[i].name == 'title'){
          title = surveyBasic[i].value;
        } else if(surveyBasic[i].name == 'content'){
          content = surveyBasic[i].value;
        }
      }

      for(i = 0; i< questions.length; i++ ){
        if(questions[i].name == 'question'){
          question = questions[i].value;
        } else if(questions[i].name == 'category'){
          category = questions[i].value;
            // if(questions[i].value =='객관식'){
            //   question.Qoption = [];
            // }
         }
        //else if(questions[i].name == 'Qoption'){
        //     Qoption = questions[i].value;
        // }
      }

      for(i = 0; i< option.length; i++ ){
        if(option[i].name == 'Qoption'){
          Qoption = option[i].value;
        }
      }

    // $('form:gt(0)').each(function (index, item){
    //   var questionValue = $(item).serializeArray();
    //   question1 = new Object();
    //   for(i in questionValue) {
    //       switch(questionValue[i].name) {
    //         case 'question':
    //           question1.question = questionValue[i].value;
    //           break;
    //         case 'category':
    //           question.category = questionValue[i].value;
    //             if(questionValue[i].value =='객관식'){
    //               question1.Qoption = [];
    //             }
    //           break;
    //         case 'Qoption':
    //           question1.Qoption.push(questionValue[i].value);
    //           break;
    //         }
    //       }
    //     questions.push(question1);
    //   });
    //  questions.serializeArray();

    $.ajax({
        type: 'POST',
        url: '/survey/index',
        data:{
          title: title,
          content : content,
          question : question,
          category :category,
          Qoption : Qoption
        //  questions : questions
        },success: function(data) {
          // $.each(date.questions.rows, function(i){
          //   alert(date.questions.rows[i].question + ":" + date.questions.rows[i].category);
          // });
        },complete: function() {

        }
      });
    });


});
