//Função que recebe string com nome e outra string com data ("26/06/2023")
//retornar string no formato:
//Olá, me chamo ${nome} nasci no dia ${dia} do ${mes} do ${ano}

function apresentation(name: string, dateBirth: string): string {
    const nameApresentation:string = name;
    let splitDate = dateBirth.split("/"); //divide a string em partes baseada no caracter '/', array com 3 elementos
    let prhase:string = `Olá, me chamo ${nameApresentation} e nasci no dia ${splitDate[0]} de ${splitDate[1]} do ano de ${splitDate[2]}`;

    return prhase;
}

console.log(apresentation("Fabrício", "01/04/1993"));