class Customer {

    firstName: string;
    lastName: string;

    constructor(theFirst: string, theLast: string) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
}

//let's create an instance
/*let myCustomer = new Customer();

myCustomer.firstName = "Nazia";
myCustomer.lastName = "Sultana";
*/

let myCustomer = new Customer("Nazia", "Sultana");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
