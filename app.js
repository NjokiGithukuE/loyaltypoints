// const express = require('express');
// const cors = require('cors');
// const path = require('path');
// const airtimeRoutes = require('./routes/airtimeRoutes');
// // const whatsappBot = require('./services/whatsappBotService');

// require('dotenv').config();

// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use(express.static(__dirname));

// app.use('/api', airtimeRoutes);

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
//   });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require("express");
const cors = require("cors");
const path = require("path");
// const bodyParser = require('body-parser');
const airtimeRoutes = require("./routes/airtimeRoutes");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
// app.use(bodyParser.json());
app.use(express.static(__dirname));

// Debugging middleware
// app.use((req, res, next) => {
//   console.log(
//     `${new Date().toISOString()} - ${req.method} request to ${req.url}`
//   );
//   console.log("Request headers:", req.headers);
//   console.log("Request body:", req.body);
//   next();
// });

app.use("/api", airtimeRoutes);

app.get("/", (req, res) => {
  // console.log("Serving index.html");
  res.sendFile(path.join(__dirname, "index.html"));
});

// Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Something broke!");
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
