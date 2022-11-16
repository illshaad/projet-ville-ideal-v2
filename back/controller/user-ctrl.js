const bcrypt = require("bcrypt");
const User = require("../model/user");
const JwtUtils = require("../utils/jwt.utils");
const nodeMailUtilis = require("../utils/nodemail.utils");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const createUser = async (req, res) => {
  try {
    const email = req.body.email;
    const requestPassword = req.body.password;
    const requestPseudo = req.body.pseudo;

    if (email === null || requestPassword === null || requestPseudo === null) {
      return res.status(400).json("parametre manquant...");
    }
    const emailExist = await User.findOne({ email: email });
    if (!emailExist) {
      const hashPassword = await bcrypt.hash(
        requestPassword,
        await bcrypt.genSalt(10)
      );
      const newUser = await User.create({
        pseudo: requestPseudo,
        email: email,
        password: hashPassword,
        isAdmin: email === "shaddlove5@gmail.com" ? true : false,
      });

      if (newUser.email) {
        nodeMailUtilis.sendConfirmationEmail(newUser);
        return res.status(200).json({
          message:
            "L'utilisateur a été enregistré avec succès ! Merci de consulter vos emails",
        });
      }
      res.status(201).json({ email, message: "Vous êtes bien enregistrer" });
    } else {
      return res
        .status(409)
        .json({ message: "utilisateur existe dans la bdd" });
    }
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const loginUser = async (req, res) => {
  try {
    const email = req.body.email;
    const requestPassword = req.body.password;

    if (email == null || requestPassword == null) {
      return res.status(400).json("parametre manquant...");
    }
    const emailExist = await User.findOne({ email: email });
    if (emailExist) {
      const IsValidPassword = await bcrypt.compare(
        requestPassword,
        emailExist.password
      );
      if (IsValidPassword) {
        return res.status(200).json({
          email,
          token: JwtUtils.generateTokenUser(emailExist),
        });
      }
    } else {
      return res
        .status(403)
        .json("mots de passe pas valide ou email pas valide");
    }
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const middleWareAuth = (req, res, next) => {
  console.log(req, "REQ");
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) res.status(401);
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(401);
    req.user = user;
    next();
  });
};

module.exports = {
  createUser,
  loginUser,
  middleWareAuth,
};
