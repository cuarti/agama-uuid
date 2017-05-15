
import {UUID} from './UUID';
import {Factory} from './Factory';


let factory = new Factory();


export function generate(): UUID {
    return factory.generate();
}

export function isValid(bytes: string): boolean {
    return !!bytes.match(/^[0-9a-f]{24}$/);
}
