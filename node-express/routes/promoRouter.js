const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the promotions to you!');
})
.post((req, res, next) => {
    res.end('Will add the promotions: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})
.delete((req, res, next) => {
    res.end('Deleting all promotions');
});

promoRouter.route('/:promoId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.post((req,res,next) =>{
    res.statusCode = 403;
    res.end('Post operation not suppored on promo:'+req.params.promoId);
})
.put((req,res,nex) =>{
    res.write('Updating the promo ' + req.params.promoId + '\n');
    res.end('Will update the promo: ' + req.body.name+' with details: ' + req.body.description);
})
.get((req,res,next) => {
    res.end("Will Send detail of the promo: " + req.params.promoId);
})
.delete((req,res,next) => {
    res.end("Deleting promo: "+ req.params.promoId);
});

module.exports = promoRouter;