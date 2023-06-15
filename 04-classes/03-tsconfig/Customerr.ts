class Customerr {

    private _firstName: string;
    private _lastName: string;



    constructor(theFirst: string, theLast: string) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }

    public get firstName(): string {
        return this._firstName;
    }


    public set firstName(v: string) {
        this._firstName = v;
    }

    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
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
