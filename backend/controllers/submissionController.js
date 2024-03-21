const models = require('../models');

function save(req,res){
    const submission = {
        username: req.body.username,
        language: req.body.language,
        stdin:req.body.stdin,
        sourceCode: req.body.sourceCode,
    }

    models.Submission.create(submission).then(result =>{
        res.status(201).json({
            message:"Submitted Successfully",
            submission: result
        });
    }).catch(error =>{
        res.status(500).json({
            message:"Something went wrong",
            error: error
        });
    });
}

function show(req,res){
    const username= req.params.username;
    models.Submission.findAll({where : {username:username}}).then(result =>{
        res.status(200).json({
            message:"Submitted Successfully",
            submission: result
        });
    }).catch(error =>{
        res.status(500).json({
            message:"Something went wrong",
            error: error
        })
    })
}

module.exports = {
    save:save,
    show:show,
}