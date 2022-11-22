const express = require("express");
const router = express.Router();
const ratingCtrl = require("../controller/rating-ctrl");

router.get("/ratings", ratingCtrl.getRatings);
router.get("/ratings/pending", ratingCtrl.getRatingsPending);
router.get("/ratings/getTotalRatingsCity", ratingCtrl.getTotalRatingsByCity);
router.put("/ratings/status", ratingCtrl.updateStatus);
router.post("/add-rating", ratingCtrl.createRating);

module.exports = router;
