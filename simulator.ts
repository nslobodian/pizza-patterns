import { AbstractEatableFactory } from "./abstract-eatable-factory";
import { Eatable } from "./interfaces/eatable";
import { EatableCounter } from "./eatable-counter";
import { JuiceAdapter } from "./juice-adapter";
import { TomatoJuice } from "./tomato-juice";

export class RestaurantSimulator {
    run(eatableFactory: AbstractEatableFactory) {
        const newYorkPizza = eatableFactory.createNYPizza()
        const italianPizza = eatableFactory.createItalianPizza()

        const tomatoJuice = new JuiceAdapter(new TomatoJuice())

        this.simulate(newYorkPizza)
        this.simulate(italianPizza)

        this.simulate(tomatoJuice)

        console.log(`Eats count: ${EatableCounter.getCount()}`)
    }

    private simulate(eatable: Eatable) {
        eatable.eat()
    }
}