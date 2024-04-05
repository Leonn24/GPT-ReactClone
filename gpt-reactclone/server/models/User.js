const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
const cookie = require("cookie");

//models
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "USername is Required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password length should be 6 character long"],
  }
});

userSchema.pre("save", async function (next) {
    //update
    if (!this.isModified("password")) {
      next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });

userSchema.methods.matchPassword=async function(password) {
    return await bcrypt.compare(password, this.password)
};

// signToken: function ({ email, username, _id }) {
//     const payload = { email, username, _id };
//     return JWT.sign({ data: payload }, secret, { expiresIn:  });
// }