const Joi = require("joi");

module.exports.ListingSchema = Joi.object({
  Listing: Joi.object({
    title: Joi.string().required(),
    desc: Joi.string().required(),
    price: Joi.number().required().min(0),
    location: Joi.string().required(),
    country: Joi.string().required(),
    image: Joi.string().allow("", null),
    reviews: Joi.string().allow("", null),
    owner: Joi.string().allow("", null),
  }).required(),
});

module.exports.ReviewSchema = Joi.object({
  review: Joi.object({
    comment: Joi.string().required(),
    rating: Joi.number().required().min(1).max(5),
  }).required(),
});
