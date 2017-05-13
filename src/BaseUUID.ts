
import {UUID} from './UUID';


/**
 * Base UUID implementation
 */
export class BaseUUID implements UUID {

    private bytes: string;

    public constructor(bytes: string) {
        this.bytes = bytes;
    }

    public getTimestamp(): number {
        return parseInt(this.bytes.substring(0, 8), 16) * 1000;
    }

    public getDate(): Date {
        return new Date(this.getTimestamp());
    }

    public getCounter(): number {
        return parseInt(this.bytes.substring(18, 24), 16);
    }

    public getBytes(): string {
        return this.bytes;
    }

    public toString(): string {
        return this.getBytes();
    }

}
