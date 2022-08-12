import { Eatable } from "./interfaces/eatable";
import { Juice } from "./interfaces/juice";
import { Observer } from "./observe/observer";

export class JuiceAdapter implements Eatable, Juice {
    name = 'Juice Adapter';

    constructor(private juice: Juice) { }

    registerObserver(observer: Observer): void {
        throw new Error("Method not implemented.");
    }
    notifyObservers(): void {
        throw new Error("Method not implemented.");
    }

    drink(): void {
        this.juice.drink()
    }

    eat(): void {
        this.juice.drink()
    }
}