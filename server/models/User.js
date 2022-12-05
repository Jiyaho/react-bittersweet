const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const saltRounds = 10; //10자리 소스로 salt 생성
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 15,
  },
  email: {
    type: String,
    trim: true, //trim: 유저가 입력한 스페이스 빈 공간 삭제
    unique: 1, //이메일 주소 중복을 막기위한 코드
  },
  password: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    maxlength: 15,
  },
  role: {
    //사용자 권한 분류
    type: Number,
    default: 0, //디폴드 값 0
  },
  image: String,
  token: {
    //유효성 관리
    type: String,
  },
  tokenExp: {
    //토큰 유효기간
    type: Number,
  },
});

//save하기 전 동작할 함수 pre
userSchema.pre("save", function (next) {
  let user = this; //userSchema의 Object들을 가리킴
  if (user.isModified("password")) {
    //유저가 암호를 변경할 때만 실행하는 코드
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err); //err발생 시 next를 통해 user.save로 넘겨줌
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash; //성공 시, 유저의 plain password를 hash(암호화된 코드)로 표출
        next();
      });
    });
  } else {
    next();
  }
});

//Login요청 시, 클라이언트가 요청한 비번과 DB에 있는 데이터가 일치하는지 비교하는 method생성: comparePassword
userSchema.methods.comparePassword = function (plainPassword, cb) {
  //plainPassword와 암호화한 hashedPassword가 같은지 체크
  bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
    //plainPassword를 bcrypt를 사용하여 다시 암호화 후 DB의 hashedPassword와 일치 여부 체크
    if (err) return cb(err); //false일때
    cb(null, isMatch); //true일때
  });
};

userSchema.methods.generateToken = function (cb) {
  //jsonwebtoken을 이용하여 token생성
  let user = this;
  let token = jwt.sign(user._id.toHexString(), "secretToken");
  //user._id: DB에 있는 유저들의 _id값임. 이 값을 String으로 변환.
  //user._id + 'secretToken' = token
  user.token = token;
  user.save(function (err, user) {
    if (err) return cb(err);
    cb(null, user); //save 성공한 경우
  });
};

userSchema.statics.findByToken = function (token, cb) {
  let user = this;

  //토큰을 decode
  jwt.verify(token, "secretToken", function (err, decoded) {
    //decode: user._id가 나옴
    //유저id를 통해 유저를 찾고 클라이언트에서 가져온 토큰과 DB에 보관된 토큰의 일치여부 확인
    user.findOne({ _id: decoded, token: token }, function (err, user) {
      if (err) return cb(err);
      cb(null, user); //에러 없는 경우 유저 정보 콜백
    });
  });
};

const User = mongoose.model("User", userSchema);
//Model로 Schema를 감싸준다.

module.exports = { User };
