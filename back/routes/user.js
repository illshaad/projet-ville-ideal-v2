const express = require("express");
const router = express.Router();
const userCtrl = require("../controller/user-ctrl");

router.post("/register", userCtrl.createUser);
router.post("/login", userCtrl.loginUser);
router.get("/login/me", userCtrl.middleWareAuth, (req, res) =>
  res.send(req.user)
);
module.exports = router;
