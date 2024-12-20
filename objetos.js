/*os objetos visam reduzir todas essas variáveis em uma coisa só
eles nos permitem modelar um conjunto de dados que irão conter diversas 
informações pertinentes sobre a mesma "variável" */

/*const idade = 19;
const nome = 'Tiago';
const altura = 1.75;
const endereço = 'rua sussuapara';
const cpf = 7720303164;*/
//esses dados formam dados de uma pessoa, nesse caso, poderiamos criar um objeto chamado "dadosTiago"

const dadosTiago = {
    nome: 'Tiago',
    idade: 19,              //sempre separe os dados com vírgula 
    altura: 1.75,
    cpf: 7720303164,
    endereco: 'rua sussuapara'
};

console.log(`Esses são os dados do cidadão: nome -> ${dadosTiago.nome}, idade -> ${dadosTiago.idade}, altura -> ${dadosTiago.altura}, cpf -> ${dadosTiago.cpf}, endereço -> ${dadosTiago.endereco}  `); 
/*as crases servem para adicionar informações em um texto
caso algum dos dados forem alterados, as crases receberão automaticamente 
o novo dado e os apresentarão corretamente na execução */