let listaDeNumerosSorteados = []; //! array/lista dos números já sorteados antes
let numeroLimite = 100; //! número limite dos números q vão ser sorteados
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){ //! funcão onde possui parâmetros para seleção de tags e 
                                        //! texto, isso de uma forma mais clean que evite a repetição de código.
                                        //! E também o uso de parâmetros evita que o sistema retorne valores nulo;
    let campo = document.querySelector(tag); // selecionando as tags do HTML;
    campo.innerHTML = texto; // acrescentando textos para as tags do HTML;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}


// exibirTextoNaTela('h1', 'Jogo do número secreto'); //! IMPORTANTE: sempre que definimos parâmetros em funções,
// exibirTextoNaTela('p', 'Escolha um número entre 1 e 10'); //! sempre devemos chamar a função definindo os valores dos parâmetros;

function exibirMensagemInicialNaTela(){ // essa função serve para chamar a função de exibirTextoNaTela só que com as mensagens já pré-definidas;
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicialNaTela();

function verificarChute(){
    let chute = document.querySelector('input').value //! este "value" serve para apenas pegar o valor a ser digitado dentro do input

    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'ACERTOU');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        document.getElementById('reiniciar').removeAttribute('disabled'); //! aqui utilizamos o método getElementById para puxar um elemento de forma filtrada do HTML(pelo ID)
        //! estamos utilizando o removoAttribute para remover o atributo disabled do botão NovoJogo
        exibirTextoNaTela('p', mensagemTentativas);
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'número secreto é menor que o chute');
        }else{
            exibirTextoNaTela('p', 'número secreto é maior que o chute');
        }
        tentativas++; //método simplificado de determinar tentativas + 1; #cleancodeémassa
        limparCampo(); //chamando a função limparCampo
    }

    console.log(chute == numeroSecreto);
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicialNaTela(); //chamando a função exibirMensagemInicialNaTela para que quando reniciar o jogo, o h1 e o p voltem ao seus textos iniciais
    document.getElementById('reiniciar').setAttribute('disabled', true); //! aqui estamos difinindo o atributo novamente ao botão NovoJogo, pois já estamos reniciando o jogo
}

function gerarNumeroAleatorio(){ 
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1 ); 
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){ //! verificando se o número já foi sorteado antes com o método includes
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
 }


    //#region  //! Exemplo de função com parâmetro
    // function alterarCorDeFundo(cor, tag){
//     let campo = document.querySelector(tag);
//     campo.style.backgroundColor = cor;
// }

// alterarCorDeFundo('red', 'h1');
// alterarCorDeFundo('blue', 'p');
//#endregion

    //#region  //! Exemplo de função com retorno

// function gerarNumeroAleatorio(){ // função onde faz com que um número aleatório entre 1 e 10 seja criado utilizando o Math.random();
//     return parseInt(Math.random() * 10 + 1 ); // aqui está multiplicando por 10 e somando 1, pois são números que estão entre 1 e 10;
//  }   //! está sendo utilizado o "return" para que o valor do número secreto seja atribuido na variável numeroSecreto,
//      //! resumidamente quando essa função é chamada, é esperado dela que haja um retorno

//#endregion

    //#region //! Resumo
    //! No geral podem existir funções tanto que possuem e não possuem parâmetros e funções que podem ou não possuir retorno,
    //! Por exemplo na função exibirTextoNaTela(ela existe mas não esta armazendo nenhum valor para alguma variável, então não possui return), 
    //! ela está definindo os valores para as tags h1(título) e p(parágrafo), sendo assim eu crio parâmetros para definir esses valores e assim evitando a repetição de código;
    

    //! Na função gerarNumeroAleatorio está acontecendo o contrário pois essa funçõa terá que atribuir um valor 
    //! na memória e na variável numeroSecreto, sendo assim terá que ter um "return";
    //#endregion

    //#region //!Exercícios

    //Exercício 1

    // function HelloWorld(mensagem){
    //     return mensagem;
    // }
    // console.log(HelloWorld('Olá Mundo'));

    //Exercício 2

    // function nomePessoa(nome){
    //     return `Olá, ${nome}`;
    // }
    // console.log(nomePessoa('Miguel'));

     //Exercício 3

    // function dobroNumero(numero){
    //     return numero * 2
    // }

    // console.log(dobroNumero(2))

     //Exercício 4

    // function mediaNumero(n1, n2, n3){
    //     let media = (n1 + n2 + n3) / 3;
    //     return media
    // }

    // console.log(mediaNumero(10, 5, 6))

     //Exercício 5

    // function maiorNum(n1, n2){

    //     if(n1 > n2){
    //         return `${n1} é o maior número`;
    //     }else{
    //         return `${n2} é o maior número`;
    //     }
    // }

    // console.log(maiorNum(3, 2))


     //Exercício 6

    // function multNum(n1){
    //     return  n1 * n1;
    // }
    // console.log(multNum(5))
    //#endregion