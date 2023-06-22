/* JavaScript
function checaAnoBissexto(ano) {
    const cond1 = ano % 400 === 0
    const cond2 = (ano % 4) === 0) && (ano % 100 !== 0)
    return cond1 || cond2
}
TypeScript */
function checkLeapYear (ano:number):string {
    const cond1:boolean = ano % 400 === 0;
    const cond2:boolean = (ano % 4 === 0) && (ano % 100 !== 0);

    return cond1 || cond2 ? "É um ano bissexto" : "Não é um ano bissexto";
}

