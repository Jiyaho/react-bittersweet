const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
//게시글의 번호(index number)를 만들어주기 위한 라이브러리. 자동 증가 라이브러리.

const postingSchema = new mongoose.Schema({
  writer: {
    type: String,
    maxlength: 15,
    required: true,
  },
  title: {
    type: String,
    maxlength: 30,
    required: true,
  },
  content: {
    type: String,
    maxlength: 1000,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  view: {
    type: Number,
    default: 0,
  },
});

postingSchema.plugin(AutoIncrement, { inc_field: 'id' }); //id 값 숫자 자동 증가

const Posting = mongoose.model('Posting', postingSchema);

module.exports = { Posting };
