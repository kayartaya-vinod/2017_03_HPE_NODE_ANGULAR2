var fs = require("fs");

var requiredFields = ["name", "email", "phone"];
var path = require("path");

var filename = path.join(__dirname, "contacts.json");

// all the methods of this class are supposed to be
// aysnchronous, and the last parameter must be a callback
class ContactService {
    constructor(){
        if(!fs.existsSync(filename)){
            fs.writeFileSync(filename, "[]");
        }
    }

    addNew(contact, callback){
        // setTimeout(()=>{ // code here }, 0);

        setTimeout(()=>{
            if(arguments.length!=2){
                throw new Error(
                    "Expecting 2 arguments, but got " 
                    + arguments.length);
            }
            if(typeof callback != "function"){
                throw new Error("Callback was not a function");
            }

            if(typeof contact != "object"){
                let err = {};
                err.code = 101;
                err.message = "Contact was not an object";
                callback(err);
                return;
            }

            for(var i=0; i<requiredFields.length; i++){
                var f = requiredFields[i];
                if(!(f in contact)){
                    let err = {};
                    err.code = 102;
                    err.message = `The required field ${f} is missing!`;
                    callback(err);
                    return;
                }
            }

            // call to an async function, needs a callback
            fs.readFile(filename, "utf8", (err, data)=>{
                if(err){
                    callback(err);
                    return;
                }
                data = JSON.parse(data);

                if(data.filter(c=>c.email==contact.email).length>0){
                    let err = {};
                    err.code = 103;
                    err.message = `The email '${contact.email}' is already found in the contacts list!`;
                    callback(err);
                    return;
                }

                if(data.filter(c=>c.phone==contact.phone).length>0){
                    let err = {};
                    err.code = 104;
                    err.message = `The phone '${contact.phone}' is already found in the contacts list!`;
                    callback(err);
                    return;
                }

                data.push(contact);
                fs.writeFile(filename, JSON.stringify(data), (err, data)=>{
                    if(err){
                        callback(err);
                        return;
                    }
                    let feedback = {};
                    feedback.message = "Contact added successfully";
                    feedback.id = contact.id;
                    callback(null, feedback);
                });
            });            
        }, 0);
    }

    get(id, callback){
        setTimeout(()=>{
            if(!id || typeof id !="number"){
                throw new Error("ID was not supplied or was not a number");
            }
            if(!callback || typeof callback !="function"){
                throw new Error("Callback was not supplied or was not a function");
            }
            fs.readFile(filename, "utf8", (err, data)=>{
                if(err){
                    callback(err);
                    return;
                }
                data = JSON.parse(data);
                var result = data.filter(c=>c.id==id)[0];

                callback(null, result);

            }); // end of fs.readFile

        }, 0); // end of setTimeout
    }

} // end of class def

module.exports = ContactService;