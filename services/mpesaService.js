"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const request_1 = __importDefault(require("request"));
const moment_1 = __importDefault(require("moment"));
const config_1 = require("../config/config");

const CONSUMER_KEY = process.env.MPESA_CONSUMER_KEY ;
const CONSUMER_SECRET = process.env.MPESA_CONSUMER_SECRET ;
const PASSKEY = process.env.MPESA_LNMO_PASSKEY ;

const ACCESS_TOKEN_URL = 'https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';
const B2C_URL = 'https://api.safaricom.co.ke/mpesa/b2c/v1/paymentrequest';
const STK_PUSH_URL = 'https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest';
const C2B_REGISTER_URL = 'https://api.safaricom.co.ke/mpesa/c2b/v1/registerurl';

exports.getAccessToken = () => {
    let auth = `Basic ${Buffer.from(CONSUMER_KEY + ':' + CONSUMER_SECRET).toString('base64')}`;
    return new Promise((resolve, reject) => {
        request_1.default({
            url: ACCESS_TOKEN_URL,
            headers: { 'Authorization': auth },
        }, (error, response, body) => {
            if (error) {
                reject(error);
            } else {
                const token = JSON.parse(body).access_token;
                resolve({ token });
            }
        });
    });
};

exports.initiateB2C = (token, shortCode, amount, msisdn, billRefNumber = "faini") => {
    const auth = `Bearer ${token}`;
    const data = {
        'InitiatorName': "finsacco",
        'SecurityCredential': config_1.config.secCred,
        'CommandID': "BusinessPayment",
        'Amount': amount,
        'PartyA': shortCode,
        'PartyB': msisdn,
        'Remarks': "Payments",
        'QueueTimeOutURL': config_1.config.b2cTimeoutUrl,
        'ResultURL': config_1.config.b2cSuccessUrl,
        'Occasion': "SaccoWithdraws",
    };

    return new Promise((resolve, reject) => {
        request_1.default({
            method: 'POST',
            url: B2C_URL,
            headers: {
                "Authorization": auth
            },
            json: data
        }, (error, response, body) => {
            if (error) {
                reject(error);
            } else {
                resolve(body);
            }
        });
    });
};

exports.initSTKPush = (token, shortCode, amount, partyA, partyB, phoneNumber, callbackURL, accountReference, transactionDesc = 'CustomerBuyGoodsOnline') => {
    const auth = `Bearer ${token}`;
    const timestamp = moment_1.default(moment_1.default.now()).format('YYYYMMDDHHmmss');

    const data = {
        'BusinessShortCode': shortCode,
        'Password': Buffer.from(shortCode + PASSKEY + timestamp).toString('base64'),
        'Timestamp': timestamp,
        'TransactionType': 'CustomerPayBillOnline',
        'Amount': amount,
        'PartyA': partyA,
        'PartyB': partyB,
        'PhoneNumber': phoneNumber,
        'CallBackURL': callbackURL,
        'AccountReference': accountReference,
        'TransactionDesc': transactionDesc
    };

    return new Promise((resolve, reject) => {
        request_1.default({
            method: 'POST',
            url: STK_PUSH_URL,
            headers: {
                'Authorization': auth
            },
            json: data
        }, (error, response, body) => {
            if (error) {
                reject(error);
            } else {
                resolve(body);
            }
        });
    });
};

exports.registerCallbackUrl = (token, shortCode, responseType, confirmationURL, validationURL) => {
    const auth = `Bearer ${token}`;
    const data = {
        "ShortCode": shortCode,
        "ResponseType": responseType,
        "ConfirmationURL": confirmationURL,
        "ValidationURL": validationURL
    };

    return new Promise((resolve, reject) => {
        request_1.default({
            method: 'POST',
            url: C2B_REGISTER_URL,
            headers: {
                "Authorization": auth
            },
            json: data
        }, (error, response, body) => {
            if (error) {
                reject(error);
            } else {
                resolve(body);
            }
        });
    });
};
