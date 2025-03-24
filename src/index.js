import dotenv from "dotenv";
import { app } from "./app.js";
import ConnectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});
ConnectDB()
  .then(() => {
    app.listen(process.env.PORT || 8080, () => {
      console.log(`Server start at port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO ERROR", err);
  });
