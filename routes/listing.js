const express = require("express");
const router = express.Router();
const Wrap_async = require("../utility/error_1.js");
const Express_err = require("../utility/expresserror.js");
const { ListingSchema } = require("../schema.js");
const listingcontrollers = require("../controllers/listing.js");
const { isLoggedIn } = require("../isloggedin.js");
const multer = require("multer");
const { storage } = require("../cloudconfig.js");
const upload = multer({ storage });
const listing = require("../models/listing.js");

const validate_Schema = (req, res, next) => {
  let { error } = ListingSchema.validate(req.body);
  if (error) {
    throw new Express_err(400, error);
  } else {
    next();
  }
};

// router.get("/", Wrap_async(listingcontrollers.index));
router
  .route("/")
  .get(Wrap_async(listingcontrollers.index)) //home page
  .post(
    upload.single("Listing[image]"),
    isLoggedIn,
    validate_Schema,
    Wrap_async(listingcontrollers.create_listing)
  ); // create the listing

//New route
router.get("/new", listingcontrollers.new_listing_get); //want to add isLoggedin

router
  .route("/:id")
  .get(Wrap_async(listingcontrollers.show_listing)) //show route
  .put(
    validate_Schema,
    upload.single("Listing[image]"),
    Wrap_async(listingcontrollers.update_listing)
  ) //update the existing listing
  .delete(isLoggedIn, Wrap_async(listingcontrollers.delete_listing)); //delete the listing

//edit route
router.get(
  "/:id/edit",
  isLoggedIn,
  Wrap_async(listingcontrollers.edit_listing)
);

module.exports = router;

// Get request for individual property details(Show route )
// router.get("/:id", Wrap_async(listingcontrollers.show_listing));

// Create route
// router.post(
//   "/",
//   validate_Schema,
//   Wrap_async(listingcontrollers.create_listing)
// );

//update route
// router.put(
//   "/:id",
//   validate_Schema,
//   Wrap_async(listingcontrollers.update_listing)
// );

//delete route
// router.delete("/:id", Wrap_async(listingcontrollers.delete_listing));
