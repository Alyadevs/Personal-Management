const express = require('express');
const userRoutes = require("./routes/userroute");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGODBURI, {
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });


const app = express();

app.use(express.json());




const cors = require('cors');
app.use(cors());

app.use("/api/users", userRoutes);


 

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});