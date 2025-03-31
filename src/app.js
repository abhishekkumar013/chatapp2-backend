import express from "express";
import cookieParse from "cookie-parser";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParse());

// Import routes
import AuthRoutes from "./routes/auth.routes.js";
import ConversationRoutes from "./routes/conversation.routes.js";
import MessageRoutes from "./routes/message.routes.js";

app.use("/api/v1/users", AuthRoutes);
app.use("/api/v1/conversations", ConversationRoutes);
app.use("/api/v1/chat", MessageRoutes);

export { app };
