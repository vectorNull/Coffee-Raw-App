import { LightningElement } from 'lwc';

export default class CoffeeList extends LightningElement {
    coffees = [
        {
            id: 1,
            name: 'Ethiopia Agaro Musa Aba Lulesa',
            process: 'Washed',
            cultivar: 'Heirloom Types',
            farmGate: true,
            coffeeImg: 'resources/andrey-bond-OsKRmmvmPy4-unsplash.jpg',
            coffeeDescription: 'The brewed coffee is clean and refined, lemony acidity lending structure to a profile of peach, dried apricot, lemongrass tea, honey and soft berry notes. A delicious, bright Limu cup!'
        },
        {
            id: 2,
            name: 'Ethiopia Dry Process Dari Kidame',
            process: 'Dry',
            cultivar: 'Heirloom Types',
            farmGate: true,
            coffeeImg:
                'resources/attlecreek-coffee-roasters-Yx1XkPYUBss-unsplash.jpg',
            coffeeDescription: 'Fruits are well-integrated into the coffee\'s sweetness, and acidity is bright for dry process. Date sugar, orange marmalade, mango, and aromatic cedar. Intense chocolate and a blueberry hint in dark roasts.'
        },
        {
            id: 3,
            name: 'Ethiopia Dry Process Hambela Dabaye',
            process: 'Dry (Natural)',
            cultivar: 'Heirloom Types',
            farmGate: true,
            coffeeImg: 'resources/jakub-kapusnak-1LaCrYx5J7I-unsplash.jpg',
            coffeeDescription: 'City and City+ roasts make a very nice pour over, fruit is obvious but not overpowering, strawberry jam, nectarine, and berry-like brightness connect to floral aromatics that touch on jasmine, and ripe fruits.'
        },
        {
            id: 4,
            name: 'Ethiopia Gera Telila',
            process: 'Washed',
            cultivar: 'Heirloom Types',
            farmGate: false,
            coffeeImg: 'resources/rodrigo-flores-NQYhyday55A-unsplash.jpg',
            coffeeDescription: 'Light roasts make a stellar pour over brew, brown sugar candies, pressed cane juice, honey florals, in between which we catch glimpses of cranberry, blackberry, orange creamsicle, and brilliant acidity.'
        }
    ];

    handleSearchInput(event) {
        const searchKey = event.target.value.toLowerCase();

        this.coffees = this.coffees.filter((coffee) =>
            coffee.name.toLocaleLowerCase().includes(searchKey)
        );
    }

    handleCoffeeClick(event) {
        const index = event.target.dataset.index;
        const navigateEvent = new CustomEvent('navigate', {
            detail: {
                state: 'details',
                coffeeId: this.coffee[index].id
            }
        });
        this.dispatchEvent(navigateEvent);
    }
}
