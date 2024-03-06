import express from "express";
import path from "path";
import mongoose from "mongoose";
import dotenv from "dotenv";
import seedRouter from "./routes/seedRoutes.js";
import productRouter from "./routes/productRoutes.js";
import userRouter from "./routes/userRoutes.js";
import orderRouter from './routes/orderRoutes.js';
import uploadRouter from "./routes/uploadRoutes.js";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const route = express.Router();
dotenv.config();



const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGO_URI, {

  useNewUrlParser: "true",
  useUnifiedTopology: "true"

})
mongoose.connection.on("error", err => {

  console.log("err", err)

})
mongoose.connection.on("connected", (err, res) => {

  console.log("mongoose is connected")

})

app.get("/api/keys/google", (req, res) => {
  res.send({ key: process.env.GOOGLE_API_KEY || "" });
});

app.use("/api/seed", seedRouter);
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);

// Don't forget to add the uploadRouter if needed



const port = process.env.PORT || 6080;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
