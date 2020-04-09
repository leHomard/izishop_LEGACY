const jwt = require("jsonwebtoken");

const generateToken = (context, id) => {
  const expiration = 1000 * 60 * 60 * 12;
  const token = jwt.sign({ userId: id }, process.env.APP_SECRET);

  // Send the token on the response as a cookie
  return context.response.cookie("token", token, {
    maxAge: expiration,
    httpOnly: true,
  });
};

module.exports = generateToken;
