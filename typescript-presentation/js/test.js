var Animal = (function () {
    function Animal() {
        Animal.counter++;
    }
    Animal.prototype.method = function () {
    };

    Animal.prototype.secretMethod = function () {
    };
    Animal.counter = 0;
    return Animal;
})();

var a;
alert(a.prop);
//# sourceMappingURL=test.js.map
