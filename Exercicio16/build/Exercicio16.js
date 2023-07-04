"use strict";
function calculateAnagramCount(word) {
    const length = word.length;
    let factorial = 1;
    for (let i = 2; i <= length; i++) {
        factorial *= i;
    }
    return factorial;
}
console.log(calculateAnagramCount("mesa"));
//# sourceMappingURL=Exercicio16.js.map