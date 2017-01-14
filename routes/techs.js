var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://teri:teri@ds163738.mlab.com:63738/shockandvibedb', ['techs']);


//Get All techs
router.get('/techs', function(req, res, next){
    db.techs.find(function(err, techs){
       if(err){
           res.send(err);
       } 
       res.json(techs);
    });
});

//Get Single tech
router.get('/tech/:id', function(req, res, next){
    db.techs.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, tech){
       if(err){
           res.send(err);
       } 
       res.json(tech);
    });
});

//Save tech
router.post('/tech', function(req, res, next){
    var tech = req.body;
    if(!tech.title || !(tech.isDone + '')){
        res.status(400);
        res.json({
            "error": "bad data"
        });

    } else {
        db.techs.save(tech, function(err, tech){
            if(err){
            res.send(err);
            } 
            res.json(tech);
        });
    }
});

//Delete tech
router.delete('/tech/:id', function(req, res, next){
    db.techs.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, tech){
       if(err){
           res.send(err);
       } 
       res.json(tech);
    });
});

//Update tech
router.put('/tech/:id', function(req, res, next){
    var tech = req.body;
    var updtech = {};

    if (tech.isDone){
        updtech.isDone = tech.isDone;
    }

    if (tech.title){
        updtech.title = tech.title;
    }

    if (!updtech){
        res.status(400);
        res.json({
            "error": "bad data"
         }); 
    } else {
        db.techs.update({_id: mongojs.ObjectId(req.params.id)}, updtech, {}, function(err, tech){
       if(err){
           res.send(err);
       } 
       res.json(tech);
    });
    }  
});

module.exports = router;
