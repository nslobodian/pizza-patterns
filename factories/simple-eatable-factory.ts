import { AbstractEatableFactory } from "./abstract-eatable-factory";
import { Eatable } from "../interfaces/eatable";
import { ItalianPizza } from "../italian-pizza";
import { NewYorkPizza } from "../new-york-pizza";

export class SimpleEatableFactory extends AbstractEatableFactory {
    createNYPizza(): Eatable {
        return new NewYorkPizza();
    }
    createItalianPizza(): Eatable {
        return new ItalianPizza();
    }

}