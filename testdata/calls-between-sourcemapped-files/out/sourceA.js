"use strict";
var sourceB_1 = require('./sourceB');
function f() {
    console.log('mapped');
}
setInterval(function () {
    sourceB_1.callbackCaller(f);
}, 0);
//# sourceMappingURL=sourceA.js.map