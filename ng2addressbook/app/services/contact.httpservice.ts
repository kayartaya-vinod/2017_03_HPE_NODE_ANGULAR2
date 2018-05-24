import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";

import { Contact } from "../models/contact";

let headers: Headers = new Headers({
    "Accept": "application/json",
    "Content-Type": "application/json"
});

let baseUrl = "http://localhost:3000/api/contacts/";

@Injectable()
export class ContactService {
    constructor(private http: Http) { }

    createContact(contact: Contact): Promise<Contact> {
        return this.http
            .post(baseUrl, JSON.stringify(contact), { "headers": headers })
            .map(resp => {
                // should check the resp().success == true or false
                // and handle accordingly
                contact._id = resp.json().id;
                return contact;
            })
            .toPromise()
    }
    getContact(id: string): Promise<Contact> {
        return this.http.get(baseUrl + id, { "headers": headers })
            .map(resp => resp.json().data as Contact)
            .toPromise();
    }
    updateContact(contact: Contact): Promise<Contact> {
        return this.http
            .put(baseUrl + contact._id, JSON.stringify(contact), { "headers": headers })
            .map(resp => {
                if (resp.json().success == true) {
                    return contact;
                }
                throw resp.json()
            })
            .toPromise()
    }
    deleteContact(id: string): Promise<any> {
        return this.http.delete(baseUrl + id).toPromise();
    }
    getAll(): Promise<Array<Contact>> {
        return this.http.get(baseUrl, { "headers": headers })
            .map(resp => resp.json().data)
            .toPromise();
    }
}