const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const review = require("./reviews.js");
const ListingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    maxLength: 400,
  },
  image: {
    url: String,
    filename: String,
  },
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  country: {
    type: String,
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

ListingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await review.deleteMany({ _id: { $in: listing.reviews } });
  }
});
const Listing = mongoose.model("Listing", ListingSchema);

module.exports = Listing;
