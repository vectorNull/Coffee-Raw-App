import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    coffeeId;
    state = 'list';

    handleNavigate(event) {
        this.state = event.detail.state;
        this.coffeeId = event.detail.coffeeId;
    }

    get isStateList() {
        return this.state === 'list';
    }

    get isStateDetails() {
        return this.state === 'details'
    }
}
