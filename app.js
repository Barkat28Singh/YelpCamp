const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const Campground = require("./models/campground"); //requiring the model

mongoose.connect("mongodb://localhost:27017/yelp-camp", {
  //connecting the DB
}); //Required by mongoose guidlines as it is the default port at which the db is generated

const db = mongoose.connection; //Formailites for Db connection with our app
db.on("error", console.error.bind(console, "Connection error"));
db.once("open", () => {
  console.log("Database connected");
});

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/campgrounds", async (req, res) => {
  const campgrounds = await Campground.find({});
  res.render("campgrounds/index", { campgrounds });
});

app.listen(3000, () => {
  console.log("Active on port: 3000");
});
