import { UserModel } from "../model/user.model.js";

export const SignUpController = async (req, res) => {
  try {
    const { name, mobileNumber, password, profilePic } = req.body;

    if (!name || !mobileNumber || !password) {
      return res.status(400).json({
        message: "Please provide all required fields",
        success: false,
      });
    }
    const isUserExist = await UserModel.findOne({ mobileNumber });
    if (isUserExist) {
      return res.status(409).json({
        message: "User with this mobile number already exists",
        success: false,
      });
    }
    const userData = { name, mobileNumber, password };
    if (profilePic) {
      userData.profilePic = profilePic;
    }

    const user = await UserModel.create(userData);
    return res.status(201).json({
      message: "User created successfully",
      success: true,
      user,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
      success: false,
    });
  }
};

export const SignInController = async (req, res) => {
  try {
    const { mobileNumber, password } = req.body;
    if (!mobileNumber || !password) {
      return res.status(400).json({
        message: "Please provide all required fields",
        success: false,
      });
    }
    const user = await UserModel.findOne({ mobileNumber });
    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid credentials",
        success: false,
      });
    }
    const token = await user.generateToken();

    const options = {
      httpOnly: true,
      secure: true,
      sameSite: "Lax",
    };
    return res.status(200).cookie("token", token, options).json({
      message: "User logged in successfully",
      success: true,
      user,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
      success: false,
    });
  }
};
