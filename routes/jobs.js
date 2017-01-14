var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://teri:teri@ds163738.mlab.com:63738/shockandvibedb', ['jobs']);


//Get All jobs
router.get('/jobs', function(req, res, next){
    db.jobs.find(function(err, jobs){
       if(err){
           res.send(err);
       } 
       res.json(jobs);
    });
});

//Get Single job
router.get('/job/:id', function(req, res, next){
    db.jobs.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, job){
       if(err){
           res.send(err);
       } 
       res.json(job);
    });
});

//Save job
router.post('/job', function(req, res, next){
    var job = req.body;
    if(!job.title || !(job.isDone + '')){
        res.status(400);
        res.json({
            "error": "bad data"
        });

    } else {
        db.jobs.save(job, function(err, job){
            if(err){
            res.send(err);
            } 
            res.json(job);
        });
    }
});

//Delete job
router.delete('/job/:id', function(req, res, next){
    db.jobs.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, job){
       if(err){
           res.send(err);
       } 
       res.json(job);
    });
});

//Update job
router.put('/job/:id', function(req, res, next){
    var job = req.body;
    var updjob = {};

    if (job.isDone){
        updjob.isDone = job.isDone;
    }

    if (job.title){
        updjob.title = job.title;
    }

    if (!updjob){
        res.status(400);
        res.json({
            "error": "bad data"
         }); 
    } else {
        db.jobs.update({_id: mongojs.ObjectId(req.params.id)}, updjob, {}, function(err, job){
       if(err){
           res.send(err);
       } 
       res.json(job);
    });
    }  
});

module.exports = router;
