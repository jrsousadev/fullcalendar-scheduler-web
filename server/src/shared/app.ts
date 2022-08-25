import dotenv from "dotenv";
import express from "express";
import routes from "./routes";
import cors from "cors";
import "reflect-metadata"
import mongoose from "mongoose";

dotenv.config();
mongoose.connect(process.env.MONGO_URL as string);

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

export default app;
