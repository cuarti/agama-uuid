
/**
 * Universal unique identifier
 */
export class UUID {

    private bytes: string;

    public constructor(bytes: string) {
        this.bytes = bytes;
    }

    /**
     * Get timestamp value of id
     *
     * @return
     */
    public getTimestamp(): number {
        return parseInt(this.bytes.substring(0, 8), 16) * 1000;
    }

    /**
     * Get date value of id
     *
     * @return
     */
    public getDate(): Date {
        return new Date(this.getTimestamp());
    }

    /**
     * Get counter value of id
     *
     * @return
     */
    public getCounter(): number {
        return parseInt(this.bytes.substring(18, 24), 16);
    }

    /**
     * Get bytes
     *
     * @return
     */
    public getBytes(): string {
        return this.bytes;
    }

    public toString(): string {
        return this.getBytes();
    }

    public toJSON(): string {
        return this.getBytes();
    }

}
