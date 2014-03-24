var a = require("a");

var ClassB = (function () {
    function ClassB() {
        this.v = new a.ClassA();
    }
    return ClassB;
})();
exports.ClassB = ClassB;
//# sourceMappingURL=b.js.map
