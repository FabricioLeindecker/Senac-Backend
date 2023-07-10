"use strict";
function operations(num1, num2) {
    let sum = num1 + num2;
    let difference = num1 - num2;
    let multiplication = num1 * num2;
    let division = num1 / num2;
    let result = `Numeros recebidos: ${num1} e ${num2} 
    \nsoma: ${sum}
    \ndiferença: ${difference} 
    \nmultiplicação: ${multiplication} 
    \ndivisão: ${division}`;
    return result;
}
console.log(operations(600, 45));
//# sourceMappingURL=Exercicio06.js.map