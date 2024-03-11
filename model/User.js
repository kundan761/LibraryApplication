const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  favourites: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
},{
  versionKey:false
});

UserSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password)
};

module.exports = mongoose.model('User', UserSchema);