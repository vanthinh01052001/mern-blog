import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    profilePicture: {
      type: String,
      default:
        "https://img.icons8.com/?size=100&id=fUUEbUbXhzOA&format=png&color=000000",
    },
  },
  { timestamps: true }
);
const User = mongoose.model('User', userSchema);
export default User;