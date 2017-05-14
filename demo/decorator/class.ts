

class UUIDGenerator {

    private counter: number;

    public constructor() {
        this.counter = 0;
    }

    public generate(): number {
        return this.counter++;
    }

}

function uuid() {

    let generator = new UUIDGenerator();

    return <T extends {new(...args: any[]): Identificable}>(constructor: T): T => {

        return class extends constructor {

            public constructor(...args: any[]) {
                super(...args);
                this.id = generator.generate();
            }

        }
    }
}

interface Identificable {
    id: number;
}

@uuid()
class User implements Identificable {

    public id: number;
    public name: string;

    public constructor(name: string) {
        this.name = name;
    }

}

console.log(new User('user1'));
console.log(new User('user2'));
console.log(new User('user3'));
console.log(new User('user4'));
console.log(new User('user5'));
