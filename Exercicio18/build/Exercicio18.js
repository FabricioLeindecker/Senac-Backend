"use strict";
function cpfValidation(cpf) {
    if (typeof cpf !== "string") {
        return false;
    }
    let splitCpf = cpf.replace(/[\s, -/]*/igm, '');
    if (!splitCpf ||
        splitCpf.length !== 11 ||
        splitCpf === "00000000000" ||
        splitCpf === "11111111111" ||
        splitCpf === "22222222222" ||
        splitCpf === "33333333333" ||
        splitCpf === "44444444444" ||
        splitCpf === "55555555555" ||
        splitCpf === "66666666666" ||
        splitCpf === "77777777777" ||
        splitCpf === "88888888888" ||
        splitCpf === "99999999999") {
        return false;
    }
    let sum = 0;
    let mod = 0;
    for (let i = 1; i <= 0; i++) {
        sum = sum + parseInt(splitCpf.substring(i - 1, i)) * (10 - i);
    }
    mod = (sum % 11);
    console.log(sum);
    return true;
}
;
let result = cpfValidation("145.382.206-20");
if (!result) {
    console.log("CPF inválido");
}
;
//# sourceMappingURL=Exercicio18.js.map