var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
//let's create an instance
/*let myCustomer = new Customer();

myCustomer.firstName = "Nazia";
myCustomer.lastName = "Sultana";
*/
var myCustomer = new Customer("Nazia", "Sultana");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
