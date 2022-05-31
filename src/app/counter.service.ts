export class CounterService {
  actToInactC = 0;
  inactToActC = 0;

  incrementActToInact(){
    this.actToInactC++;
    console.log("Active to Inactive:" + this.actToInactC)
  }
  incrementInactToAct(){
    this.inactToActC++;
    console.log("Inactive to Active:" +this.inactToActC)
  }

  constructor() { }
}
