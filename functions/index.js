
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51OmR3hLqQYXclDvRAytsWwNnzCLjU5mkiGTtqCB0cbUNVuAONy0XvQkfjKdCBX2Ex2BBjir1Uis1RuFnfnru7Y1x00urrC0a1Y')

// API

// App Config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send
('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Recieved!!! >>> ', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
      });
    
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// Listen Command
exports.api = onRequest(app);

// my API endpoint
// http://127.0.0.1:5001/challenge-91ace/us-central1/api