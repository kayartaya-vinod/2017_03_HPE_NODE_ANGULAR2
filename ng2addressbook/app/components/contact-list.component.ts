import { Component } from "@angular/core";
import { Contact } from "../models/contact";
import { ContactService } from "../services/contact.httpservice";

@Component({
    selector: "contact-list",
    templateUrl: "./templates/contact-list.html"
})
export class ContactListComponent {

    token: string;

    contacts: Array<Contact> = [];

    constructor(private service: ContactService){
        service.getAll().then(data=>{
            this.contacts = data;
        });
    }

    btnHandler(){
        console.log("token", this.token);
    }
}