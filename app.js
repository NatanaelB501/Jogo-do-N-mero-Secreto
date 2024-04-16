let listaDeNumeros = [];
let numeroSecreto = 100;
let numeroGeradoAleatoriamente = gerarNumeroAleatorio();
let tentativa = 1;
mensagemInicial();
console.log(numeroGeradoAleatoriamente);
alert('Clique em "Allow" para ouvir o jogo.');

function exibirTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function mensagemInicial() {
    exibirTela('h1', 'Jogo do número secreto');
    exibirTela('p', `Escolha um número entre 1 e ${numeroSecreto}: `);
}

function verificarChute() {
    let numeroDigitado = document.querySelector('input').value;

    if(numeroDigitado == numeroGeradoAleatoriamente) {
        acertar();
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
            }
        })
    } else {
        errou();
        
    }
}    
    function gerarNumeroAleatorio() {
        let numeroEscolhido = parseInt(Math.random()*numeroSecreto) + 1;
        let quantidadeNumerosLista = listaDeNumeros.length;

        if (quantidadeNumerosLista == numeroSecreto) {
            listaDeNumeros = [];
        }
        if (listaDeNumeros.includes(numeroEscolhido)) {
            return gerarNumeroAleatorio();
        }else {
            listaDeNumeros.push(numeroEscolhido);
            console.log(listaDeNumeros);
            return numeroEscolhido;
        }
    }
function limparCaixa() {
        numeroDigitado = document.querySelector('input');
        numeroDigitado.value = '';
    }
function reiniciarJogo() {
        console.log('CLICADO');
        numeroGeradoAleatoriamente = gerarNumeroAleatorio();
        console.log(`Novo número aleatório ${numeroGeradoAleatoriamente}.`);
        limparCaixa();
        mensagemInicial();
        tentativa = 1;
        document.getElementById('reiniciar').setAttribute('disabled' , 'true');
        document.getElementById('confirmar').removeAttribute('disabled', 'false');
    }



function acertar() {
    let numeroDigitado = document.querySelector('input').value;
    
    if(numeroDigitado == numeroGeradoAleatoriamente) {
        exibirTela('h1', 'ACERTOU!!!');
        let mensagemCorreta = tentativa > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativa} ${mensagemCorreta}!!!.`;
        exibirTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('confirmar').setAttribute('disabled', 'true');
    }
}

function errou() {
    let numeroDigitado = document.querySelector('input').value;
    
    if (numeroDigitado > numeroGeradoAleatoriamente) {
        exibirTela('h1', 'ERROU!');
        exibirTela('p', `O número secreto é menor.`);
        limparCaixa();
        } else {
            exibirTela('h1', 'ERROU!');
            exibirTela('p', `O número secreto é maior.`);
            limparCaixa();
            document.querySelector('input').focus();
        }
        tentativa++
        console.log (numeroDigitado == numeroGeradoAleatoriamente);
}

document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter')
       if (!document.getElementById('confirmar').hasAttribute('disabled')) {
        document.getElementById('confirmar').click();
       } else {
        document.getElementById('reiniciar').click();
       }
})

// document.querySelector('input').addEventListener('keypress', function(e) {
//     if (e.key === 'Enter') {
//       if (!document.getElementById('reiniciar').hasAttribute('disabled')) {
//         document.getElementById('reiniciar').click();
//       }
//     }
//   });
    // function botaoEnter() {
    //     if (numeroDigitado == numeroGeradoAleatoriamente) {
    //         reiniciarJogo();
    //     } else {
    //         verificarChute();
    //     }
    // }
// console.log ('ate aqui ok');


//Tente novamente, não desista!


// EXERCÍCIO ADICIONAIS

// function imc() {
//     let altura = 1.7;
//     let peso = 77;
//     let imcc = peso / altura / altura;
//     console.log(imcc);
// }
// imc();

// function factorialize(num) {
//     return num * 4 * 3 * 2 * 1;
// }
// let nu = factorialize(5);
// console.log(nu);

// function dinheiro(dolar) {
//     return dolar * 4.8;
// }
// let real = dinheiro(10);
// console.log(real);

// function tamanho(a,b) {
//     return a * b;
// }
// let parede = tamanho(2, 3);
// console.log(`${parede}m²`);

// function area(a, b) {
//     return calculo1 = (a * a * 3.14)
//     return calculo2 = (2 * 3.14 * b);
// }
// let areaEPerimetro = area(8, 30);
// console.log(areaEPerimetro);

// function tabuada() {
//     return numerotabuada
    
// }

// saudacao();

// function saudacao() {
//     console.log('Olá mundo!');
// }

// function receberNome(nome) {
//     console.log(`Olá, ${nome}!`);
// }

// receberNome('Natanael');

// function numeroDigitado(numer) {
//     return numer * 2;
// }
// let dobro = numeroDigitado(5);
// console.log(dobro);

// function mediaDosNumeros() {
//     let numero1 = parseInt(prompt('Digite um número: '));
//     let numero2 = parseInt(prompt('Digite outro número: '));
//     let numero3 = parseInt(prompt('Digite mais um número: '));
//     console.log(`A média entre ${numero1}, ${numero2} e ${numero3} é: ${(numero1+numero2+numero3)/3}.`);
// }
// mediaDosNumeros()

// function numeroMaior() {
//     let primeironumero = parseInt(prompt('Digite um número: '));
//     let segundonumero = parseInt(prompt('Digite mais um número: '));
//     let maior = primeironumero > segundonumero? `O número maior é o: ${primeironumero}.` : `O número maior é o: ${segundonumero}.`;
//     console.log(maior);
//     if (primeiroNumero > segundoNumero) {
//         console.log(`O número maior é o: ${primeiroNumero}.`);
//         } else {
//             console.log(`O número maior é o: ${segundoNumero}.`);
//         }
// }
// numeroMaior()

// function multiplicação() {
//     let n1 = parseInt(prompt('Digite um número: '));
//     console.log(`O número ${n1} multiplicado por ele mesmo é: ${n1*n1}.`);
// }
// multiplicação();

// function ola() {
//     console.log('Olá Mundo!');
// }
// ola();

// function saudação(nome) {
//     console.log(`Olá, ${nome}!`);
// }
// saudação('Natanael');

// function dobro(numero) {
//     console.log(numero * 2);
// }
// dobro(5);

// function media(a, b, c) {
//     console.log((a+b+c)/3);
// }
// media(10,20,30);

// function maiores(a, b) {
//     console.log(a > b? a : b);
// }
// maiores(18, 9);

// function multi(a) {
//     console.log(a*a);
// }
// multi(15);

// function olaMundo() {
//     console.log('Olá Mundo!');
// }
// olaMundo();

// function olaNome(nome1) {
//     console.log(`Olá, ${nome1}!`);
// }
// olaNome('Natanael');

// function dobrado(numeros) {
//     return numeros*2;
// }
// let dobra = dobrado(5);
// console.log(dobra);

// function tres(a, b, c) {
//     return (a+b+c)/3;
// }
// let triplo = tres(1, 2, 3);
// console.log(triplo);

// function dois(a, b) {
//     return a > b ? a : b;
// }
// let tamanho = dois(12, 8);
// console.log(tamanho);

// function multip(numerol) {
//     return numerol * numerol;
// }
// let n2 = multip(5);
// console.log(n2);
