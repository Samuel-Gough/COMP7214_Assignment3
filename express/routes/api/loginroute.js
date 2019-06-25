const express = require('express');
const router = express.Router();

const student = require('../../models/student');

//@route    GET /api/student
//@desc     Get all students from the DB
//@access   Public

router.get('/', function( req, res){  
    student
    .find() 
    .sort({student: 1})  
    .then( function( student ){ 
        res.json( student ); 
    }) 
    .catch( function( err ){ 
        console.log( err ); 
    }) 
});

//@route    POST /api/login/
//@desc Add a new student record to the DB 
//@access Public 
router.post('/', function( req, res){ 

    let newStudent = new Student(req.body);

    newStudent
    .save(newStudent)
    .then(() => {
        res.json({
            success:'Student Added'}); 
        })
    .catch(err => {
        res.status(404).json({
            error: err
        })
    })

});

module.exports = router;