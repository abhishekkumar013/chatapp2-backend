import mongoose from "mongoose";

const ConversationSchema = new mongoose.model(
  {
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    ],
  },
  { timestamps: true }
);

export const ConversationModel = mongoose.model(
  "Conversation",
  ConversationSchema
);
