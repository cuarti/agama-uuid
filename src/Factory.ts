
import {IS_NODEJS} from '@agama/platform'
import {UUID} from './UUID';
import {numPad} from './util';


interface Adapter {
    machineId(): string;
    processId(): number;
}

export class Factory {

    private static MAX_COUNTER = 16777216; // 256^3 = ffffff

    private adapter: Adapter;
    private time: number;
    private counter: number;

    public constructor() {
        this.adapter = require(`./adapters/${IS_NODEJS ? 'nodejs' : 'browser'}`);
    }

    public generate(): UUID {

        let t: number = Math.floor(new Date().getTime() / 1000);

        if(this.time !== t) {
            this.time = t;
            this.counter = Math.floor(Math.random() * Factory.MAX_COUNTER);
        }

        let c = numPad(this.counter, 6);
        this.counter = this.counter === Factory.MAX_COUNTER ? 0 : this.counter + 1;

        return new UUID(this.time.toString(16) + this.adapter.machineId() + numPad(this.adapter.processId(), 4) + c);
    }

}
