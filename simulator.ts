import { AbstractEatableFactory } from "./factories/abstract-eatable-factory";
import { AbstractJuiceEatableFactory } from "./factories/abstract-juice-factory";
import { Eatable } from "./interfaces/eatable";
import { EatableCounter } from "./eatable-counter";
import { Plate } from "./plate";

export class RestaurantSimulator {
    run(eatableFactory: AbstractEatableFactory, juiceFactory: AbstractJuiceEatableFactory) {
        const plate = new Plate()
        plate.add(eatableFactory.createNYPizza())
        plate.add(eatableFactory.createItalianPizza())

        const tomatoJuice = juiceFactory.createTomatoJuice()

        this.simulate(plate)

        this.simulate(tomatoJuice)

        console.log(`Eats count: ${EatableCounter.getCount()}`)
    }

    private simulate(eatable: Eatable) {
        eatable.eat()
    }
}