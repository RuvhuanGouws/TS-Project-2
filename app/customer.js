"use strict";
exports.__esModule = true;
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer() {
    }
    //Functions
    Customer.prototype.firstName = function () {
        if (this.nickname) {
            return this.nickname;
        }
        else {
            return this.forenames.split(" ", 1)[0];
        }
    };
    Customer.prototype.fullName = function () {
        return this.firstName();
        +" " + this.surname;
    };
    ;
    return Customer;
}());
exports.Customer = Customer;
