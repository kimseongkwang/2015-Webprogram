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

router.get('/new', needAuth, function(req, res, next) {
    res.render('survey/new');
});


router.post('/preview', function(req, res, next) {

  var survey = new Survey({
    title: req.body.title,
    content: req.body.content,
    question : req.body.question
  });

  survey.save(function(err){
    if(err) {
      next(err);
    }
    else {
      res.redirect('/survey/preview');
    }
  });
});

module.exports = router;
