var mongoose = require('mongoose'),
    moment = require('moment'),
    Schema = mongoose.Schema;


var schema = new Schema({
  title : {type: String, required: true},
  content : {type: String},
  category : {type: String, trim: true},
  question : {type: String, required: true },
  done : {type: Boolean, defualt: false},
  createdAt : {type: Date, default: Date.now}
}, {
  toJSON: {
    virtuals: true,
    transform: function(survey){
      return{
        title: survey.title,
        content: survey.content,
        category: survey.category,
        done: survey.done
      };
    }
  },
  toObject: {virtuals: true}
});

var Survey = mongoose.model('Survey', schema);

module.exports = Survey;
