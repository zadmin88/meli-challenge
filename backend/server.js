const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");

// const { itemRoutes } = require("./src/routes/itemRoutes");
const { errorHandler } = require("./src/middleware/errorMiddleware");

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  console.log("object");
  res.status(200).json({ message: "Welcome to the Meli API" });
});

// Routes
app.use("/api/items", require("./src/routes/itemRoutes"));

const server = app.listen(7000, () =>
  console.log(`Server started on port ${7000}`)
);

// Error handling
app.use(errorHandler);

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
