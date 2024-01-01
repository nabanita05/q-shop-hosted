import express from "express";
import { config } from "dotenv";
import paymentRoute from "./routes/paymentRoutes.js";
import cors from "cors";
config({ path: "./config/config.env" });

export const app = express();

app.use(cors(
  //need to change the uri
  {
    origin: ["https://q-shop-hosted-frontend.vercel.app"],
    methos: ["POST", "GET"],
    credentials: true,
  }
));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json("Hello")
})

app.use("/api", paymentRoute);

app.get("/api/getkey", (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
);

