var Customerr = /** @class */ (function () {
    function Customerr(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(Customerr.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
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
var myCustomer = new Customerr("Martin", "Dixon");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
