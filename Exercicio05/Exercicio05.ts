/* Javascript 
function checaRenovacaoRG() {
    const anoAtual = Number(prompt("Digite o ano atual"));
    const anoNascimento = Number(prompt("Digite o ano de nascimento"));
    const anoEmissao = Number(prompt("Digite o ano de emissao do documento"));

    const idade = anoAtual - anoNascimento;
    const tempoCarteira = anoAtual - anoEmissao;

    const cond1 = idade >= 20 && tempoCarteira >= 5;
    const cond2 = idade > 20 && idade <= 50 && tempoCarteira >= 10;
    const cond3 = idade > 50 && tempoCarteira >= 15;
    
    return (cond1 || cond2 || cond3)
}
TypeScript*/
function checkUpdateId():boolean {
    const currentYear = Number(prompt("Digite o ano atual"))
    const birthdayYear = Number(prompt("Digite o ano de nascimento"));
    const issueYear = Number(prompt("Digite o ano de emissao do documento"));

    const age = currentYear - birthdayYear;
    const time = currentYear - issueYear;

    const cond1 = age >= 20 && time >= 5;
    const cond2 = age > 20 && age <= 50 && time >= 10;
    const cond3 = age > 50 && time >= 15;
    
    return (cond1 || cond2 || cond3)
}