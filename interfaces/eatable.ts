import { Observable } from "../observe/observable";

export interface Eatable extends Observable {
    name: string;
    eat(): void
};
