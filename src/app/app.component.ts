import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gamecontrol';
  oddTimerLogs:number[] = [];
  evenTimerLogs:number[] = [];

  timerEventListener(timerEventNumber: number){
    if (timerEventNumber % 2 == 1){
      this.oddTimerLogs.push(timerEventNumber);
    }
    else{
      this.evenTimerLogs.push(timerEventNumber);
    }
  }
}
