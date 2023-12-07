const { Schema, model } = require("mongoose");
const { MongooseError } = require("../helpers");

const Joi = require("joi");

const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/; // example@example.com

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set your name"],
    },
    password: {
      type: String,
      required: [true, "Set password for user"],
      minlength: [6, "Password must contain at least 6 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      match: [emailRegexp, "Email format is not valid"],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: {
      type: String,
      default: "",
    },
    avatarURL: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

userSchema.post("save", MongooseError);

const registerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

const schemas = {
  registerSchema,
  loginSchema,
};

const User = model("user", userSchema);

module.exports = {
  User,
  schemas,
};
