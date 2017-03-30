const config = require('./config');
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();

app.set('port', (process.env.PORT || 5000))
// Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))
// Process application/json
app.use(bodyParser.json())
//verify request came from facebook
app.use(bodyParser.json({verify: verifyRequestSignature}));


//The index route
app.get('/', function (req, res) {
	res.send('Chatbot home page')
})

// Facebook Webhook
app.get('/webhook', function (req, res) { 
    if (req.query['hub.verify_token'] === 'secret') {
        res.send(req.query['hub.challenge']);
    } else { 
        res.send('Invalid verify token');
    }
});

/************************* */