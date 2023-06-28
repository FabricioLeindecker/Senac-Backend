"use strict";
var department;
(function (department) {
    department["MARKETING"] = "marketing";
    department["SALES"] = "vendas";
    department["FINANCIAL"] = "financeiro";
})(department || (department = {}));
const employees = [
    { name: "Marcos", salary: 2500, office: department.MARKETING, presential: true },
    { name: "Maria", salary: 1500, office: department.SALES, presential: false },
    { name: "Salete", salary: 2200, office: department.FINANCIAL, presential: true },
    { name: "João", salary: 2800, office: department.MARKETING, presential: false },
    { name: "Josué", salary: 5500, office: department.FINANCIAL, presential: true },
    { name: "Natalia", salary: 4700, office: department.SALES, presential: true },
    { name: "Paola", salary: 3500, office: department.MARKETING, presential: true }
];
function getMarketingEmployeesInOffice(employees) {
    return employees.filter(employee => employee.office === department.MARKETING && employee.presential);
}
const marketingEmployeesInOffice = getMarketingEmployeesInOffice(employees);
console.log(marketingEmployeesInOffice);
//# sourceMappingURL=Exercicio11.js.map