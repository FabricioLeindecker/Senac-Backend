// O CPF consiste de 11 dígitos cuja configuração respeita o formato XXX.XXX.XXX-XX. Para a construção de um número de CPF as seguintes regras são aplicadas.

// - Os oito primeiros dígitos são os número-base
// - O nono dígito é a região fiscal
// - O penúltimo dígito é o dígito verificador (DV) módulo 11 dos nove dígitos anteriores
// - O último dígito é o DV módulo 11 dos dez dígitos anteriores

// Para o cálculo dos DV existem pesos associados a cada dígito, abaixo segue exemplo do cálculo dos DV do CPF com número-base 145382206.

// - Exemplo de cálculo do primeiro Dígito Verificador
    
//     Começamos utilizando os 9 primeiros dígitos multiplicando-os pela sequência decrescente de 10 à 2 e somamos esse resultado.

//     1  4  5  3  8  2  2  0  6
//     x  x  x  x  x  x  x  x  x
//     10 9  8  7  6  5  4  3  2
//     =  =  =  =  =  =  =  =  =
//     10 36 40 21 48 10 8  0  12
    
//     10 + 36 + 40 + 21 + 48 + 10 + 8 + 0 + 12 = 185

//     Com esse resultado agora basta realizar a operação de módulo 11. Ou seja:
    
//     185 % 11 = 9

//     O resto da divisão é `9`. Agora para calcular o dígito verificador vamos subtrair este resto do número 11:
    
//     11 - 9 = 2
    
//     ATENÇÃO: Como o resultado da subtração foi 2, o primeiro dígito verificador é igual a 2. Caso o resultado dessa subtração for `10` ou maior, o penúltimo dígito verificador será o `0`.
    
// - Exemplo de cálculo do segundo Dígito Verificador
    
//     A validação do segundo dígito é semelhante a primeira, porém vamos considerar o primeiro dígito verificador calculado anteriormente. Por isso a multiplicação é feita de 11 à 2.

//     1  4  5  3  8  2  2  0  6  2
//     x  x  x  x  x  x  x  x  x  x
//     11 10 9  8  7  6  5  4  3  2
//     =  =  =  =  =  =  =  =  =  =
//     11 40 45 24 56 12 10 0  18 4
    
//     11 + 40 + 45 + 24 + 56 + 12 + 10 + 0 + 18 + 4 = 220
    
//     Novamente vamos efetuar a divisão por 11 usando o módulo:
    
//     220 % 11 = 0
    
//     E vamos fazer a subtração:
    
//     11 - 0 = 11
    
//     Como o valor é igual ou maior que `10`, o último dígito é `0`.
    
//     Assim, confirmamos os dois dígitos verificadores do nosso CPF 145.382.206-**20** e sabemos que esse CPF é válido. 
    
// Outra regra muito importante é que CPFs com números iguais como: `111.111.111-11`, `222.222.222-22`, entre outros, são CPFs válidos pelo algoritmo mas não existem no registro oficial. Assim esse tipo de CPF não pode ser usado.

// - **Código à desenvolver**
    
//     Você deve criar uma função que receba o CPF no formato “xxx.xxx.xxx-xx” e faça uma validação do valor recebido. Caso o CPF recebido seja válido retorne um `True` e caso seja inválido retorne `False`
    
// - **Entradas/Saídas**

function cpfValidation(cpf:string):boolean {
  if (typeof cpf !== "string") {
        return false;
  }

  //let splitCpf:any = cpf.replace("-",".").replace(/\./g,"").split("");
  let splitCpf = cpf.replace(/[\s, -/]*/igm, '');

/*  if (!splitCpf || 
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
    };
*/
  if (!splitCpf || 
    splitCpf.length !== 11 ||
    splitCpf.match(/(\d)\1{10}/)) {
    
    return false;
  }
  //match(): É um método disponível para strings em JavaScript que verifica se há correspondência entre uma expressão regular e a string.
  // (\d): Isso define um grupo de captura que corresponde a um único dígito (\d representa qualquer dígito de 0 a 9).
  // \1: É uma referência ao primeiro grupo de captura. Portanto, representa uma repetição do mesmo dígito encontrado anteriormente.
  // {10}: Especifica que o dígito capturado anteriormente deve se repetir exatamente 10 vezes.

  //calculo primeiro dv
  let sum:number = 0;
  let mod:number = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(splitCpf.charAt(i)) * (10 - i);
  };
  
  mod = 11 - (sum % 11);
    
  if (mod >= 10) {
    mod = 0; //penultimo dv [9]
  };

  if (mod !== parseInt(splitCpf.charAt(9))) {
    return false;
  };

  //calculo segundo dv
  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(splitCpf.charAt(i)) * (11 - i);
  };
    mod = 11 - (sum % 11);
    
  if (mod >= 10) {
    mod = 0; 
  };
        
  if (mod !== parseInt(splitCpf.charAt(10))) {
    return false;
  };

  return true;
};

let result = cpfValidation("111.111.111-11");

if (result) {
    console.log("CPF válido");
} else {
    console.log("CPF inválido");
};