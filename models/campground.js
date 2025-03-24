const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CamgroundSchema = new Schema({
  //The datatbase schema/requirements/outline of what items are entailed in the db wiht its type
  title: String,
  price: String,
  decrisption: String,
  location: String,
});

module.exports = mongoose.model("Campground", CamgroundSchema); //Makes a model object/collectionn type for the database in Mongodb
