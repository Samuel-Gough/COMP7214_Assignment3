const express = require('express');
const router = express.Router();

const contacts = require('../../models/contact');

//@route    GET /api/feedback
//@desc     Get all feedback records from the DB
//@access   Public
router.get('/', function( req, res){  
    contacts
    .find() 
    .sort({contact: 1})  
    .then( function( contact ){ 
        res.json( contact ); 
    }) 
    .catch( function( err ){ 
        console.log( err ); 
    }) 
});

//@route    GET /api/contact/:type
//@desc     Get feedback from the DB matching the parameter
//@access   Public
router.get('/:school', function( req, res){  
    contacts
    .find({school: req.params.school}) 
    .sort({school: 1})  
    .then( function( school ){ 
        (school === 0) ? res.json({"msg": `${req.params.school} does not exist`}) : res.json( type );
    }) 
    .catch( function( err ){ 
        console.log( err ); 
    }) 
}); 

//@route    DELETE /api/contact/:id
//@desc     Delete a contact from the DB by _id key 
//@access   Public (should be secured) 
router.delete('/:id', function( req, res){  

    contacts
    .findByIdAndDelete(req.params.id)
    .then(contact => {
        contact.remove();
        res.json({
            success:'Contact Deleted'}); 
        })
    .catch(err => {
        res.status(404).json({
            error: err
        })
    }) 

}); 

module.exports = router;