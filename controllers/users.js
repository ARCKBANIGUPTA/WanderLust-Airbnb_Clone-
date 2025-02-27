const User = require("../models/users.js");

module.exports.signupGET = (req, res) => {
  res.render("users/signup.ejs");
};

module.exports.signupPOST = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new User({ username, email });
    const regUser = await User.register(newUser, password);
    console.log(regUser);
    req.login(regUser, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", "you are logged in!");
      return res.redirect("/listings");
    });
    req.flash("success", "Sign Up is successful !!! ");
    res.redirect("/listings");
    console.log(req);
  } catch (err) {
    req.flash("error", err.message);
    return res.redirect("/signup");
  }
};

module.exports.loginGET = (req, res) => {
  res.render("users/login.ejs");
};

module.exports.loginPOST = async (req, res) => {
  req.flash("success", "Welcome to Airbnb! you have succesfully logged in");
  res.redirect(res.locals.redirectUrl);
  console.log(req.user);
};

module.exports.logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "you are logged out!");
    res.redirect("/listings");
  });
};
