"use strict";
function apresentation(name, dateBirth) {
    const nameApresentation = name;
    let splitDate = dateBirth.split("/");
    let prhase = `Olá, me chamo ${nameApresentation} e nasci no dia ${splitDate[0]} de ${splitDate[1]} do ano de ${splitDate[2]}`;
    return prhase;
}
console.log(apresentation("Fabrício", "01/04/1993"));
//# sourceMappingURL=Exercicio07.js.map