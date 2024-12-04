const User = require("../model/User");

exports.login = (req, res) => {
  const { id, pw } = req.body;
  const user = User.getUser(id);
  if (user && user.pw === pw) {
    res.json({ success: true, message: `${id}님, 로그인 성공!` });
  } else {
    res.json({ success: false, message: "아이디 또는 패스워드 오류" });
  }
};
