import { AbstractEatableFactory } from "./factories/abstract-eatable-factory";
import { AbstractJuiceEatableFactory } from "./factories/abstract-juice-factory";
import { Eatable } from "./interfaces/eatable";
import { EatableCounter } from "./eatable-counter";
import { JuiceAdapter } from "./juice-adapter";
import { TomatoJuice } from "./tomato-juice";

export class RestaurantSimulator {
    run(eatableFactory: AbstractEatableFactory, juiceFactory: AbstractJuiceEatableFactory) {
        const newYorkPizza = eatableFactory.createNYPizza()
        const italianPizza = eatableFactory.createItalianPizza()

        const tomatoJuice = juiceFactory.createTomatoJuice()

        this.simulate(newYorkPizza)
        this.simulate(italianPizza)

        this.simulate(tomatoJuice)

        console.log(`Eats count: ${EatableCounter.getCount()}`)
    }

    private simulate(eatable: Eatable) {
        eatable.eat()
    }
}