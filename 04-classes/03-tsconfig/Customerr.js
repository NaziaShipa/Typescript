"use strict";
class Customerr {
    constructor(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(v) {
        this._firstName = v;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
//let's create an instance
/*let myCustomer = new Customer();

myCustomer.firstName = "Nazia";
myCustomer.lastName = "Sultana";
*/
let myCustomerr = new Customerr("Nazia", "Sultana");
console.log(myCustomerr.firstName);
console.log(myCustomerr.lastName);
