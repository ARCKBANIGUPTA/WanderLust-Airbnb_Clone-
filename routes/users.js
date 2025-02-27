const express = require("express");
const router = express.Router();
const Wrap_async = require("../utility/error_1.js");
const Express_err = require("../utility/expresserror.js");
const passport = require("passport");
// const User = require("../models/users.js");
const LocalStrategy = require("passport-local");
const mongoose = require("mongoose");
const userController = require("../controllers/users.js");
const { saveUrl } = require("../isloggedin.js");

router.get("/signup", userController.signupGET);

router.post("/signup", Wrap_async(userController.signupPOST));

router.get("/login", userController.loginGET);

router.post(
  "/login",
  saveUrl,
  passport.authenticate("local", {
    failureRedirect: "/listings ",
    failureFlash: true,
  }),
  userController.loginPOST
);

router.get("/logout", userController.logout);

module.exports = router;
