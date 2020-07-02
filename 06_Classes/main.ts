// Simple class example
class User {

}

// Class types
class User {
    
    name: string;
    age: number;
    nickName: string;

}

// Class types, including constructor
class User {
    
    name: string;
    age: number;
    nickName: string;

    constructor(name: string, age: number, nickName: string) {
        this.name = name;
        this.age = age;
        this.nickName = nickName;
    }

}

const yauhen = new User('Yauhen', 31, 'webDev');

yauhen;	// { name: "Yauhen", age: 31, nickName: "webDev" }

// Class types modificators
class User {

    public name: string;
  	private nickName: string;
    protected age: number;
    readonly pass: number;
    // public - это значение по умолчанию, если оно не указано, то св-во или метод получают данный тип автоматически
    // модификатор public говорит о том, что к соответствующему св-ву или методу можно получить свободный доступ
    // private - элемент класса, помеченный данным модификатором, не может быть доступен за пределами класса
    // protected - доступ к эл-там с данным модификатором могут получить только наследники, экземпляруы класса как
    // yauhen доступа к этим св-вам и методам не имеют
    // readonly - эл-т, помеченный им становится доступным только для чтения
    constructor(name: string, age: number, nickName: string, pass: number) {
        this.name = name;
        this.age = age;
        this.nickName = nickName;
        this.pass = pass;
    }

}

const yauhen = new User('Yauhen', 31, 'webDev', 123);

yauhen.name;	    // "Yauhen"
yauhen.nickName;  // Prop 'nickName' is private and only accessible within class 'User'
yauhen.age;		    // Prop 'age' is protected and only accessible within class 'User' and its subclasses
yauhen.pass = 42; // Cannot assign to 'pass' because it is a read-only property

// Class default properties
class User {

    name: string;
    age: number = 20;
    nickName: string = 'webDev';

    constructor(name: string) {
        this.name = name;
    }

}

const user = new User('Yauhen');

user;   // { name: "Yauhen", age: 20, nickName: "webDev" }

// Class default properties (example)
class User {

    name: string;
    age: number = 20;
    nickName: string = 'webDev';

    constructor(name: string) {
        this.name = name;
    }
    
    getPass(): string {
        return `${this.nickName}${this.age}`;
    }

}

const user = new User('Yauhen');

user.getPass(); // "webDev20"

// Minimization of Class properties
class User {

    constructor(
        public name: string,
        public age: number,
        public nickName: string,
        public pass: number
    ) {}

}

// Try to change private property
class User {

    private age: number = 20;

    constructor(public name: string) {}
}

const yauhen = new User('Yauhen');

yauhen.age = 30;	// Property 'age' is private and only accessible within class 'User'

// Get access to private property
class User {

    private age: number = 20;

    constructor(public name: string) {}

    setAge(age: number) {
        this.age = age;
    }

    set myAge(age: number) {
        this.age = age;
    }
}

const yauhen = new User('Yauhen');

yauhen.setAge(30);	// 30
yauhen.myAge = 31;	// 31