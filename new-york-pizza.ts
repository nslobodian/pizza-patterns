import { Eatable } from "./interfaces/eatable";

export class NewYorkPizza implements Eatable{
    eat(): void {
       console.log('Eat NY pizza')
    }
}