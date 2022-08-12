import { Eatable } from "./eatable";
import { EatableCounter } from "./eatable-counter";
import { ItalianPizza } from "./italian-pizza";
import { NewYorkPizza } from "./new-york-pizza";
import { TomatoJuice } from "./tomato-juice";
import { TomatoJuiceAdapter } from "./tomato-juice-adapter";

export class RestaurantSimulator {
    run() {
        const newYorkPizza = new EatableCounter(new NewYorkPizza())
        const italianPizza = new EatableCounter(new ItalianPizza())

        const tomatoJuice = new TomatoJuiceAdapter(new TomatoJuice())

        this.simulate(newYorkPizza)
        this.simulate(italianPizza)

        this.simulate(tomatoJuice)

        console.log(`Eats count: ${EatableCounter.getCount()}`)
    }

    private simulate(eatable: Eatable) {
        eatable.eat()
    }
}