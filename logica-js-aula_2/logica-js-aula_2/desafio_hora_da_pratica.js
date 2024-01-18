// ---------------- Dia da Semana ---------------------------

    // Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
    const fimDeSemana = ["SÁBADO", "DOMINGO"];
    const diaDaSemana = ["SEGUNDA", "TERÇA", "QUARTA", "QUINTA", "SEXTA"];

    let hoje = prompt("Qual é o dia da semana? ('Digite apenas o primeiro nome, sem -Feira. Exemplo: 'Sábado'.')").toUpperCase();
    console.log (hoje);
    if (fimDeSemana.includes(hoje)) {
        alert("Bom fim de semana!");
        
    } else if (diaDaSemana.includes(hoje)) {
            alert("Boa semana!");
        } else {
            alert("Favor, digite a primeira letra em MAIÚSCULA e sem a segunda parte. Exemplo: Sábado");
        }

    // Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
    let numk = prompt("Digite um número inteiro, maior ou menor que zero.");
    console.log (numk);
    if (numk >= 0) {
        alert("O número: " + numk + " é POSITIVO.");
    } else if (numk < 0) {
        alert("O número: " + numk + " é NEGATIVO.");
    }

    // Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
    let score = prompt("Insira a pontuação: ");
    console.log(score);
    if (score >= 100){
        alert("Parabéns, você venceu!");
    } else {
        alert("Tente novamente para ganhar!");
    }

    // Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
    var saldo = 5800;
    alert("Seu saldo é de: $" + saldo);

    // Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
    let nomep = prompt("Digite seu nome!");
    alert("Bem vindo, " + nomep + ". Fico feliz que esteja aqui!");
