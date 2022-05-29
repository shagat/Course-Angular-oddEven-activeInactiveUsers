import { Component, OnInit, Output, EventEmitter, Type } from '@angular/core';
//import { clearInterval } from 'timers';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Output() gameTimerStarts = new EventEmitter<number>();
  // NG CONTENT LOGIC 
  // gameTimer: Array<number> = [0];
  // i = 0;
  // timeoutId: null | ReturnType<typeof setTimeout> = null

  lastNumber: number = 0;
  interval: null | ReturnType<typeof setTimeout> = null

  constructor() { }

  ngOnInit(): void {
  }
  // NG CONTENT LOGIC 
  // onClickStart() {
  //   this.timeoutId = setInterval(() => {
  //     this.i += 1
  //     this.gameTimer.push(this.i)
  //   }, 1000)
  // }

  // checkModulus(gt: number) {
  //   if (gt % 2 == 0) {
  //     return true
  //   }
  //   else {
  //     return false
  //   }
  // }

  // onClickStop() {
  //   if (this.timeoutId) {
  //     clearInterval(this.timeoutId)
  //   }
  // }

  onClickStartTimer(){
    this.interval = setInterval(() => {
      this.gameTimerStarts.emit((this.lastNumber) + 1)
      this.lastNumber++
    }, 1000
    )
  }

  onClickStopTimer(){
    if (this.interval){
     clearInterval(this.interval)
    }
  }
}

