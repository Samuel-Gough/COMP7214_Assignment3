const express = require('express');
const app = express();
const port = 4000;

const mongoose = require('mongoose');
const bodyparser = require('body-parser');

const loginroute = require('./routes/api/loginroute');
const feedbackroute = require('./routes/api/feedbackroute');
const contactroute = require('./routes/api/contactroute');


app.use(bodyparser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api/login', loginroute );
app.use('/api/viewfeedback', feedbackroute );
app.use('/api/contact', contactroute);

const db = require('./config/keys').mongoURI;

mongoose.connect( db, {useNewURLParser: true})   
    .then( function(){ 
        console.log('MongoDB connected...');   
    })   
    .catch( function( err ){ 
        console.log( err )   
    });

app.get('/', (req, res) => {
    res.json({reply:'Route for HOME path.'});
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

//Run app, then load http://localhost:port in a browser to see the output.