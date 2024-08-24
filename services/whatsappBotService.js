const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    console.log('QR RECEIVED', qr);
});

client.on('ready', () => {
    console.log('WhatsApp bot is ready');
});

client.on('message', message => {
    if (message.body.toLowerCase() === 'redeem bonga points') {
        sendBongaRedemptionInstructions(message.from);
    }
});

const sendBongaRedemptionInstructions = async (userNumber) => {
    try {
        await client.sendMessage(userNumber, "Start the Redemption Process:\nTo redeem your Bonga points, dial *126# on your Safaricom line.");
        await delay(2000);
        await client.sendMessage(userNumber, "Select Redemption Option:\nAfter dialing, select the option to redeem Bonga points.");
        await delay(2000);
        await client.sendMessage(userNumber, "Choose Your Preference:\nYou will be prompted to choose what you want to redeem your points for. Options typically include:\n- Data bundles\n- SMS bundles\n- Talk time (minutes)\n- Airtime.");
        await delay(2000);
        await client.sendMessage(userNumber, "Confirm Your Selection:\nOnce you select your preference, confirm the amount of Bonga points you want to redeem.");
        await delay(2000);
        await client.sendMessage(userNumber, "Receive Confirmation:\nAfter successful redemption, you will receive a confirmation SMS regarding your transaction.");
    } catch (error) {
        console.error('Error sending Bonga points redemption instructions:', error);
    }
};

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

client.initialize();

module.exports = client;
