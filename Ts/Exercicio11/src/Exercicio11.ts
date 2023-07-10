// O seguinte `array` traz as pessoas colaboradoras de uma empresa, com seus salários, setores e se trabalham presencialmente ou por home sector:
// [
// 	{ nome: "Marcos", salário: 2500, setor: "marketing", presencial: true },
// 	{ nome: "Maria" ,salário: 1500, setor: "vendas", presencial: false},
// 	{ nome: "Salete" ,salário: 2200, setor: "financeiro", presencial: true},
// 	{ nome: "João" ,salário: 2800, setor: "marketing", presencial: false},
// 	{ nome: "Josué" ,salário: 5500, setor: "financeiro", presencial: true},
// 	{ nome: "Natalia" ,salário: 4700, setor: "vendas", presencial: true},
// 	{ nome: "Paola" ,salário: 3500, setor: "marketing", presencial: true }
// ]
// Considerando o `array`acima, crie um `ENUM` para os setores e um `type` para as pessoas colaboradoras. Em seguida, crie uma função que receba este `array`como parâmetro e retorne apenas as pessoas do setor de marketing que trabalham presencialmente

enum department {
    MARKETING = "marketing",
    SALES = "vendas",
    FINANCIAL = "financeiro",
}

type person = {
    name:string,
    salary:number,
    sector:department,
    presential:boolean
 }

const employees: person[] = [
    { name: "Marcos", salary: 2500, sector: department.MARKETING, presential: true },
    { name: "Maria" ,salary: 1500, sector: department.SALES, presential: false},
    { name: "Salete" ,salary: 2200, sector: department.FINANCIAL, presential: true},
    { name: "João" ,salary: 2800, sector: department.MARKETING, presential: false},
    { name: "Josué" ,salary: 5500, sector: department.FINANCIAL, presential: true},
    { name: "Natalia" ,salary: 4700, sector: department.SALES, presential: true},
    { name: "Paola" ,salary: 3500, sector: department.MARKETING, presential: true }
 ]

// Função que retorna os funcionários de marketing que estão trabalhando presencialmente
function getMarketing(employees: person[]): person[] {
  return employees.filter(person => person.sector === department.MARKETING && person.presential);
}

// Chamando a função getMarketing para obter os funcionários de marketing
const marketing = getMarketing(employees);

// Imprimindo o resultado no console
console.log(marketing);