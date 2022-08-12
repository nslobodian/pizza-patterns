import { Eatable } from "../interfaces/eatable";
import { Juice } from "../interfaces/juice";

export abstract class AbstractJuiceEatableFactory {
    abstract createTomatoJuice(): Juice & Eatable
}