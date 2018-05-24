import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent } from "./components/app.component";
import { AppHeaderComponent } from "./components/app-header.component";
import { AppFooterComponent } from "./components/app-footer.component";
import { ViewContactComponent } from "./components/view-contact.component";
import { ContactListComponent } from "./components/contact-list.component";
import { AddContactComponent } from "./components/add-contact.component";
import { EditContactComponent } from "./components/edit-contact.component";

import { ContactService } from "./services/contact.httpservice";

import { TitlePipe } from "./pipes/title.pipe";
import { AgePipe } from "./pipes/age.pipe";
import { FilterPipe } from "./pipes/filter.pipe";

import { routes } from "./app-routes";

@NgModule({
    imports: [
        // placeholder for other modules (internal, or external)
        BrowserModule, 
        FormsModule, 
        HttpModule, 
        RouterModule.forRoot(routes, { useHash: true })
    ],
    declarations: [
        // placeholder for all your components, directives and pipes
        AppComponent, 
        AppHeaderComponent, 
        AppFooterComponent,
        ViewContactComponent,
        ContactListComponent, 
        AddContactComponent, 
        EditContactComponent, 
        
        TitlePipe, 
        AgePipe, 
        FilterPipe, 
    ],
    providers: [
        // placeholder for all injectables (services)
        ContactService
    ],
    bootstrap: [
        // placeholder for all components used directly in the index.html
        AppComponent
    ]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);