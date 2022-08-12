import { CountedEatableFactory } from "./factories/counted-eatable-factory";
import { RestaurantSimulator } from "./simulator";

new RestaurantSimulator().run(new CountedEatableFactory())