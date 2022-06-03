import { Component, OnInit } from '@angular/core';
import {Person} from "../../models/Person";
import {GetPersonsService} from "../../services/get-persons.service";

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

  public users : Person[];

  constructor(private svc : GetPersonsService) {
    this.users = svc.getPersons();
  }

  ngOnInit(): void {
  }

}
