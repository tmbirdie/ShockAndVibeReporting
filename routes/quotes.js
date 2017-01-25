var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://teri:teri@ds163738.mlab.com:63738/shockandvibedb', ['quotes']);

//Get All quotes
router.get('/quotes', function(req, res, next){
    db.quotes.find(function(err, quotes){
       if(err){
           res.send(err);
       } 
       res.json(quotes);
    });
});

//Get Single company
router.get('/quotes/:id', function(req, res, next){
    db.quotes.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, quotes){
       if(err){
           res.send(err);
       } 
       res.json(quotes);
    });
}); // example to get one quote:  http://localhost:3000/api/quotes/5887d760f36d285556553f08

//Save quote
router.post('/quotes', function(req, res, next){
    var quotes = req.body;
    if(!quotes.QuoteName){
        res.status(400);
        res.json({
            "error": "bad data"
        });

    } else {
        db.quotes.save(quotes, function(err, quotes){
            if(err){
            res.send(err);
            } 
            res.json(quotes);
        });
    }
});

module.exports = router;

