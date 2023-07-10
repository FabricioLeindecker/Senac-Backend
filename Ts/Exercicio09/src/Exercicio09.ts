//Crie uma função que receba um parâmetro qualquer e que imprima no console o tipo da variável.

function anything(par?:any):void {
   console.log(typeof par);
}

anything("teste");
anything(1);
anything(true);
anything();