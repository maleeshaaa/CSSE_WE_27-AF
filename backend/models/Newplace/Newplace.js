import mongoose from "mongoose";
// const Schema = mongoose.Schema;

const placeSchema = new mongoose.Schema({
    province: {
      type: String,
      required: true,
    },
    districts: {
      type: [String],
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    days: {
      type: Number,
      required: true,
    },
  });
  
  const Place = mongoose.model('Place', placeSchema);
  
  module.exports = Place;