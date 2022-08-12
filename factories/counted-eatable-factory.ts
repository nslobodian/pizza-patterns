import { AbstractEatableFactory } from "./abstract-eatable-factory";
import { Eatable } from "../interfaces/eatable";
import { EatableCounter } from "../eatable-counter";
import { ItalianPizza } from "../domain/italian-pizza";
import { NewYorkPizza } from "../domain/new-york-pizza";

export class CountedEatableFactory extends AbstractEatableFactory {
    createNYPizza(): Eatable {
        return new EatableCounter(new NewYorkPizza());
    }

    createItalianPizza(): Eatable {
        return new EatableCounter(new ItalianPizza());
    }
}