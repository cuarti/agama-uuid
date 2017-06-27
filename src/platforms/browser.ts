
import {PlatformUtil} from './PlatformUtil';
import {sha512} from '../util/sha512';


const utils: PlatformUtil = {

    getMachineId(): string {
        return sha512(location.hostname).slice(-6);
    },

    getProcessId(): string {
        return sha512(navigator.userAgent).slice(-4);
    }

};

export = utils;
