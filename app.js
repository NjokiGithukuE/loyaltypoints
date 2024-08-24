const express = require('express');
const cors = require('cors');
const airtimeRoutes = require('./routes/airtimeRoutes');
// const whatsappBot = require('./services/whatsappBotService');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());  

app.use('/api', airtimeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));