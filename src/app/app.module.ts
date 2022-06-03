import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitleComponent } from './component/title/title.component';
import { ActiveUsersComponent } from './component/active-users/active-users.component';
import { MessagesListComponent } from './component/messages-list/messages-list.component';
import { NewMessageComponent } from './component/new-message/new-message.component';
import {FormsModule} from "@angular/forms";
import {GetPersonsService} from "./services/get-persons.service";
import {GetMessagesService} from "./services/get-messages.service";

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    ActiveUsersComponent,
    MessagesListComponent,
    NewMessageComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [GetPersonsService, GetMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
