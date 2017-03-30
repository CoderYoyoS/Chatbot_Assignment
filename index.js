

// Facebook Webhook
app.get('/webhook', function (req, res) { 
    if (req.query['hub.verify_token'] === 'secret') {
        res.send(req.query['hub.challenge']);
    } else { 
        res.send('Invalid verify token');
    }
});