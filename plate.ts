import { Eatable } from "./interfaces/eatable";
import { Observer } from "./observe/observer";

export class Plate implements Eatable {
    name = 'Plate';

    private eatableList: Array<Eatable> = [];

    add(eatable: Eatable): void {
        this.eatableList.push(eatable);
    }

    eat(): void {
        this.eatableList.forEach(eatable => eatable.eat())
    }

    registerObserver(observer: Observer): void {
        this.eatableList.forEach(eatable => eatable.registerObserver(observer))
    }

    notifyObservers(): void {
        this.eatableList.forEach(eatable => eatable.notifyObservers())
    }
}