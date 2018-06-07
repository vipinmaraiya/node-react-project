const express = require("express");
const app = express();
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const passport = require("passport");
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");

mongoose.connect(keys.mongoURI);

require("./models/User");
require("./models/Survey");
require("./services/passport");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);
require("./routes/surveyRoutes")(app);

app.use(express.static(path.resolve("./client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve("./client/build/index.html"));
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
