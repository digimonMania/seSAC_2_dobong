const users = [
  { id: "kyj2002", password: "1234" },
  { id: "john", password: "abcd" },
];

// 사용자 데이터 확인 함수
const findUser = (id, password) => {
  return users.find((user) => user.id === id && user.password === password);
};

// 사용자 데이터와 함께 클라이언트에 로그인 응답 생성
const handleLoginRequest = (req, res) => {
  const { id, password } = req.body;

  const user = findUser(id, password);
  if (user) {
    res.json({ success: true, message: `Welcome, ${id}!` });
  } else {
    res.json({
      success: false,
      message: "아이디 또는 비밀번호가 잘못되었습니다!",
    });
  }
};

module.exports = { handleLoginRequest };
