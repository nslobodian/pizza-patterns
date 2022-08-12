import { Eatable } from "./eatable";
import { TomatoJuice } from "./tomato-juice";

export class TomatoJuiceAdapter implements Eatable {
    constructor(private juice: TomatoJuice) { }

    eat(): void {
        this.juice.drink()
    }
}