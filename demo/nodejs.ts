
import {uuid, isValid} from '..';


let uuids = [uuid(), uuid(), uuid()];

uuids.forEach((id, i) => console.log(`UUID#${i + 1}: ${id} {${id.getBytes().length}}`));

if(uuids.every(id => isValid(id))) {
    console.log('All UUIDs are valid!');
} else {
    console.log('All UUIDs are not valid!');
}
