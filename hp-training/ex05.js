var ContactService = require("./lib/service/contact-service-promise");

var service = new ContactService();

var c1 = {name: "Kumar", email: "kumar@vinod.co"};
c1.phone = "9844083934";

service.addNew(c1)
    .then(resp=>{
        console.log(resp);
    })
    .catch(err=>{
        console.error("There was an error");
        console.error(err);
    });

console.log("End of script execution ex05");