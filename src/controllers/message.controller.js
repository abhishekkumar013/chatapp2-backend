import { MessageModel } from "../model/message.model.js";

export const sendMesage = async (req, res) => {
  try {
    const { conversation, message } = req.body;
    const sender = req.userId;

    const addMessage = await MessageModel.create({
      conversation,
      sender,
      message,
    });

    return res.status(201).json({
      message: "Message sent successfully",
      success: true,
      message: addMessage,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

export const GetMessage = async (req, res) => {
  try {
    const { conversationId } = req.params;

    const messages = await MessageModel.find({ conversation: conversationId })
      .populate("sender", "-password")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      message: "Messages retrieved successfully",
      success: true,
      messages,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};
