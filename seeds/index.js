//We can run this file seperately to seed our database.
//Seed are just helper files that cna give info and make random names for the campgrounds for the db
const mongoose = require("mongoose");
const Campground = require("../models/campground"); //requiring the model

mongoose.connect("mongodb://localhost:27017/yelp-camp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}); //Required by mongoose guidlines as it is the default port at which the db is generated

const db = mongoose.connection; //Formailites for Db connection with our app
db.on("error", console.error.bind(console, "Connection error"));
db.once("open", () => {
  console.log("Database connected");
});

const seedDB = async () => {
  await Campground.deleteMany({}); //This is to delete everyhting in the campground db

  //for example
  const c = new Campground({ title: "Rocky Roads", price: "66" });
  await c.save(); //everyhting before c will be deleted and this will be the only entry in the db
};

seedDB();
