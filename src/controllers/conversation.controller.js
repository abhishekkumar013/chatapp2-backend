import { ConversationModel } from "../model/conversation.model.js";

export const AddConversation = async (req, res) => {
  try {
    const senderId = req.user._id; // Ensure it's _id
    const { recipientId } = req.body;

    if (!recipientId) {
      return res.status(400).json({
        message: "Recipient ID is required",
        success: false,
      });
    }

    const existingConversation = await ConversationModel.findOne({
      members: { $all: [senderId, recipientId] },
    });

    if (existingConversation) {
      return res.status(200).json({
        message: "Conversation already exists",
        success: true,
        conversation: existingConversation,
      });
    }

    const newConversation = await ConversationModel.create({
      members: [senderId, recipientId],
    });

    res.status(201).json({
      message: "Conversation created successfully",
      success: true,
      conversation: newConversation,
    });
  } catch (error) {
    console.error("Error creating conversation:", error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

export const GetAllConversations = async (req, res) => {
  try {
    const userId = req.user._id; // check is _id or id

    const conversations = await ConversationModel.find({
      members: { $in: [userId] },
    }).populate("members", "-password");

    res.status(200).json({
      message: "All conversations retrieved successfully",
      success: true,
      conversations,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};
