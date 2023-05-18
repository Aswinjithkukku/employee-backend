const jwt = require("jsonwebtoken");

// get jwt token
const getJwtToken = (user) => {
  return jwt.sign(
    { id: user.id, email: user.email, name: user.name },
    process.env.JWT_SECRET,
    { expiresIn: "1 day" }
  );
};

module.exports = getJwtToken;
