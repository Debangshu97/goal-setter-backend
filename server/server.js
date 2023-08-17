const express = require("express");
const dotenv= require("dotenv").config();
const {errorHandler} = require("./middleware/errorMiddleware");
const colors=require("colors");
const port=process.env.PORT || 0;
const connectDB = require("./config/db");

connectDB()

const app = express();

app.use(express.json());
app.use((req, res, next) => {
  // Replace * with the specific origin you want to allow, or use a list of allowed origins
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(express.urlencoded({ extended: false }));
app.use('/api/goals',require("./routes/goalRoutes"));
app.use('/api/users',require("./routes/userRoutes"));
app.use(errorHandler)



app.listen(port, function() {
    console.log("server started on port 5000");
})