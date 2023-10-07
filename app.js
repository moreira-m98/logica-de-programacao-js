alert("Boas vindas ao jogo do número secreto");
let numeroMax = 50;
let numeroSecreto = parseInt(Math.random() * numeroMax + 1);
console.log("numero secreto", numeroSecreto);
let chute;
let tentativas = 1;

// enquanto chute não for igual ao número secreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMax}`);
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if(chute > numeroSecreto) {
            alert(`O numero secreto é menor que ${chute}`);
        } else{
            alert(`O numero secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"
alert(`Isso ai! Você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

// if(tentativas > 1) {
//     alert(`Isso ai! Você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
// } else {
//     alert(`Isso ai! Você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
// }



// alert('Bem-vindo ao jogo do número secreto')
// let chute = prompt('Escolha um número entre 1 e 10')

// let numeroSecreto = 4

// console.log(chute == numeroSecreto)
// if (chute == numeroSecreto) {
//     alert('Acertou')
// } else {
//     alert('O número secreto era ' + numeroSecreto + ', e você escolheu ' + chute )
// }

// alert('Boas vindas ao jogo do número secreto');
// // Adicione um console.log para verificar o valor de "chute" após a entrada do usuário
// let chute = prompt('Escolha um número entre 1 e 10');
// console.log('Valor do chute:', chute);
// let numeroSecreto = 4;
// // Adicione um console.log para verificar a comparação entre "chute" e "numeroSecreto"
// console.log('Resultado da comparação:', chute == numeroSecreto);
// if (chute == numeroSecreto) {
//     alert('Acertou');
// } else {
//     // Adicione um console.log para verificar o valor de "numeroSecreto" quando o jogador erra
//     console.log('Valor do número secreto:', numeroSecreto);
//     alert('O número secreto era ' + numeroSecreto);
// }





