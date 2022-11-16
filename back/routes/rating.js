const express = require("express");
const router = express.Router();
const ratingCtrl = require("../controller/rating-ctrl");

router.get("/ratings", ratingCtrl.getRatings);
router.get("/ratings/pending", ratingCtrl.getRatingsPending);
router.put("/ratings/status", ratingCtrl.updateStatus);
router.post("/add-rating", ratingCtrl.createRating);

module.exports = router;
