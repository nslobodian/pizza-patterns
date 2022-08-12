import { Eatable } from "./interfaces/eatable";
import { Juice } from "./interfaces/juice";

export class JuiceAdapter implements Eatable, Juice {
    constructor(private juice: Juice) { }

    drink(): void {
        this.juice.drink()
    }

    eat(): void {
        this.juice.drink()
    }
}