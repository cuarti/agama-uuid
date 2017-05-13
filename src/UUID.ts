
/**
 * Universal unique identifier
 */
export interface UUID {

    /**
     * Get timestamp value of id
     *
     * @return
     */
    getTimestamp(): number;

    /**
     * Get date value of id
     *
     * @return
     */
    getDate(): Date;

    /**
     * Get counter value of id
     *
     * @return
     */
    getCounter(): number;

    /**
     * Get bytes
     *
     * @return
     */
    getBytes(): string;

}
