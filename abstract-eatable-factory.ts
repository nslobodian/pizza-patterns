import { Eatable } from "./eatable";

export abstract class AbstractEatableFactory {
    abstract createNYPizza(): Eatable
    abstract createItalianPizza(): Eatable
}