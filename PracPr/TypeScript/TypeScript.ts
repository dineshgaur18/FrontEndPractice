function greeter(person: string){
    return "Hello, " + person;
}

var user = "Jane User";
document.body.innerHTML = greeter(user);

////======== interface ========
interface Person {
    firstName: string;
    lastName: string;
}

function greeter1(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

var user1 = { firstName: "Jane", lastName: "User" };
document.body.innerHTML = greeter1(user1);


////======== class ========
class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
