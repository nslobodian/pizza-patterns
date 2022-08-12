import { Eatable } from "./eatable";

export class EatableCounter implements Eatable {

    private static count: number = 0;

    constructor(private eatable: Eatable) { }

    eat(): void {
        this.eatable.eat();
        EatableCounter.count++;
    }

    static getCount(): number {
        return EatableCounter.count;
    }
}