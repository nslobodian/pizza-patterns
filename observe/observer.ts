import { Eatable } from "../interfaces/eatable";

export interface Observer {
    update(eatable: Eatable): void
}