const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const generateTokenUser = (userData) => {
  return jwt.sign(
    {
      userId: userData._id,
      isAdmin: userData.isAdmin,
      email: userData.email,
      pseudo: userData.pseudo,
    },
    JWT_SECRET,
    {
      expiresIn: "3h",
    }
  );
};

module.exports = { generateTokenUser };
