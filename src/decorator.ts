
import {Factory} from './Factory';


export function uuid() {

    let factory = new Factory();

    return <T extends {new(...args: any[]): any}>(constructor: T): T => {

        return class extends constructor {

            public constructor(...args: any[]) {
                super(...args);
                this.id = factory.generate();
            }

        }
    }
}
