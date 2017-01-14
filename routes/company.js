var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://teri:teri@ds163738.mlab.com:63738/shockandvibedb', ['company']);


//Get All companies
router.get('/company', function(req, res, next){
    db.company.find(function(err, company){
       if(err){
           res.send(err);
       } 
       res.json(company);
    });
});

//Get Single company
router.get('/company/:id', function(req, res, next){
    db.company.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, company){
       if(err){
           res.send(err);
       } 
       res.json(company);
    });
});

//Save company
router.post('/company', function(req, res, next){
    var company = req.body;
    if(!company.CompanyName){
        res.status(400);
        res.json({
            "error": "bad data"
        });

    } else {
        db.company.save(company, function(err, company){
            if(err){
            res.send(err);
            } 
            res.json(company);
        });
    }
});

//Delete company
router.delete('/company/:id', function(req, res, next){
    db.company.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, company){
       if(err){
           res.send(err);
       } 
       res.json(company);
    });
});

//Update company
router.put('/company/:id', function(req, res, next){
    var company = req.body;
    var updjob = {};

    if (company.isDone){
        updjob.isDone = company.isDone;
    }

    if (company.title){
        updjob.title = company.title;
    }

    if (!updjob){
        res.status(400);
        res.json({
            "error": "bad data"
         }); 
    } else {
        db.company.update({_id: mongojs.ObjectId(req.params.id)}, updjob, {}, function(err, company){
       if(err){
           res.send(err);
       } 
       res.json(company);
    });
    }  
});

module.exports = router;
