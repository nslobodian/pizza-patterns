import { JuiceAdapter } from "../juice-adapter";
import { TomatoJuice } from "../domain/tomato-juice";
import { AbstractJuiceEatableFactory } from "./abstract-juice-factory";

export class EatableJuiceFactory extends AbstractJuiceEatableFactory {
    createTomatoJuice() {
        return new JuiceAdapter(new TomatoJuice());
    }
}