try {
  const mongoose = require("mongoose");
  const passport = require("passport");
  const Schema = mongoose.Schema;
  const passportLocalMongoose = require("passport-local-mongoose");

  const UserSchema = new Schema({
    username: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
  });
  UserSchema.plugin(passportLocalMongoose);

  User = mongoose.model("User", UserSchema);
  module.exports = User;
} catch (error) {
  console.log(error);
}
