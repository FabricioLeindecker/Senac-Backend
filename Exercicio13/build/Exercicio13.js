"use strict";
const person = [
    { name: "João", totalBalance: 1000, debts: [100, 200, 300] },
    { name: "Paula", totalBalance: 7500, debts: [200, 1040] },
    { name: "Pedro", totalBalance: 10000, debts: [5140, 6100, 100, 2000] },
    { name: "Luciano", totalBalance: 100, debts: [100, 200, 1700] },
    { name: "Artur", totalBalance: 1800, debts: [200, 300] },
    { name: "Soter", totalBalance: 1200, debts: [] }
];
function inDebt(debtors) {
    let calculation = debtors.filter((client) => {
        const totalDebt = client.debts.reduce((total, debt) => total + debt, 0);
    });
    return calculation;
}
;
console.log(inDebt(person));
//# sourceMappingURL=Exercicio13.js.map