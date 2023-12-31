const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;

const GET = require("./routes/GET");
const POST = require("./routes/POST");
const DELETE = require("./routes/DELETE");

app.use(bodyParser.json());

app.use("/api", GET);
app.use("/api", POST);
app.use("/api", DELETE);

mongoose
  .connect(
    "mongodb+srv://ADMIN:ADMIN@cluster0.6hrtdcu.mongodb.net/?retryWrites=true&w=majority"
    
  )
  .then(() => {
    console.log("Connected to database");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
// ********************