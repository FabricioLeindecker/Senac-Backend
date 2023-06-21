//Declaração de Variáveis
const company:string = "Senac";
let age:number = 28;
let isCorrect:boolean = true;

//Declaração de Array
const arr:Array<number> = [1, 2, 3];
const array:number[] = [1, 2, 3];

//Declaração de Objeto
const person: {
    name:string,
    age:number
} = {
    name: "Senac",
    age: 30
}

//Declaração do tipo Any
let result:any;
result = "result";
result = 1903;
result = true;

//Declaração de função tipada
function sum(n1:number, n2:number):number {
    return n1 + n2;
}

function resultSum(n1:number, n2:number):string {
    let result = n1 + n2;
    return `Resultado é ${result}`;
}

//Declaração de função void
function sayHello(name?:string): void {
    console.log("Hello, " , name || "world");
}