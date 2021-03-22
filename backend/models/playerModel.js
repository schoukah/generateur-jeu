//set up your schema
// specifies what kinds of data the database takes
import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const PlayerSchema = new Schema({
  firstNname: {
    type: String,
    required: true,
  },
  lastNname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
  },
  isCoach: {
    type: Boolean,
    default: false,
  },
  team: {
    type: String,
  },
  speed: {
    type: Number,
    enum: [1, 2, 3],
  },
  endurance: {
    type: Number,
    enum: [1, 2, 3],
  },
  ability: {
    type: Number,
    enum: [1, 2, 3],
  },
  techniques: {
    type: Number,
    enum: [1, 2, 3],
  },
  tactical: {
    type: Number,
    enum: [1, 2, 3],
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
});