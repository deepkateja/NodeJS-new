const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the leaders to you!');
})
.post((req, res, next) => {
    res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /leaders');
})
.delete((req, res, next) => {
    res.end('Deleting all leaders');
});

leaderRouter.route('/:leaderId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.post((req,res,next) =>{
    res.statusCode = 403;
    res.end('Post operation not suppored on leader:'+req.params.leaderId);
})
.put((req,res,nex) =>{
    res.write('Updating the leader ' + req.params.leaderId + '\n');
    res.end('Will update the leader: ' + req.body.name+' with details: ' + req.body.description);
})
.get((req,res,next) => {
    res.end("Will Send detail of the leader: " + req.params.leaderId);
})
.delete((req,res,next) => {
    res.end("Deleting leader: "+ req.params.leaderId);
});

module.exports = leaderRouter;