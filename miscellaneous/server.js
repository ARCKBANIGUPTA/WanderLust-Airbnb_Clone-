const express = require("express");
const app = express();
const ES = require("express-session");
const flash = require("connect-flash");
const path = require("path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(
  ES({
    secret: "keyboard cat",
    resave: false, // This stores the temporary data to the store OR database when it is true , in false does not store the data in database
    saveUninitialized: true, //
    // cookie: { secure: true }
  })
);
app.use(flash());

app.get("/register", (req, res) => {
  let { name = "anonymous " } = req.query;
  req.session.name = name; //we can create a new variable inside session
  console.log(req.session.name);
  res.send(req.session.name);
  req.flash("success", "user is succesfully registered ! "); // flash(key , message )
  res.redirect("/hello");
});

app.get("/hello", (req, res) => {
  // res.send(`hello ${req.session.name}`); //req session is globally accessible
  res.render("page.ejs", { name: req.session.name });
});

// app.get("/reqcount", (req, res) => {
//   if (req.session.count) {
//     req.session.count++;
//   } else {
//     req.session.count = 1;
//   }
//   res.send(`You visited the website for ${req.session.count} times`);
// });

// app.get("/test", (req, res) => {
//   res.send("Test is succesful !!! ");
// });

app.listen(3000, () => {
  console.log("app is listening");
});
