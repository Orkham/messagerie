import { Component, OnInit } from '@angular/core';
import { GetMessagesService } from 'src/app/services/get-messages.service';
import {Message} from "../../models/Message";
import {Person} from "../../models/Person";

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css']
})
export class MessagesListComponent implements OnInit {

  public messagesList : Message[];


  constructor(private svc : GetMessagesService) {

    this.messagesList = svc.getMessages();

  }

  ngOnInit(): void {
  }

}
