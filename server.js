var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var jobs = require('./routes/jobs');
var techs = require('./routes/techs');
var company = require('./routes/company');
var quotes = require('./routes/quotes');

var port = 3000;

var app = express();

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));

// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api', jobs);
app.use('/api', techs);
app.use('/api', company);
app.use('/api', quotes);

app.listen(port, function(){
    console.log('Server started on port ' + port);
});






