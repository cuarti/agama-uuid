
import {Factory} from './Factory';
import {Identifiable} from './Identifiable';


export function uuid() {

    let factory = new Factory();

    return <T extends {new(...args: any[]): Identifiable}>(constructor: T): T => {

        return class extends constructor {

            public constructor(...args: any[]) {
                super(...args);
                this.id = factory.generate();
            }

        }
    }
}
