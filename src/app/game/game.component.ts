import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//import { clearInterval } from 'timers';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Output() gameTimerStarts = new EventEmitter<{ startGameTime: number }>();
  // gameTimer: Array<number> = [0];
  // i = 0;
  // timeoutId: null | ReturnType<typeof setTimeout> = null

  constructor() { }

  ngOnInit(): void {
  }

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
}

