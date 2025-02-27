const express = require("express");
const router = express.Router({ mergeParams: true });
const review = require("../models/reviews.js");
const Wrap_async = require("../utility/error_1.js");
const listing = require("../models/listing.js");
const { ReviewSchema } = require("../schema.js");
const Express_err = require("../utility/expresserror.js");
const ReviewController = require("../controllers/reviews.js");

const validate_review = (req, res, next) => {
  let { error } = ReviewSchema.validate(req.body);
  if (error) {
    throw new Express_err(400, error);
  } else {
    next();
  }
};

//review route
router.post("/", validate_review, Wrap_async(ReviewController.createReview));
//delete review route
router.delete("/:reviewId", Wrap_async(ReviewController.deleteReview));

module.exports = router;
