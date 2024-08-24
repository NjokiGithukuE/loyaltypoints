"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var base_url = 'https://centyplus.co.ke/';
// var base_url :String = 'http://localhost:3059/';
exports.config = {
    'validation_url': base_url + 'loyalty/v1/c2b-validation/success',
    'confirmation_url': base_url + 'loyalty/v1/c2b-confirmation/success',
    // "confirmation_url": 'https://ujenzi.co.ke/api/v1/c2b-confirmation/success',
    'callback_url': base_url + 'loyalty/v1/callback/process',
    'callback_url_reg': base_url + 'loyalty/v1/callback/processreg',
    'api_mpesa': base_url + 'loyalty/v1/loyalty/mpesa',
    'api_mpesa_reg': base_url + 'loyalty/v1/loyalty_reg/mpesa',
    'sacco_mpesa': 'https://afi.tridexgroup.com/run/postmpfromstk',
    'sacco_c2b': 'https://afi.tridexgroup.com/run/postmtx',
    'auth': base_url + 'loyalty/v1/auth/register',
    'send_sms': 'https://mysms.celcomafrica.com/api/services/sendsms/',
    "short_code": '7067777',
    "short_code_c2b": '7030010',
    'token': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjM1NDQ0LCJpYXQiOjE1NTkwMjc2NjMsImV4cCI6MTU1OTExNDA2M30.BRxO5IeLq4i27XyIGKds4YlDiXo8YSRg1xZNClwePwI`,
    mpesaConsumerKey: process.env.MPESA_CONSUMER_KEY,
    mpesaConsumerSecret: process.env.MPESA_CONSUMER_SECRET,
    mpesaB2CConsumerKey: process.env.MPESA_B2C_CONSUMER_KEY,
    mpesaB2CConsumerSecret: process.env.MPESA_B2C_CONSUMER_SECRET,
    mpesaLnmoShortCode: process.env.MPESA_LNMO_SHORT_CODE,
    mpesaB2CShortCode: process.env.MPESA_B2C_SHORT_CODE,
    mpesaTillNumber: process.env.MPESA_TILL_NUMBER,
    mpesaLnmoPassKey: process.env.MPESA_LNMO_PASSKEY,
    mpesaOperatorPassword: process.env.MPESA_OPERATOR_PASSWORD,
    mpesaB2COperatorPassword: process.env.MPESA_B2C_OPERATOR_PASSWORD,
    mpesaUsername: process.env.MPESA_OPERATOR_USERNAME,
    mpesaB2CUsername: process.env.MPESA_B2C_OPERATOR_USERNAME,
    mpesaToken: process.env.MPESA_C2B_TOKEN,
    secCred: process.env.MPESA_SECURITYCRED,
    stkCallbackUrl: `${base_url}loyalty/v1/callback/process`,
    b2cTimeoutUrl: `${base_url}loyalty/v1/b2ctimeout`,
    b2cSuccessUrl: `${base_url}loyalty/v1/b2csuccess`,
};
//# sourceMappingURL=config.js.map