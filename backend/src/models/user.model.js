import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    profile: {
      photo: {
        type: String,
        default: null, // default to null if no photo is uploaded
      },
      shortBio: {
        type: String,
        default: null, // default to null if no short bio is uploaded
      },
    },
  },
  { timestamps: true, versionKey: false }
);

const UserModel = mongoose.model("users", userSchema);
export default UserModel;
