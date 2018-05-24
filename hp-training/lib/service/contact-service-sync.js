module.exports = {};

var contacts = [];
var idCounter = 0;
var requiredFields = ["name", "email", "phone"];

module.exports.addNew = contact=>{
    
    for(var i=0; i<requiredFields.length; i++){
        var f = requiredFields[i];
        if(!(f in contact)){
            throw new Error(`The required field ${f} is missing!`);
        }
    }

    contact.id = ++idCounter;
    contacts.push(contact);
    return contact.id;
}

module.exports.get = id=>{
    if(!id) throw new Error("Id was not supplied");
    if(typeof id!="number") throw new Error("Id must be a number");
    return contacts.filter(c=>c.id==id)[0]
};
    
