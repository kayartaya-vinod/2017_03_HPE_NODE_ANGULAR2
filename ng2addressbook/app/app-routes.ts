import { ContactListComponent } from "./components/contact-list.component";
import { AddContactComponent } from "./components/add-contact.component";
import { ViewContactComponent } from "./components/view-contact.component";
import { EditContactComponent } from "./components/edit-contact.component";

export const routes:Array<any> = [
    {
        path: "",
        redirectTo: "contact-list",
        // component: ContactListComponent, 
        pathMatch: "full"
    },
    {
        path: "contact-list",
        component: ContactListComponent
    },
    {
        path: "add-contact",
        component: AddContactComponent
    }, 
    {
        path: "edit-contact/:contact_id",
        component: EditContactComponent
    },
    {
        path: "view-contact/:contact_id",
        component: ViewContactComponent
    }
];
