import { Eatable } from "./interfaces/eatable";

export class ItalianPizza implements Eatable{
    eat(): void {
       console.log('Eat italian pizza')
    }
}