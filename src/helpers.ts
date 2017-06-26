
import {UUID} from './UUID';
import {MongoLikeUUIDBuilder} from './MongoLikeUUIDBuilder';


let builder = new MongoLikeUUIDBuilder();

export function generate(): UUID {
    return builder.generate();
}

export function uuid(): UUID {
    return generate();
}

export function isValid(bytes: number): boolean;
export function isValid(bytes: string): boolean;
export function isValid(bytes: UUID): boolean;

export function isValid(bytes: any): boolean {
    return builder.valid(bytes);
}
