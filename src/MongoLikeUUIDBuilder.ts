
import {IS_NODEJS} from '@agama/platform'

import {UUIDBuilder} from './UUIDBuilder';
import {UUID} from './UUID';
import {MongoLikeUUID} from './MongoLikeUUID';
import {PlatformUtil} from './platforms/PlatformUtil';
import {padding} from './util/padding';


export class MongoLikeUUIDBuilder implements UUIDBuilder {

    /**
     * Maximum value of counter
     *
     * 256^3 = ffffff
     */
    private static MAX_COUNTER = 16777216;

    private platform: PlatformUtil;
    private time: number;
    private counter: number;

    public constructor() {
        this.platform = IS_NODEJS ? require('./platforms/nodejs') : require('./platforms/browser');
    }

    public generate(): UUID {

        let t = Math.floor(new Date().getTime() / 1000);

        if(this.time !== t) {
            this.time = t;
            this.counter = Math.floor(Math.random() * MongoLikeUUIDBuilder.MAX_COUNTER);
        }

        let c = padding(this.counter.toString(16), 6);
        this.counter = this.counter === MongoLikeUUIDBuilder.MAX_COUNTER ? 0 : this.counter + 1;

        return new MongoLikeUUID(this.time.toString(16) + this.platform.getMachineId() + this.platform.getProcessId() + c);
    }

    public valid(uuid: number): boolean;
    public valid(uuid: string): boolean;
    public valid(uuid: UUID): boolean;

    public valid(uuid: any): boolean {

        let bytes: string;

        if(typeof uuid === 'number') {
            bytes = uuid.toString(16);

        } else if(typeof uuid === 'object' && uuid.getBytes) {
            bytes = uuid.getBytes();

        } else if(typeof uuid === 'string') {
            bytes = uuid;
        }

        return typeof bytes === 'string' ? !!bytes.match(/^[0-9a-f]{24}$/) : false;
    }

}
