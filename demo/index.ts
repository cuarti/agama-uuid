
import {generate, uuid, Identifiable, UUID} from '..';


let id = generate();
console.log(`id: ${id.toString()}`);


@uuid()
class User implements Identifiable {

    public readonly id: UUID;
    public readonly name: string;
    public readonly email: string;

    public constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

    public toString(): string {
        return `User {id: ${this.id}, name: ${this.name}, email: ${this.email}`;
    }

}

print(new User('user1', 'user1@domain.com'));
print(new User('user2', 'user2@domain.com'));
print(new User('user3', 'user3@domain.com'));


function print(value: any): void {
    console.log(value.toString());
}
