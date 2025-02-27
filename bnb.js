if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
console.log(process.env.SECRET);

const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
// const listing = require("./models/listing.js");
const methodOverride = require("method-override");
// const review = require("./models/reviews.js");
const ejsMate = require("ejs-mate");
// const Wrap_async = require("./utility/error_1.js");
const Express_err = require("./utility/expresserror.js");
// const { ListingSchema } = require("./schema.js");
// const { ReviewSchema } = require("./schema.js");
const listingRoutes = require("./routes/listing.js");
const reviewsRoutes = require("./routes/reviews.js");
const userRoutes = require("./routes/users.js");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const localStrategy = require("passport-local");
const User = require("./models/users.js");

main()
  .then((res) => {
    console.log("connection is success");
  })
  .catch((err) => {
    console.log("err");
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Wanderlust");
}
const sessionOptions = {
  secret: process.env.SECRET,
  resave: false,
  saveUninitilized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public ")));
app.use(session(sessionOptions));
app.use(flash());
//implementing  passport
app.use(passport.initialize());
app.use(passport.session());
// passport.use(new localStrategy(User, passport.authenticate()));
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
//for flashing messages
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  // console.log(res.locals.success);
  res.locals.curruser = req.user;
  next();
});

//all routes related to listings
app.use("/listings", listingRoutes);

//all routes related to reviews
app.use("/listings/:id/reviews", reviewsRoutes);

//all routes related to users(sign up)
app.use("/", userRoutes);

// middleware for wrong route
app.all("*", (req, res, next) => {
  next(new Express_err(404, "Page Not Found !"));
});

// middleware to reslove the error from data base
app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong!" } = err;
  res.render("error.ejs", { message });

  res.status(statusCode).send(message);
});
app.listen(8080, () => {
  console.log("App is listening !!!");
});

//demo user
// app.get("/demo", async (req, res) => {
//   let fakeuser = new User({
//     email: "hellochai@gmail.com",
//     username: "gatekey5779",
//   });
//   let reguser = await User.register(fakeuser, "helloguyz");
//   res.send(reguser);
// });
