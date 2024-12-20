/* QUAL A DIFENÇA EM O LOOP FOR E O LOOP WHILE? 
 FOR é usado quando você sabe exatamente quantas vezes deseja repetir um bloco de código. Ele é mais conciso, combinando a inicialização, condição e incremento em uma única linha.
 WHILE é utilizado quando você não sabe exatamente quantas vezes precisará iterar e quer que o loop continue enquanto uma condição for verdadeira. A verificação da condição é feita antes de cada iteração. */

 /*let i = 0; //esse código seria um "looping" infinito, pois o i nunca deixará de ser maior que 0, pois esse foi o valor atribuido a ele, e não há nada que altere esse valor,
 while (i<10){  //para que haja alteração e o código possa ser executado corretamente, é necessário incrementar com i++ abaixo do console.log, para que ele adicione sempre 1 valor ao i
    console.log(i);
    i++;
 }*/

 //agora o DO WHILE, qual é a diferença? ele vai fazer a repetição enquanto a proposição for verdadeira
/*let i = 10;
do {
   console.log(i);
   i++;
 } while (i<10);*/
 //pouco usado, geralmente usa-se o for, foreach ou while
 //usado quando sabemos que deveremos entrar pelo menos uma vez no laço de repetição
//ex de caso usual:
/*let resposta = ' ';
do {
   resposta = window.prompt('Vc é maior de idade');
}while(resposta.toLocaleLowerCase() != 'sim');*/
//toLowerCase compara a escrita, ex: SIM em maiúsculo e sim em minúsculo.
