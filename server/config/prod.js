module.exports = {
  mongoURI: process.env.MONGO_URI,
};

// MONGO_URI는 heroku 같은 서비스를 이용할 경우,
// 해당 웹사이트에서 요구하는 process.env의 key를 MONGO_URI로 같게 맞춰주면 된다.

// a. config 폴더 > dev.js (개발환경에서 설정할 것)
// b. config 폴더 > prod.js (배포환경에서 설정할 것)
// c. config 폴더 > key.js (환경변수가 개발환경인지 배포환경인지에 따라 실행시킬 if문 삽입)
