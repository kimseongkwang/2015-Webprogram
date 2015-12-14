var mongoose = require('mongoose'),
    moment = require('moment'),
    Schema = mongoose.Schema;


  var schema = new Schema({
    title : {type: String},
    content : {type: String},
    question : {type: String},
    category: {type: String, trim: true},
    SingleOpinion : {type: String},
    Opinion : {type: String},
    Qoption : {type: String},
    questions : [ {content : {type: String}},{category: {type: String, trim: true}}],
    createdAt : {type: Date, default: Date.now},
  }, {
    toJSON: {
      virtuals: true,
      transform: function(survey){
        return{
          id: survey._id.toString(),
          title: survey.title,
          content: survey.content,
          question : survey.question,
          SingleOpinion : survey.SingleOpinion,
          questions : [{question:{type: String}, category: {type: String, trim: true}}],
          Opinion : survey.Opinion,
          Qoption : survey.Qoption
        };
      }
    },
    toObject: {virtuals: true}
  });

var Survey = mongoose.model('Survey', schema);

module.exports = Survey;
