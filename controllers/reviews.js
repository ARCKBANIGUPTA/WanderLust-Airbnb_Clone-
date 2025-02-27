const review = require("../models/reviews");
const listing = require("../models/listing.js");

module.exports.createReview = async (req, res) => {
  let { id } = req.params;
  const list = await listing.findById(id);
  const newreview = new review(req.body.review);

  await newreview.save().catch((err) => {
    console.log(err);
  });
  list.reviews.push(newreview);
  await list.save().catch((err) => {
    console.log(err);
  });
  req.flash("success", "New Review Created!!!");
  res.redirect(`/listings/${id}`);
};

module.exports.deleteReview = async (req, res) => {
  let { id, reviewId } = req.params;
  await listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await review.findByIdAndDelete(reviewId);
  req.flash("success", "Review Deleted !!!");
  res.redirect(`/listings/${id}`);
};
