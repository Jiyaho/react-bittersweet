const express = require("express");
const app = express();
const config = require("./config/key");
const cookieParser = require("cookie-parser");
const { User } = require("./models/User");
const { auth } = require("./middleware/auth");
const { Posting } = require("./models/Posting");

app.use(express.json());
//"application/json" 형식의 데이터를 parse해 줌
app.use(express.urlencoded({ extended: true }));
//"application/x-www-form-urlencoded" 형식의 데이터를 parse해 줌

app.use(cookieParser());

app.get("/", (req, res) => res.send("Hello World!!!"));

const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI)
  .then(() => console.log("mongoDB Connected.."))
  .catch((err) => console.log(err));

//=====Register(Sign-up) Route=====
app.post("/api/users/register", (req, res) => {
  //회원가입 시 필요한 정보들을 Client에서 가져오면 그 값들을 DB에 넣어줌
  const user = new User(req.body); //유저가 입력한 로그인 정보들을 DB에 넣기 위함.
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
    //status(200): 성공한 경우.
  });
});

//=====Login Route=====
app.post("/api/users/login", (req, res) => {
  //client에서 요청한 이메일을 DB에 있는지 찾아봄
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: "제공된 이메일에 해당하는 유저가 없습니다.",
      });
    }
    //요청된 이메일이 DB에 있다면 비밀번호가 일치하는지 확인
    //comparePassword method는 User Model에서 가져온 것
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({
          loginSuccess: false,
          message: "비밀번호가 틀렸습니다.",
        });
      //비밀번호까지 맞다면? Token 생성
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err); //status(400): 에러있는 경우
        //cookieParser를 이용하여 토큰을 쿠키에 저장
        res
          .cookie("x_auth", user.token) //cookie에 토큰을 "x_auth"라는 이름으로 넣음
          .status(200) //성공한 경우
          .json({ loginSuccess: true, userId: user._id });
      });
    });
  });
});

//=====Authentication Route=====
app.get("/api/users/auth", auth, (req, res) => {
  //2번째 인자는 middleware로서 콜백함수가 실행되기 전에 실행되는 것

  //auth = true인 경우 (유저 인증 성공한 경우) 아래 코드 실행함. status(200)
  //cf. role 0: 유저, 그 이외: 관리자
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.iamge,
  });
});

//=====Log-out=====
app.get("/api/users/logout", auth, (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, user) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).send({
      success: true,
    });
  });
});

//=====Get a User Name=====
app.get("/api/users", auth, (req, res) => {
  User.findById({ _id: req.user._id }, (err, result) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json(req.user.name);
  });
});

//=====Posting=====
app.post("/api/posting", (req, res) => {
  const posting = new Posting(req.body);
  posting.save((err, result) => {
    if (err) return res.json({ postSuccess: false, err });
    return res.status(200).json({ postSuccess: true, result });
  });
});

//=====Get Posts=====
app.get("/api/posting", (req, res) => {
  Posting.find((err, result) => {
    if (err) return res.json({ getPostsSuccess: false, err });
    return res.status(200).send(result);
  });
});

//=====Update a Post=====
app.patch("/api/posting/:_id", (req, res) => {
  Posting.findByIdAndUpdate(
    { _id: req.params._id },
    req.body,
    (err, result) => {
      if (err) return res.json({ editSuccess: false, err });
      return res.status(200).json({ editSuccess: true, result });
    }
  );
});

//=====Delete a Post=====
app.delete("/api/posting/:_id", (req, res) => {
  Posting.findByIdAndDelete({ _id: req.params._id }, (err, result) => {
    if (err) return res.json({ deleteSuccess: false, err });
    return res.status(200).json({ deleteSuccess: true, result });
  });
});

const port = 5000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
client = MongoClient("mongodb://test:test@localhost", 27017);
