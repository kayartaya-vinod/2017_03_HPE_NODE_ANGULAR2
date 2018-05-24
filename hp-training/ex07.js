var mc = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017/training";

mc.connect(url, (err, db)=>{
    if(err) throw err;

    var contacts = db.collection("contacts");

    contacts.findOne({_id: 5}, (err, contact)=>{
        if(err) throw err;

        if(contact){
            console.log(contact);
        }
        else {
            console.log("No data found!");
        }
        db.close();
    });

});

console.log("End of script");