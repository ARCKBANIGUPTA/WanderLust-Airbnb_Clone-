const listing = require("../models/listing");
const { isloggedIn } = require("../isloggedin.js");
// home page
module.exports.index = async (req, res) => {
  const All_listings = await listing.find({});

  res.render("listings/home_page.ejs", { All_listings });
};
//new listing
module.exports.new_listing_get = (req, res) => {
  res.render("listings/create_listing.ejs");
};
//show listing
module.exports.show_listing = async (req, res) => {
  let { id } = req.params;
  const details = await listing
    .findById(id)
    .populate("reviews")
    .populate("owner");

  if (!details) {
    req.flash("error", "Listing you requested for does not exist!");
    return res.redirect("/listings");
  }
  res.render("listings/display.ejs", { details });
};
//create new listing
module.exports.create_listing = async (req, res) => {
  let url = req.file.path;
  let filename = req.file.filename;
  console.log(req.body);
  const newListing = new listing(req.body.Listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };
  await newListing.save();
  req.flash("success", "New Listing Created!!!");
  res.redirect("/listings");
};
//edit the listing
module.exports.edit_listing = async (req, res) => {
  let { id } = req.params;
  const crr_list = await listing.findById(id);
  res.render("listings/edit.ejs", { crr_list });
};
//update the above listing
module.exports.update_listing = async (req, res) => {
  let { id } = req.params;

  let Listing = await listing.findByIdAndUpdate(id, {
    ...req.body.Listing,
  });
  if (typeof req.file !== "undefined ") {
    let url = req.file.path;
    let filename = req.file.filename;
    Listing.image = { url, filename };
    await Listing.save();
  }

  req.flash("success", "Listing Updated !!!");
  res.redirect("/listings");
};
//delete route
module.exports.delete_listing = async (req, res) => {
  let { id } = req.params;
  let deleted_listing = await listing.findByIdAndDelete(id);
  console.log(deleted_listing);
  req.flash("success", "Listing Deleted !!!");
  res.redirect("/listings");
};

// if (!req.isAuthenticated()) {
//   req.flash("error", "you must be logged in to delete listing!");
//   return res.redirect("/login");
// }
