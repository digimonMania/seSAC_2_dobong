const users = [{ id: "kyj002002", pw: "1234" }];

exports.getUser = (id) => users.find((user) => user.id === id);
