import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  template: '<div class="normal-alert"> This is an alert. {{message}}</div>',
  styles: [`
      normal-alert {
        border: 1px solid black;
        backgound: salmon;
        padding: 10px;
        font-family: sans-serif;
      }
    `]
})
export class AlertComponent {
  @Input() message: string;
}
