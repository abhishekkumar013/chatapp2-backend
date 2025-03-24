import mongoose from "mongoose";

const UserSchema = new mongoose.model(
  {
    name: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (v) {
          return /^[0-9]{10}$/.test(v);
        },
        message: "Please enter a valid 10-digit number",
      },
      password: {
        type: String,
        required: true,
        minlength: 6,
      },
      profilePic: {
        type: String,
        default:
          "https://img.freepik.com/premium-vector/young-man-face-avater-vector-illustration-design_968209-15.jpg?ga=GA1.1.1408379961.1714224392&semt=ais_hybrid",
      },
    },
  },
  { timestamps: true }
);

export const UserModel = mongoose.model("User", UserSchema);
