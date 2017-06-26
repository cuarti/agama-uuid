
import {UUID} from './UUID';


export interface UUIDBuilder {

    generate(): UUID;

    valid(uuid: number): boolean;
    valid(uuid: string): boolean;
    valid(uuid: UUID): boolean;

}
