const express = require("express");
const router = express.Router();

const cityCtrl = require("../controller/city-ctrl");

router.get("/city", cityCtrl.getDataIleDeFrance);

module.exports = router;
