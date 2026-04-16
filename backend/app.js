const stockRoutes = require("./routes/stockRoutes");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const tradingRoutes = require("./routes/tradingRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();

const cors = require("cors");

app.use(cors({
  origin: [
    "https://zerodha-clone-frontend-u2y1.onrender.com",
    "https://zerodha-clone-dashboard-jwe7.onrender.com"
  ],
  credentials: true
}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({
    name: "StockBroker API",
    status: "ok",
    health: "/health",
    apiBase: "/api",
  });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/auth", authRoutes);
app.use("/api", tradingRoutes);
app.use("/api/stocks", stockRoutes);
app.use(notFound);
app.use(errorHandler);

module.exports = { app };
