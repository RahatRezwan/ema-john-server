const { MongoClient, ServerApiVersion } = require("mongodb");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

/* MiddleWare */
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
   res.send("Ema john server is running");
});

/* Mongodb Connection */
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.muj8g87.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
   serverApi: ServerApiVersion.v1,
});

app.listen(port, () => {
   console.log("server is running on port: ", port);
});
