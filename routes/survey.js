var express = require('express'),
    User = require('../models/User'),
    Survey = require('../models/Survey');
var router = express.Router();

function needAuth(req, res, next) {
    if (req.session.user) {
      next();
    } else {
      req.flash('danger', '로그인이 필요합니다.');
      res.redirect('/signin');
    }
}
//설문조사 페이지 이동
router.get('/new', needAuth, function(req, res, next) {
    res.render('survey/new');
});

//설문지 목록으로 이동
router.get('/index', needAuth, function(req, res, next){
    Survey.find({}, function(err, surveys) {
      if (err) {
        return next(err);
      }
    res.render('survey/index', {surveys: surveys});
   });
});

//설문조사 양식 데이터 전송
 // /survey/preview에 포스트로 넘겨준다, jade에 정의 되어있어야한다.
router.post('/index', function(req, res, next){

  var survey = new Survey({
    title: req.body.title,
    content: req.body.content
  });

  survey.save(function(err){
    if(err) {
      next(err);
    }
    else {
      res.redirect('/survey/index'); //수행하고 넘어갈 페이지, get으로 이미 경로 있어야함
    }
  });
});

//설문조사 내용보기
router.get('/:id', function(req, res, next){
  Survey.findById(req.params.id, function(err, survey){
    if(err){
      next(err);
    }
    res.render('survey/show', {survey: survey});
  });
});

//설문조사 수정
router.get('/:id/edit', function(req, res, next) {
  Survey.findById(req.params.id, function(err, survey) {
    if (err) {
      return next(err);
    }
    res.render('survey/edit', {survey: survey});
  });
});

router.put('/:id', function(req, res, next) {

  Survey.findById({_id: req.params.id}, function(err, survey) {
    if (err) {
      return next(err);
    }
    survey.title = req.body.title;
    survey.content = req.body.content;

    survey.save(function(err) {
      if (err) {
        return next(err);
      }
      req.flash('success', '설문지가 수정되었습니다.');
      res.redirect('/survey/index');
    });
  });
});

//설문조사 삭제
router.delete('/:id', function(req, res, next){
  Survey.findOneAndRemove({_id:req.params.id}, function(err,survey){
    if(err){
      next(err);
    }
    res.redirect('/survey/index');
  });
});

module.exports = router;
