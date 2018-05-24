var ContactService = require("../lib/service/contact-service");
var expect = require("chai").expect;
var path = require("path");

var filename = path.join(__dirname, "..", "lib", "service", "contacts.json");
var fs = require("fs");
var service = null;

describe("contact-service tests", function(){

    beforeEach(function(){
        fs.unlinkSync(filename);
        service = new ContactService();

        var contacts = [];
        contacts.push({id: 1, name: "Vinod", email: "vinod@vinod.co", phone: "9731424784"});
        contacts.push({id: 2, name: "Kumar", email: "kumar@vinod.co", phone: "9844083934"});
        fs.writeFileSync(filename, JSON.stringify(contacts));
    });

    it("should fetch contact by id", function(done){
        service.get(1, (err, contact)=>{
            expect(contact).to.be.a("object")
                .to.have.property("name")
                .to.equal("Vinod");

            done();
        });
    });

    it("should add new contact", function(done){
        let c = {};
        c.name = "John Doe";
        c.email = "johndoe@mail.com";
        c.phone = "5558373322";
        c.city = "Dallas";

        service.addNew(c, (err, status)=>{
            expect(err).to.be.a("null");
            expect(status).to.be.a("object")
                .to.have.property("message")
                .to.be.a("string");

           done();
        });
    });
});