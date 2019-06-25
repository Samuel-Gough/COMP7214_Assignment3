var mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 

//create a schema description of our student document structure 
const studentSchema = new Schema(
  { 
    "_id": Number, 
    "password": String,
    "role": String
  },
  {collection: "students"}, 
  {versionKey: false}
); 

module.exports = Student = mongoose.model('Student', studentSchema);