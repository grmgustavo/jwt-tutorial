const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email não informado"],
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Senha não informada"],
    trim: true,
    select: false,
  },
});

userSchema.pre("save", (next) => {
  const hash = (user.password = bcrypt.hashSync(this.password, 8));
  this.password = hash;
  next();
});

module.exports = mongoose.model("User", userSchema);
