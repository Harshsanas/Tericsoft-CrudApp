const { Schema, model } = require("mongoose");

//form schema for taking inputs from the form and storing in the form of database
const formSchema = new Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    mobile: { type: Number, require: true },
    date: { type: String, default: Date },
    gender: { type: String, enum: ["male", "female"]},
    hobbies:{ type: String }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("form", formSchema);
