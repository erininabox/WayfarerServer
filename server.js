// imports
require("dotenv").config();
const express = require("express");
const session = require("express-session");
const citiesController = require("./controllers/citiesController");
const articlesController = require("./controllers/articlesController");
const cors = require("cors");
const port = process.env.PORT || 4000;
const app = express();
const rowdy = require("rowdy-logger");
const rowdyResults = rowdy.begin(app);
const db = require('./models')

// middleware
// cors allows the express server to take reqs from react
app.use(cors());
// use json to parse the form data
app.use(express.json());

// authentication
app.use(session({ secret: process.env.SESSION_SECRET }));

// Sign Up a New User
app.post("/signup", (req, res) => {
  // 1. ✅ take in the username and password from the form
  console.log(req.body);
  // 2. ✅ Make a query to create a new User
  db.User.create(req.body, (err, createdUser) => {
    if (err) console.log(err);
    console.log(createdUser);
    // 3. ✅ Redirect to /login
    //TALK TO HENRY ABOUT THIS
    req.session.currentUser = createdUser;
    res.json({
        message: "We successfully signed up for an account. Hooray!"
    });
  });
});

// Log the user in - track the user in a cookie on their browser
app.post("/login", (req, res) => {
  console.log(req.body);

  // 1. ✅ Check if the user passed in exists
  db.User.findOne({ username: req.body.username }, (err, foundUser) => {
    if (err) return console.log(err);
    // If the username is not correct, send them to the /login page
    if (!foundUser) {
      //TALK TO HENRY ABOUT THIS
      return res.json({
          message: "Username is not found"
      });
    }
    // 2. ✅ Check if the password passed in matches the one on file,
    // if not send them to the /login page
    if (req.body.password !== foundUser.password) {
      //TALK TO HENRY ABOUT THIS
      return res.json({
          message: "Wrong password"
      });
    }
    // 3. ✅ Track the user in a cookie on their browser
    //- Adding a new property into our session object
    //- The session object will be accessible from any of my routes
    req.session.currentUser = foundUser;

    console.log(req.session);

    // After successfully logging in go the fruits index page
    //TALK TO HENRY ABOUT THIS
    res.json({
        message: "You are now logged in"
    });
  });
});
// Logout
app.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

// api routes
app.use("/api/cities", citiesController);
app.use("/api/cities", articlesController);

//listen
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  rowdyResults.print();
});
