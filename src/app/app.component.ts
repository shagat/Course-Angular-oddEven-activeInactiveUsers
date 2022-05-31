import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UsersService]
})
export class AppComponent implements OnInit{
  title = 'Gamecontrol and Active';
  //odd even
  oddTimerLogs: number[] = [];
  evenTimerLogs: number[] = [];
  activityCounter: number = 0;
  
  constructor(private userServices : UsersService){
  }
ngOnInit(): void {
  //odd even
  this.oddTimerLogs = [];
  this.evenTimerLogs = [];
}
  //odd even
  timerEventListener(timerEventNumber: number) {
    if (timerEventNumber % 2 == 1) {
      this.oddTimerLogs.push(timerEventNumber);
    }
    else {
      this.evenTimerLogs.push(timerEventNumber);
    }
  }

  //active inactive
  // activeUsers = ['Max', 'Anna'];
  // inactiveUsers = ['Chris', 'Manu'];


  // onSetToInactive(id: number) {
  //   this.inactiveUsers.push(this.activeUsers[id]);
  //   this.activeUsers.splice(id, 1);
  // }

  // onSetToActive(id: number) {
  //   this.activeUsers.push(this.inactiveUsers[id]);
  //   this.inactiveUsers.splice(id, 1);
  // }
}
