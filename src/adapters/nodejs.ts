
import {networkInterfaces, hostname} from 'os';
import {createHash} from 'crypto';


export function machineId(): any {

    let networks = networkInterfaces();
    let hash = createHash('md5');

    for(let i in networks) {
        if(networks.hasOwnProperty(i)) {

            let addr = networks[i].filter(addr => addr && addr.mac.length && !addr.internal)[0];

            if(addr) {
                return hash.update(addr.mac.replace(/:/g, '')).digest().toString('hex').slice(-6);
            }

        }
    }

    return hash.update(hostname()).digest().slice(-6);
}

export function processId(): number {
    return process.pid;
}
