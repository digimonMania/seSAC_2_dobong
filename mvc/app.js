const express = require("express");
const path = require("path");
const userController = require("./controller/userController");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());

// 라우트 설정
app.get("/", userController.showLoginPage);
app.post("/login", userController.handleLogin);

app.listen(3000, () => console.log("http://localhost:3000"));
