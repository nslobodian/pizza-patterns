import { Eatable } from "./interfaces/eatable";

export class Plate implements Eatable {
    private eatableList: Array<Eatable> = [];
    
    add(eatable: Eatable): void {
        this.eatableList.push(eatable);
    }

    eat(): void {
        this.eatableList.forEach(eatable => eatable.eat())
    }
}