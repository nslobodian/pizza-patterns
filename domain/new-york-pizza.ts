import { Eatable } from "../interfaces/eatable";
import { EatableObservable } from "../observe/eatable-observable";
import { Observer } from "../observe/observer";

export class NewYorkPizza implements Eatable {
    name = 'New York pizza';

    private eatableObservable: EatableObservable

    constructor() {
        this.eatableObservable = new EatableObservable(this);
    }

    registerObserver(observer: Observer): void {
        this.eatableObservable.registerObserver(observer)
    }

    notifyObservers(): void {
        this.eatableObservable.notifyObservers()
    }

    eat(): void {
        console.log('Eat NY pizza')
        this.eatableObservable.notifyObservers()
    }
}