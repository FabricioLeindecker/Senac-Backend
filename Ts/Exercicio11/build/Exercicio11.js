"use strict";
var department;
(function (department) {
    department["MARKETING"] = "marketing";
    department["SALES"] = "vendas";
    department["FINANCIAL"] = "financeiro";
})(department || (department = {}));
const employees = [
    { name: "Marcos", salary: 2500, sector: department.MARKETING, presential: true },
    { name: "Maria", salary: 1500, sector: department.SALES, presential: false },
    { name: "Salete", salary: 2200, sector: department.FINANCIAL, presential: true },
    { name: "João", salary: 2800, sector: department.MARKETING, presential: false },
    { name: "Josué", salary: 5500, sector: department.FINANCIAL, presential: true },
    { name: "Natalia", salary: 4700, sector: department.SALES, presential: true },
    { name: "Paola", salary: 3500, sector: department.MARKETING, presential: true }
];
function getMarketing(employees) {
    return employees.filter(person => person.sector === department.MARKETING && person.presential);
}
const marketing = getMarketing(employees);
console.log(marketing);
//# sourceMappingURL=Exercicio11.js.map