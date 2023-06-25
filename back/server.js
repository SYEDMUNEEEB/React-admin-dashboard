import express from "express";
import data from "./data.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import seedRouter from "./routes/seedRoutes.js";
import productRouter from "./routes/productRoutes.js";
import userRouter from "./routes/userRoutes.js";
import orderRouter from "./routes/orderRoutes.js";

const app = express();
dotenv.config();

{ mongoose.connect(process.env.MONGO_URI,()=>{
  console.log('Mongodb is connected')
})};


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/seed", seedRouter);
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use("/api/order", orderRouter)
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 6080;
app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});