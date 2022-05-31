import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gamecontrol and Active';
  //odd even
  oddTimerLogs: number[] = [];
  evenTimerLogs: number[] = [];
  
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
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];


  //Active and inactive
  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }
}
