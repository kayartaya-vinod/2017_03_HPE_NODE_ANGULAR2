var ContactService = require("./lib/service/contact-service");

var service = new ContactService();

var c = {};
c.id = 1;
//c.name = "Vinod";
c.email = "vinod@knowledgeworksindia.com";
c.phone = "9844083934";
c.city = "Bangalore";

service.addNew(c, (err, status)=>{
    if(err){
        console.error(err);
    }
    else {
        console.log(status);
    }
});
console.log("End of ex03 script");