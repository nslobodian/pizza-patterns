import { Eatable } from "./interfaces/eatable";
import { Observer } from "./observe/observer";

export class EatableCounter implements Eatable {
    name = 'Eat counter';

    private static count: number = 0;

    constructor(private eatable: Eatable) { }

    registerObserver(observer: Observer): void {
       this.eatable.registerObserver(observer);
    }

    notifyObservers(): void {
        this.eatable.notifyObservers();
    }

    eat(): void {
        this.eatable.eat();
        EatableCounter.count++;
    }

    static getCount(): number {
        return EatableCounter.count;
    }
}