import { ChatPayload } from "./dto/ChatPayload";
import { Request, Response } from "express";
import chatgpt from "./services/chatgpt";

const express = require("express");
const app = express();
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

router.post("/chat", async (req: Request, res: Response) => {
  try {
    const payload: ChatPayload = req.body;
    const response = await chatgpt.chatCompletion(payload.conversations);
    res.json(response);
  } catch (err) {
    console.error(err);
  }
});

app.listen(5001, () => {
  console.log("Server started on port 5001");
});
