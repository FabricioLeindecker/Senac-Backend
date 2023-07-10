//     // Escreva uma função que pergunta ao usuário a data de nascimento de uma pessoa (ex.: “24/04/1993”, e a data de emissão da sua carteira de identidade (ex.: “07/11/2015”). A função deve retornar um booleano que indica se a carteira precisa ser renovada ou não. A carteira precisa ser renovada segundo os seguintes critérios:

//     // - Para pessoas com menos de 20 anos, ou exatamente 20 anos, deve ser renovada de 5 em 5 anos (se for exatamente 5 anos, deve ser renovada).
//     // - Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada de 10 em 10 anos (se for exatamente 10 anos, deve ser renovada).
//     // - Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos
//     // - **Entradas/Saídas**
//     //     input: string, string
//     //     output: boolean
 
//     // - **Dica 1**
//     //     Você precisará da data atual para fazer as operações, uma opção é utilizar `new Date()` para obter a data atual
        
//     // - **Dica 2**   
//     //     Para fazer as operações necessárias, você pode converter as datas para `timestamp` usando o método `getTime()` na data

//     function checkUpdateId(birthdayYear: string, issueYear: string): boolean {
//         const currentDate: Date = new Date();
//         const currentYear: number = currentDate.getFullYear();
      
//         const birthday: Date = new Date(birthdayYear);
//         const issueDate: Date = new Date(issueYear);
      
//         const ageInYears: number = currentYear - birthday.getFullYear();
      
//         // Obtem a diferença de tempo em milissegundos entre as datas
//         const timeSinceIssue: number = currentDate.getTime() - issueDate.getTime();
      
//         // Converte a diferença de tempo em anos
//         const yearsSinceIssue: number = new Date(timeSinceIssue).getFullYear();
      
//         if (ageInYears <= 20 || (ageInYears === 21 && birthday > currentDate)) {
//           return yearsSinceIssue >= 5;
//         } else if (ageInYears <= 50 || (ageInYears === 51 && birthday > currentDate)) {
//           return yearsSinceIssue >= 10;
//         } else {
//           return yearsSinceIssue >= 15;
//         }
//       }
         
// console.log(checkUpdateId("10/03/1980", "10/03/2010"));
// console.log(checkUpdateId("10/03/2000", "10/03/2015"));

function validationRenovation(dateBirth:string, dateIssue:string):boolean {
  const currentDate:Date = new Date();

  const birthdayDate:Date = new Date(dateBirth);
  let dateOfIssue:Date = new Date(dateIssue);
  
  let birthdayDateTimestamp:number = birthdayDate.getTime();
  let dateIssueTimestamp:number = dateOfIssue.getTime();
  let currentDateTimestamp:number = currentDate.getTime();

  let dateSinceIssue:number = currentDateTimestamp - dateIssueTimestamp;

  let currentAge:number = currentDateTimestamp - birthdayDateTimestamp;
 
  if (currentAge <= 20 && dateSinceIssue >= 5) {
    return true;
  } else if ((currentAge < 20 || currentAge <= 50) && dateSinceIssue >= 10) {
    return true;
  } else if (currentAge > 50 && dateSinceIssue >= 15) {
    return true;
  } else { 
    return false;
  }
}

console.log(validationRenovation("24/04/1993", "07/11/2015"));
console.log(validationRenovation("01/01/1971", "01/01/2000"));
