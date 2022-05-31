import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[] = [];
  ngOnInit(): void {
    this.users = this.userServices.activeUsers;
  }
  constructor(private userServices: UsersService) { }

  onSetToInactive(id: number) {
    this.userServices.onSetToInactive(id)
  }
}
