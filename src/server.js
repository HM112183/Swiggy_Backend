const express = require("express");
const cors = require("cors");
const restaurantRoutes = require("./routes/restaurantRoutes");
const homeRoutes = require("./routes/homeRoutes");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/restaurants", restaurantRoutes);
app.use("/api/home", homeRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Swiggy Backend Running"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});