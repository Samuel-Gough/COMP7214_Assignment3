var mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 

//create a schema description of our contact document structure 
const contactSchema = new Schema(
  { 
    "_id": Number, 
    "Name": String,
    "School": String,
    "Paper": String,
    "email": String,
  },
  {collection: "contact"}, 
  {versionKey: false}
); 

module.exports = Contact = mongoose.model('Contact', contactSchema);