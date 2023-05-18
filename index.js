const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5050;

// regular middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cors middleware
app.use(cors());

// import router
const userRouter = require("./routes/userRouter");
const employeeRouter = require("./routes/employeeRouter");

// routing paths
app.use("/api/v1/users", userRouter);
app.use("/api/v1/employees", employeeRouter);

// Handle uncaught exception
process.on("uncaughtException", (err) => {
  console.log(`ERROR:${err.message}`);
  console.log("Server down due to Uncaught exception");
  process.exit(1);
});

// Listening to port and make running
app.listen(PORT, () => {
  console.log(` server running ....`);
  console.log(`server is up and running on port ${PORT}`);
});

// Handle Unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.log(`ERROR:${err.message}`);
  console.log("Shutting down the server due to Unhandled Promise Rejection");
  server.close(() => {
    process.exit(1);
  });
});
