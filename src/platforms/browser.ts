
import {PlatformUtil} from './PlatformUtil';


const utils: PlatformUtil = {

    getMachineId(): string {
        throw new Error('Browser implementation is not supported yet');
    },

    getProcessId(): string {
        throw new Error('Browser implementation is not supported yet');
    }

};

export = utils;
