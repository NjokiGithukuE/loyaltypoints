// require('dotenv').config();
// const options = {
//   apiKey:
//     process.env.AFRICASTALKING_API_KEY || "55080c4523fc86649eb51a973005740271981968c297f9d633b5be13ab594c71",
//   username: process.env.AFRICASTALKING_USERNAME || "vasmobile",
// };

// const Africastalking = require("africastalking")(options);

// // const africastalking = Africastalking(options);
// const airtime = Africastalking.AIRTIME;

// exports.sendAirtime = (to, amount) => {
//   // return({phoneNumber: to, currencyCode: 'KES', amount: amount});
//   return new Promise((resolve, reject) => {
//     airtime.send(
//       {
//         recipients: [{ phoneNumber: to, currencyCode: "KES", amount: amount }],
//       },
//       (error, response) => {
//         if (error) {
//           return reject(error);
//         }
//         resolve(response);
//       }
//     );
//   });
// };

// require('dotenv').config();
// const axios = require('axios');

// const apiKey = process.env.AFRICASTALKING_API_KEY || "55080c4523fc86649eb51a973005740271981968c297f9d633b5be13ab594c71";
// const username = process.env.AFRICASTALKING_USERNAME || "vasmobile";

// const airtimeUrl = 'https://api.africastalking.com/version1/airtime/send';

// exports.sendAirtime = (to, amount) => {
//   return new Promise((resolve, reject) => {
//     axios.post(
//       airtimeUrl,
//       {
//         recipients: [{ phoneNumber: to, currencyCode: "KES", amount: amount }]
//       },
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           'apiKey': apiKey,
//           'User-Agent': 'axios/1.7.4'
//         }
//       }
//     )
//     .then(response => resolve(response.data))
//     .catch(error => reject(error));
//   });
// };

require("dotenv").config();
// const axios = require("axios");

const options = {
  apiKey:
    "atsk_cbd3d725c376715e139a99701f59f9f8306fe932d14c7252944235d16f54e1b2be53399d",
  username: "sandbox",
};

const Africastalking = require("africastalking")(options);

const airtime = Africastalking.AIRTIME;

exports.sendAirtime = (to, amount) => {
    return new Promise((resolve, reject) => {
        airtime.send({
          recipients: [{ phoneNumber: to, currencyCode: "KES", amount: amount }],
        }, (error, response) => {
          if (error) {
            console.error('Error sending airtime:', error);
            return reject(error);
          }
          resolve(response);
        });
      });
};