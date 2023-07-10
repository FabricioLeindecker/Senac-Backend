//Criar uma função que recebe o primeiro nome e o sobrenome, o sobrenome pode ser nulo
//exibir nome completo

function fullName(name:string, lastName:string | null = null):string {
    if (lastName === null) {
        return name;
    } else {
        return `${name} ${lastName}`;
    }
}

 console.log(fullName("Fabrício",));
 console.log(fullName("Fabrício", "Leindecker"));