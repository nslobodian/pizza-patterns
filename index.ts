import { CountedEatableFactory } from "./factories/counted-eatable-factory";
import { EatableJuiceFactory } from "./factories/eatable-juice-factory";
import { RestaurantSimulator } from "./simulator";

new RestaurantSimulator().run(new CountedEatableFactory(), new EatableJuiceFactory())