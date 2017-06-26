
import {networkInterfaces, hostname} from 'os';
import {createHash} from 'crypto';

import {PlatformUtil} from './PlatformUtil';
import {padding} from '../util/padding';


const utils: PlatformUtil = {

    getMachineId(): string {

        let networks = networkInterfaces();
        let hash = createHash('md5');

        for(let i in networks) {
            if(networks.hasOwnProperty(i)) {

                let addr = networks[i].filter(addr => addr && addr.mac.length && !addr.internal)[0];

                if(addr) {
                    return encrypt(addr.mac.replace(/:/g, ''));
                }

            }
        }

        return encrypt(hostname());
    },

    getProcessId(): string {
        return padding(process.pid.toString(16), 4).slice(-4);
    }

};

export = utils;

function encrypt(text: string): string {
    return createHash('sha512').update(text).digest('hex').slice(-6);
}
