var mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 

//create a schema description of our feedback document structure 
const feedbackSchema = new Schema(
  { 
    "_id": Number, 
    "Title": String,
    "Description": String,
    "Type": String,
    "Upvotes": Number,
    "Downvotes": Number
  },
  {collection: "feedback"}, 
  {versionKey: false}
); 

module.exports = Feedback = mongoose.model('Feedback', feedbackSchema);