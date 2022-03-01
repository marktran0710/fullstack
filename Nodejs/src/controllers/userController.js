let handleLogin = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  return res.status(200).json({
    message: "connect api",
    email: email,
    password: password,
  });
};

module.exports = {
  handleLogin,
};
