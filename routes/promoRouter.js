const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end("will send all promotions to you!");
})
.post((req, res, next) => {
    res.end("will add the promotion:"+ req.body.name + 
    " with details:" + req.body.description);
}).put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported in /promotions');
}).delete((req, res, next) => {
    res.end("Deleting all the promotions!");
});



promoRouter.route('/:promoId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end("will send the details of the promotion: " + req.params.promoId + " to you!");
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported in /promotions/' + req.params.promoId);
})
.put((req, res, next) => {
    res.write('Updating the promotion: '+ req.params.promoId + '\n');
    res.end('Will update the promotion: '+ req.body.name + 
    ' with details: ' + req.body.description);
})
.delete((req, res, next) => {
    res.end("Deleting the promotion: " + req.params.promoId);
});

module.exports = promoRouter;