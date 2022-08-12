import { Eatable } from "./eatable";

export class NewYorkPizza implements Eatable{
    eat(): void {
       console.log('Eat NY pizza')
    }
}