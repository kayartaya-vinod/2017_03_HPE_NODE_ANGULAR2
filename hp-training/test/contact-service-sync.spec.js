/// /test/contact-service-sync.spec.js

var service = require("../lib/service/contact-service-sync");
var assert = require("assert");
var expect = require("chai").expect;
var should = require("chai").should();

describe("contact-service-sync tests", ()=>{

    it("should add a new contact", function(){
        var c = {};
        c.name = "John Doe";
        c.email = "johndoe@email.com";
        c.phone = "555 333 4484";
        var actual = service.addNew(c);
        assert.equal(actual, 1);
    });

    it("should fetch contact with id 1", function(){
        var c1 = service.get(1);
        expect(c1).to.be.a("object")
            .to.have.property("name")
            .to.equal("John Doe");

        c1.should.have.property("email")
            .to.equal("johndoe@email.com");
    });

});