"use strict";
function cpfValidation(cpf) {
    if (typeof cpf !== "string") {
        return false;
    }
    let splitCpf = cpf.replace(/[\s, -/]*/igm, '');
    if (!splitCpf ||
        splitCpf.length !== 11 ||
        splitCpf.match(/(\d)\1{10}/)) {
        return false;
    }
    let sum = 0;
    let mod = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(splitCpf.charAt(i)) * (10 - i);
    }
    mod = 11 - (sum % 11);
    if (mod >= 10) {
        mod = 0;
    }
    ;
    if (mod !== parseInt(splitCpf.charAt(9))) {
        return false;
    }
    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(splitCpf.charAt(i)) * (11 - i);
    }
    mod = 11 - (sum % 11);
    if (mod >= 10) {
        mod = 0;
    }
    ;
    if (mod !== parseInt(splitCpf.charAt(10))) {
        return false;
    }
    return true;
}
;
let result = cpfValidation("111.111.111-11");
if (result) {
    console.log("CPF válido");
}
else {
    console.log("CPF inválido");
}
//# sourceMappingURL=Exercicio18.js.map