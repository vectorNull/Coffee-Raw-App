import { LightningElement, api } from 'lwc';

export default class CoffeeDetails extends LightningElement {
  coffee;
  
  @api
  set coffeeId(id) {
    this._coffeeId = id;
    this.coffee = getCoffee(id);
  }
  get coffeeId() {
    return this._coffeeId;
  }

  handleCoffeeClick() {
    const navigateEvent = new CustomEvent('navigate', {
      detail: {
        state: 'list'
      }
    });
    this.dispatchEvent(navigateEvent);
  }
}