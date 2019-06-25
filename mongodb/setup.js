//create the madMen database and connect to it
var db = connect('127.0.0.1:27017/studentrep');

db.createUser({user:"admin", pwd: "admin123", roles:[{role: "readWrite", db: "students"}]})



