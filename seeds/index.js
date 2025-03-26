//We can run this file seperately to seed our database.
//Seed are just helper files that cna give info and make random names for the campgrounds for the db
const mongoose = require("mongoose");
const Campground = require("../models/campground"); //requiring the model
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");

mongoose.connect("mongodb://localhost:27017/yelp-camp", {}); //Required by mongoose guidlines as it is the default port at which the db is generated

const db = mongoose.connection; //Formailites for Db connection with our app
db.on("error", console.error.bind(console, "Connection error"));
db.once("open", () => {
  console.log("Database connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)]; //To select random sample from seed

const seedDB = async () => {
  await Campground.deleteMany({}); //This is to delete everyhting in the campground db

  //This is how we add data into the db, for example
  // const c = new Campground({ title: "Rocky Roads", price: "66" });
  // await c.save();
  //  //everyhting before c will be deleted and this will be the only entry in the db
  for (let i = 0; i < 50; i++) {
    const randomCity1000 = Math.floor(Math.random() * 1000); //This is selecting a random city from the SEED

    const camp = new Campground({
      location: `${cities[randomCity1000].city}${cities[randomCity1000].state}`,

      title: `${sample(descriptors)}${sample(places)}`, //Random places from seeds
    });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
