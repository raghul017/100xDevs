const express = require("express");

const app = express();

// this is a middleware - which is called in all the methods - get post put delete
// this is used for common middleware which is needed in all the methods which need to ne checked
app.use(express.json());

// this type of middleware is a custom middleware which we need to mention where we are
// using it or else this will not be considered
function userMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;
  if (username != "raghul" || password != "pass") {
    res.status(400).json({ msg: "Somethings up with you inputs  " });
    return;
  } else {
    next();
  }
}

function kidneyMiddleware(req, res, next) {
  const kidneyId = req.query.kidneyId;
  if (kidneyId != 1 && kidneyId != 2) {
    res.status(400).json({
      msg: "Wrong inputs",
    });
  } else {
    next();
  }
}

app.get("/health-checkup", userMiddleware, kidneyMiddleware, (req, res) => {
  res.send("Your heart is healthy ");
});

app.listen(3001);
