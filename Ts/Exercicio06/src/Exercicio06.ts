/*function operations(num1:number, num2:number):void {
    let sum:number = num1 + num2;
    let difference:number = num1 - num2;
    let multiplication:number = num1 * num2;
    let division:number = num1 / num2;

    console.log(`Numeros recebidos: ${num1} e ${num2} 
    \nsoma: ${sum}
    \ndiferença: ${difference} 
    \nmultiplicação: ${multiplication} 
    \ndivisão: ${division} `);
}

operations(600, 45);
*/
function operations(num1:number, num2:number):string {
    let sum:number = num1 + num2;
    let difference:number = num1 - num2;
    let multiplication:number = num1 *num2;
    let division:number = num1 / num2;

    let result = `Numeros recebidos: ${num1} e ${num2} 
    \nsoma: ${sum}
    \ndiferença: ${difference} 
    \nmultiplicação: ${multiplication} 
    \ndivisão: ${division}`;

    return result
}

console.log(operations(600, 45));