"use strict";
exports.__esModule = true;
exports.SalesRep = void 0;
var SalesRep = /** @class */ (function () {
    function SalesRep() {
    }
    //Functions
    SalesRep.prototype.firstName = function () {
        // if (this.nickname) {
        //     return this.nickname;
        // } else {
        //     return this.forenames.split(" ", 1)[0];
        // }
        return this.forenames.split(" ", 1)[0];
    };
    SalesRep.prototype.fullName = function () {
        return this.firstName();
        +" " + this.surname;
    };
    ;
    return SalesRep;
}());
exports.SalesRep = SalesRep;
