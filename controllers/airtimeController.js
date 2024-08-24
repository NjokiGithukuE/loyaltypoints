const africastalkingService = require('../services/africastalkingservice');
// const loyaltyService = require('../services/loyaltyService');

const calculateLoyaltyPoints = (amount) => {
    return amount * 0.02; 
};

exports.sendAirtime = async (req, res) => {
    try {
        const { phoneNumber, amount } = req.body;

        // if (!phoneNumber || !amount) {
        //     return res.status(400).json({ error: 'Phone number and amount are required' });
        // }

        const response = await africastalkingService.sendAirtime(phoneNumber, amount);
        console.log('Airtime Response:', response);

        const loyaltyPoints = calculateLoyaltyPoints(amount);
        // return('Loyalty Points Awarded:', loyaltyPoints)
        // await loyaltyService.saveLoyaltyPoints(phoneNumber, loyaltyPoints);
        console.log('Loyalty Points Awarded:', loyaltyPoints);

        res.status(200).json({ success: true, response, loyaltyPoints });
        console.log(response);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: error.message });
    }
};
