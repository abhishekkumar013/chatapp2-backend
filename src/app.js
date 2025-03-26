import express from "express";
import cookieParse from "cookie-parser";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParse());

// Import routes
import AuthRoutes from "./routes/auth.routes.js";

app.use("/api/v1/users", AuthRoutes);

export { app };
