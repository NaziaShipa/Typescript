var Customerr = /** @class */ (function () {
    function Customerr(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    Object.defineProperty(Customerr.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (v) {
            this._firstName = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customerr.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customerr;
}());
//let's create an instance
/*let myCustomer = new Customer();

myCustomer.firstName = "Nazia";
myCustomer.lastName = "Sultana";
*/
var myCustomerr = new Customerr("Nazia", "Sultana");
console.log(myCustomerr.firstName);
console.log(myCustomerr.lastName);
