import { Eatable } from "../interfaces/eatable";

export abstract class AbstractEatableFactory {
    abstract createNYPizza(): Eatable
    abstract createItalianPizza(): Eatable
}