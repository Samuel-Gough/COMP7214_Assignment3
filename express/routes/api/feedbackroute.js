const express = require('express');
const router = express.Router();

const feedback = require('../../models/feedback');

//@route    GET /api/feedback
//@desc     Get all feedback records from the DB
//@access   Public
router.get('/', function( req, res){  
    feedback
    .find() 
    .sort({feedbk: 1})  
    .then( function( feedbk ){ 
        res.json( feedbk ); 
    }) 
    .catch( function( err ){ 
        console.log( err ); 
    }) 
});

//@route    GET /api/names/:type
//@desc     Get all feedback from the DB matching the parameter
//@access   Public
router.get('/:type', function( req, res){  
    feedback
    .find({type: req.params.type}) 
    .sort({type: 1})  
    .then( function( type ){ 
        (type === 0) ? res.json({"msg": `${req.params.type} does not exist`}) : res.json( type );
    }) 
    .catch( function( err ){ 
        console.log( err ); 
    }) 
}); 

//@route    POST /api/feedback/
//@desc Add a new Feedback record to the DB 
//@access Public 
router.post('/', function( req, res){ 

    let newFeedback = new Feedback(req.body);

    newFeedback
    .save(newFeedback)
    .then(() => {
        res.json({
            success:'Feedback Added'}); 
        })
    .catch(err => {
        res.status(404).json({
            error: err
        })
    })

});

//@route    DELETE /api/feedback/:id
//@desc     Delete a feedback from the DB by _id key 
//@access   Public (should be secured) 
router.delete('/:id', function( req, res){  

    feedback
    .findByIdAndDelete(req.params.id)
    .then(feedbk => {
        feedbk.remove();
        res.json({
            success:'Feedback Deleted'}); 
        })
    .catch(err => {
        res.status(404).json({
            error: err
        })
    }) 

}); 

module.exports = router;