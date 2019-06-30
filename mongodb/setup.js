//create the madMen database and connect to it
var db = connect('127.0.0.1:27017/studentrep');

db.createUser({user:"admin", pwd: "admin123", roles:[{role: "readWrite", db: "students"}]})

db.collection('contact')
db.contact.insert({"name" : "Test Student", "school" : "computing", "paper" : "COMP7215", "email" : "studentrep@notarealemail.com" })

db.contact.insert({"name" : "Steve Stevenson", "school" : "engineering", "paper" : "ENGR1258", "email" : "steverep@notarealemail.com"})

db.collection('feedback')
db.feedback.insert({"title" : "Aircon Issue", "description" : "The aircon in J124 is really cold and makes lost of noise. Fix it now", "type" : "facilities", "upvotes" : 0, "downvotes" : 0})

db.feedback.insert({"title" : "Another issue", "description" : "This is a test issue. There is something wrong with the chairs in J block.", "type" : "facilities", "upvotes" : 0, "downvotes" : 0})                   

db.feedback.insert({"title" : "Third Issue", "description" : "Another test issue, dont really know what to write so just writing stuff", "type" : "other", "upvotes" : 0, "downvotes" : 0})

db.collection('student')
db.student.insert({"_id" : "10009941", "password" : "password1", "role" : "Student Rep"})

