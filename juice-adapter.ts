import { Eatable } from "./interfaces/eatable";
import { Juice } from "./interfaces/juice";

export class JuiceAdapter implements Eatable {
    constructor(private juice: Juice) { }

    eat(): void {
        this.juice.drink()
    }
}