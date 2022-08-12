import { Eatable } from "../interfaces/eatable";
import { Observable } from "./observable";
import { Observer } from "./observer";

export class EatableObservable implements Observable {
    private observers: Array<Observer> = [];

    constructor(private eatable: Eatable) {}

    registerObserver(observer: Observer): void {
        this.observers.push(observer)
    }

    notifyObservers(): void {
        this.observers.forEach(
            observer => observer.update(this.eatable)
        )
    }

}