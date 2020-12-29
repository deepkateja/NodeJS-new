const express = require('express');
const http = require('http');
const hostname = 'localhost';
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = 3000;
const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json()); 

{/*app.all('/dishes', (req,res,next) =>{
    res.statusCode = 200;
    res.setHeader('Content-type','text/plain');
    next();
});

app.post('/dishes', (req,res,nex) =>{
    res.end('Will add the dish: ' + req.body.name + 'with detail: ' + req.body.description);
});

app.put('/dishes', (req,res,nex) =>{
    res.statusCode = 403;
    res.end('PUT request not supported');
});

app.get('/dishes', (req,res,next) => {
    res.end("Will Send ALl the dishes to You");
});

app.delete('/dishes', (req,res,next) => {
    res.end("Deleting all the dishes!!");
});

app.post('/dishes/:dishId', (req,res,next) =>{
    res.statusCode = 403;
    res.end('Post operation not suppored on dishes/'+req.params.dishId);
});

app.put('/dishes/:dishId', (req,res,nex) =>{
    res.write('Updating the dishL ' + req.params.dishId + '\n');
    res.end('Will update the dish: ' + req.body.name+' with details: ' + req.body.description);
});

app.get('/dishes/:dishId', (req,res,next) => {
    res.end("Will Send detail of the dish: " + req.params.dishId);
});

app.delete('/dishes/:dishId', (req,res,next) => {
    res.end("Deleting dish: "+ req.params.dishId);
});*/}
app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);
app.use(express.static(__dirname+ '/public'));


app.use((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-type','text/html');
    res.end('<html><body><h1>This is an express Server</h1></body></html>');
});

const server = http.createServer(app);
server.listen(port,hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
}) ;
