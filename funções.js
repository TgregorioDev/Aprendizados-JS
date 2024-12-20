/*funções são usadas para definir um conjunto de passos, nomea-los e poder localiza-los quando necessário no código
função é um trecho do código que só é executado quando solicitado, e poderá ser executado diversas vezes */

/*function cumprimentarCliente () {  //declaramos a função dessa forma, function -> nome da função -> () dentro destes você pode realizar declarações -> abre {}
    console.log('ola, bom dia, como posso ajudar?');
    console.log('qual seu nome? qual empresa? qual carteira?');  //dentro da função, declaramos o conjunto de passos que desejamos declarar, nesse exemplo, o procedimento padrão de atendimento da Virtúa
    console.log('qual seria o anydesk para acessarmos e dar uma olhada?');
}

cumprimentarCliente();
cumprimentarCliente();  //chamamos a função pelo seu nome, entre () especifica-se o que dentro dela queremos chamar, nesse caso ex chamei tudo. e a quantidade de vezes que eu chamei é a quantidade de vezes que esta função será executada
cumprimentarCliente();
*/
/*function digaMeuNome(){   //este é um exemplo de uma função 'void', vazia, se não tem 'return' é uma função void
    const name = 'tiago';
    console.log(name);
}*/

//digaMeuNome(); //para chamar a função no código, basta chamar a função digitar os parênteses

//função com parâmetros 

/*function soma(num1, num2){
    const resultado =  num1 + num2;
    console.log(resultado);
}
soma(2, 60); //uma função com parâmetros só será chamada caso você especifique um atributo para ela dentro dos parênteses, e poderá ser chamada quantas vezes você quiser
soma(19833884, 938532892348);*/

//return ex1:
/*
function soma2(numero1, numero2){
    const resultado =  numero1 + numero2;
                                          /*a função return é uma função que retorna algo para quem está chamando esta função
                                          o numero declarado 'sobe' até a função soma, depois ele é contabilizado para gerar o valor da variável e este resultado é retornado e trazido na variável 'resultadoDaSoma' */
    /*return resultado
}

const resultadoDaSoma = soma2(30,40);
    console.log(resultadoDaSoma); */

//return ex2:

/*function estaEndividado(receita, gastos){
    if (receita > gastos){
        return 'está azul';
    }                                  //essa função vai verificar o SE os gasto são maiores que a receita ou não, retornando a informação se o usuário está em azul ou vermelho
    else{
        return 'está vermelho'
    }
}
const tiago = estaEndividado (1500, 1800); 
const joao = estaEndividado (600, 456);

console.log(tiago);
console.log(joao);*/

//arrow function 
/* forma moderna de representar as funções em códigos */

const digaMeuNome = () => {   //é escrita desta forma, declarando a varíavel já como função para ser chamada e exibida no console, por meio desse '=>' a função é declarada, como este sinal representa uma flecha e por isso se da o nome 'arrow'
    console.log('tiago');      //dentro dos parenteses é possível declarar os parâmetros normalmente, tornando esta forma de declaração muuito prática
}

digaMeuNome();