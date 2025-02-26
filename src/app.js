import express from "express";
import userRouter from "./routes/user.router.js";
import studentRouter from "./routes/student.router.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

//Cargamos las variables de entorno
dotenv.config({ path: "../.env" });
const urlMongo = process.env.URI_MONGO;
const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => console.log(`Listening on PORT: ${port}`));

mongoose.connect(urlMongo).then().catch();

app.use("/api/user", userRouter);
app.use("/api/student", studentRouter);
