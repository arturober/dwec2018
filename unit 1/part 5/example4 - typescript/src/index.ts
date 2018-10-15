let a: number;
a = 23;
// a = "asdfasdf"; -> ERROR

let c: string = "asdfsadf";
let c2 = "reterrt";

let d: string;
d = "asdfasdf";

function sum(n1: number, n2: number): number {
    return n1 + n2;
}

let s = sum(23, 3);


let a1: number;
let a2: string;
let s3: boolean;
let s4: Date;

s4 = new Date();

let ar: Array<number>;
ar = [23, 34, 45];
let ar2: number[];

let ar3: Array<number | string>; // Combine numbers and strings
let ar4: Array<number> | Array<string>; // Only numbers or only strings

let people: Array<{ name: string, age: number, id?: number }> = [];
people.push({
    age: 23,
    name: "sadf"
}, {
        id: 23,
        age: 34,
        name: "asdfg"
    });

// let f: (n: number) => number;
// f = (n) => n * 2;

interface ISayHello {
    sayHello(name: string): void
}

class Person implements ISayHello {
    constructor(private name: string, private age: number) { }

    getName(): string {
        return this.name;
    }

    setName(name: string) {
        this.name = name;
    }

    sayHello(name: string): void {
        console.log(`Hello ${name}`);
    }
}

let p1 = new Person("Peter", 24);
let p2 = new Person("Jessica", 63);
let ap: Person[] = [p1, p2];

p1.setName("John");

interface Product {
    id?: number,
    name: string,
    price: number
}

let products: Product[] = [];
products.push({
    id: 1,
    name: "Prod",
    price: 19.5
});


class User extends Person {
    constructor(
        name: string, 
        age: number, 
        private login: string, 
        private password: string
    ) {
        super(name, age);
    }

    toString(): string {
        return `${this.getName()} - ${this.login}`;
    }
}

