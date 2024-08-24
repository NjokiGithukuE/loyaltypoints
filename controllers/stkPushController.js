// const africastalkingService = require('../services/africastalkingservice');

// const calculateLoyaltyPoints = (amount) => {
//     return amount * 0.02; 
// };

// const sendAirtime = async (req, res) => {
//     try {
//         const { phoneNumber, amount } = req.body;

//         if (!phoneNumber || !amount) {
//             return res.status(400).json({ error: 'Phone number and amount are required' });
//         }

//         const response = await africastalkingService.sendAirtime(phoneNumber, amount);
//         console.log('Airtime Response:', response);

//         const loyaltyPoints = calculateLoyaltyPoints(amount);
//         console.log('Loyalty Points Awarded:', loyaltyPoints);

//         res.status(200).json({ success: true, response, loyaltyPoints });
//     } catch (error) {
//         console.error('Error:', error);
//         res.status(500).json({ error: error.message });
//     }
// };

// module.exports = {
//     sendAirtime
// };


// In your Express controller (e.g., airtimeController.js)

const express = require('express');
const router = express.Router();
const { sendAirtime } = require('../services/africastalkingservice'); 

router.post('/send-airtime', async (req, res) => {
    try {
        const { phoneNumber, amount } = req.body;
        
        if (!phoneNumber || !amount) {
            return res.status(400).json({ error: 'Phone number and amount are required' });
        }
        
        const result = await sendAirtime(phoneNumber, amount);
        
        const loyaltyPoints = (amount * 0.02).toFixed(2); // 2% of the amount
        
        res.json({ message: 'Airtime sent successfully', loyaltyPoints });
    } catch (error) {
        console.error('Error sending airtime:', error);
        res.status(500).json({ error: 'An unexpected error occurred' });
    }
});

module.exports = router;