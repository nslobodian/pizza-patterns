import { Observer } from "./observer";

export interface Observable {
    registerObserver(observer: Observer): void
    notifyObservers(): void
}