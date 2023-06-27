"use strict";
function fullName(name, lastName = null) {
    if (lastName === null) {
        return name;
    }
    else {
        return `${name} ${lastName}`;
    }
}
console.log(fullName("Fabrício"));
console.log(fullName("Fabrício", "Leindecker"));
//# sourceMappingURL=Exercicio08.js.map