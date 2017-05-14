
function uuid() {
    return function(constructor: any, key: string): any {
        log('Inside decorator', constructor === User.prototype);
        // log('descriptor', Object.getOwnPropertyDescriptor(decorator, key));

        // Object.defineProperty()

        return {

        };
    }
}


export class User {

    @uuid()
    public id: number;
    public name: string;

    public constructor(name: string) {
        // console.log('instantiation');
        this.name = name;
    }

}

// log('User.prototype');
// console.log('before instance', User.prototype.decorator);
let u = new User('cuarti');
log('u.id', u.id);
// console.log('after instance', u.toString(), (u as any).foo());


function log(tag: string, ...args: any[]): void {
    console.log.apply(null, [`\x1b[32m${tag}\x1b[0m`].concat(args));
}
