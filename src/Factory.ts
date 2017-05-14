
import {UUID} from './UUID';


/**
 * TODO: implementar opcion para devolver algo que herede de UUID?
 */
export interface Factory {

    generate(): UUID;

    isValid(bytes: string): boolean;

}

export interface FactoryConstructor {

    new(): Factory;

}
