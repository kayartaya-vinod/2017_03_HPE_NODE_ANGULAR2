import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router";

import { Contact } from "../models/contact";
import { ContactService } from "../services/contact.httpservice";

@Component({
    selector: "add-contact",
    templateUrl: "./templates/contact-form.html"
})
export class AddContactComponent implements OnInit{

    private contact: Contact = new Contact();
    
    constructor(private service: ContactService, private router: Router){}

    ngOnInit(){
    }

    btnSaveClickHandler(){
        this.service.createContact(this.contact)
            .then(contact=>{
                // redirect to the view-contact page
                this.router.navigate(["/view-contact", contact._id]);
            })
            .catch(err=>{});
    }
}