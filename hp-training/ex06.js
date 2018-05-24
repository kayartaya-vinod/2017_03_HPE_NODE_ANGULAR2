var ContactService = require("./lib/service/contact-service-promise");
var service = new ContactService();


service.getAll()
    .then(contacts=>{
        console.log(contacts);
    })
    .catch(err=>{
        console.log("There was an error", err);
    });

let id = 1;
service.get(id)
    .then(c=>{
        if(c){
            console.log(c);
        }
        else {
            console.log("Contact not found with id", id);
        }
    })
    .catch(err=>{
        console.log("There was an error", err);
    })