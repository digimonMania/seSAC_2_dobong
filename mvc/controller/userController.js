const User = require("../model/User");

exports.showLoginPage = (req, res) => {
  res.render("login"); // 로그인 페이지 렌더링
};

exports.handleLogin = (req, res) => {
  User.handleLoginRequest(req, res); // 모델에 로그인 요청 처리 위임
};
