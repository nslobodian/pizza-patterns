import { Eatable } from '../interfaces/eatable';
import { Observer } from './observer'

export class Dietitian implements Observer {
    update(eatable: Eatable): void {
       console.log(`Dietitian notice: ${eatable.name}`)
    }
}