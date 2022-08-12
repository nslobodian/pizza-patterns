import { Juice } from './interfaces/juice'

export class TomatoJuice implements Juice {
    drink() {
        console.log('Drink tomato juice')
    }
}
