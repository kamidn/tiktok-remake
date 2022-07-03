import express from "express";
import mongoose from "mongoose";
import Data from "./data.js";

const connection_url = "mongodb+srv://admin:DFWIMYL1lIPMr6hF@cluster0.afz1t.mongodb.net/?retryWrites=true&w=majority";

// app config
const app = express();
const port = 9000;

// middlewares

// DB config

// api endpoints
app.get("/", (req, res) => res.status(200).send("Hello World"));
app.get("/v1/post", (req, res) => res.status(200).send(Data));


// app listen
app.listen(port, () => console.log(`Listening on localhost: ${port}`));