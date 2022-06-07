import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { CounterService } from './counter.service';
import { FormsComponent } from './forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsReactComponent } from './forms-react/forms-react.component';
import { AnotherFormsComponent } from './another-forms/another-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    OddComponent,
    EvenComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    FormsComponent,
    FormsReactComponent,
    AnotherFormsComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
