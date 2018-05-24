var ContactService = require("./lib/service/contact-service-mongodb");

var service = new ContactService();

var c1 = {name: "Kumar", city: "Bangalore", 
    email: "kumar@vinod.co", phone: "9844083934"};

service.addNew(c1)
    .then(resp=>{
        console.log(resp);
    })
    .catch(err=>{
        console.log(err);
    });

