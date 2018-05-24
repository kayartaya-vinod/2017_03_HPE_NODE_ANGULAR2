var ContactService = require("../lib/service/contact-service-promise");
var chai = require("chai");

chai.use(require("chai-as-promised"));

var expect = chai.expect;
var should = chai.should();

var fs = require("fs");
var path = require("path");
var filename = path.join(__dirname, "..", "lib", "service", "contacts-v2.json");

var service = null;

describe("contact-service-promise tests", function(){

    beforeEach(function(){
        fs.unlinkSync(filename);
        let data = {idCounter: 2};
        data.contacts = [];
        data.contacts.push({id: 1, name: "John Doe", email: "johndoe@mail.com", phone: "5557892233"});
        data.contacts.push({id: 2, name: "Jane Doe", email: "janedoe@mail.com", phone: "5557894455"});
        fs.writeFileSync(filename, JSON.stringify(data));

        service = new ContactService();
    });

    it("should fetch all contacts", function(){
        return service.getAll().should.eventually.have.length(2);
    });

    it("should fetch contact by id", function(){
        return Promise.all([
            service.get(1).should.eventually.have.property("name").to.equal("John Doe"),
            service.get(2).should.eventually.have.property("name").to.equal("Jane Doe"),
        ]);
    });

    it("should add a new contact", function(){
        let c1 = {name: "Vinod", email: "vinod@vinod.co", phone: "9731424784"};
        let pr = service.addNew(c1);
        return expect(pr).to.eventually.be.a("object")
            .to.have.property("id")
            .to.equal(3);
    });
});