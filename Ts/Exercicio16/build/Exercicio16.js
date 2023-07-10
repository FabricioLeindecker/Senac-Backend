"use strict";
function anagramCount(word) {
    const wordLength = word.length;
    let factorial = 1;
    for (let i = 2; i <= wordLength; i++) {
        factorial *= i;
    }
    return factorial;
}
;
console.log(anagramCount("mesa"));
console.log(anagramCount("galho"));
console.log(anagramCount("n"));
console.log(anagramCount("  "));
//# sourceMappingURL=Exercicio16.js.map