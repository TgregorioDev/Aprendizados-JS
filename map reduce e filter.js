/* map, reduce e filter serve para manipular arrays, cada um deles é usado para realizar uma manipulação diferente e específica, 

*MAP: Mapeia item por item do array 
   - Criar um novo array com a mesma quantidade de itens do original
   - O novo array você pode alterar o que quiser em relação ao original
   - Você tem acesso a 3 dados:
     . Item por item do array
     . Posição atual do array
     . Array Completo
*/

//MAP ex: 
/*const numeros = [2, 3, 4, 5];

const dobro = numeros.map(numero => numero *2);  //seguindo esse modelo de "arrow function", o criei no map o "numero", e ele pegara item por item do array e multiplicará por 2.
console.log(dobro);*/

/*MAP ex2:

const numeros = [1, 2, 3, 4, 5];

const dobro = numeros.map((numero, index, arrayCompleto) => {  //mesmo que declaremos 3 opções de ações, elas sempre executarão na ordem do que podemos fazer usando o map, independente do nome que atribuirmos
    return numero * 4;

})
console.log(dobro);*/

//MAP ex3 (exemplo real): objetivo, criar o novo array com os valores de desconto para os usuários

const produtos = [
    { id: 1, nome: "Smatphone Galaxy S210", preco: 3999.99, temDesconto: true, quantidade: 3 },
    { id: 2, nome: "Notebook Dell Inspiron", preco: 4500.00, temDesconto: false, quantidade: 3 },
    { id: 3, nome: "Smart TV LG 55\"", preco: 2799.00, temDesconto: true, quantidade: 5 },
    { id: 4, nome: "Fone de Ouvido Bluetooth JBL", preco: 299.99, temDesconto: false, quantidade: 2 },  //simulação de banco de dados de uma loja
    { id: 5, nome: "Câmera DSLR Canon", preco: 3200.00, temDesconto: true, quantidade: 1 },
    { id: 6, nome: "Tablet iPad Air", preco: 4199.00, temDesconto: false, quantidade: 8 },
    { id: 7, nome: "Console PlayStation 5", preco: 4699.00, temDesconto: true, quantidade: 2 },
    { id: 8, nome: "Smartwatch Apple Watch", preco: 2499.00, temDesconto: false, quantidade: 7 },
    { id: 9, nome: "Impressora HP Multifuncional", preco: 599.90, temDesconto: true, quantidade: 5 },
    { id: 10, nome: "Caixa de Som Portátil Sony", preco: 1000.00, temDesconto: false, quantidade: 3 },

];

const novosProdutos = produtos.map( produto => {   //crie uma varíavel para os novos valores, chamando "produto por produto" no array
  //crie novo array com os itens do anterior formatando os preços e dando desconto para os true
   
const novoPreco = produto.temDesconto ? produto.preco * 0.9 : produto.preco //aqui crie uma varíavel para o novo preço, que vai verificar se o produto tem desconto ou não, e ai aplicar a alteração
  // Ternário = IF / else    ?= if / : else, logo, na variável acima irá verificar se o produto tem desconto ou não "if(temDesconto === true)" senão "else" produto se mantém no mesmo preço
  return {  //crie um objeto 
     id: produto.id,
     nome: produto.nome,
     preco: novoPreco.toLocaleString('pt-br', { //essa função chamada toLocaleString serve para realizar formatações, nesse caso, alterar os preços para Real brasileiro
        style: 'currency', currency: 'BRL'
  }), 
     quantidade: produto.quantidade

  }

} ) 

console.log(novosProdutos);

/* REDUCE: reduz todos os valores do array para apenas um valor 
 - Reduz um array inteiro a um ÚNICO valor
  - Você tem acesso a 4 dados: 
     . Acumulador
     . Valor Atual
     . Posição Atual
     . Array Completo 
reduce pode somar, subtrair, dividir, multiplicar e etc... independente da operação ele irá reduzir os valores para um único*/

//reduce ex1:

/*const numeros = [1,2,3,4,5,6];

const soma = numeros.reduce( (acumulador, atual) => {
   const total = acumulador + atual;

   return total;
});

console.log(soma);*/

//reduce ex2 REAL, calculando o total do array produtos
//QUAL SERÁ O FATURAMENTO, SE VENDERMOS TODO O ESTOQUE 

const totalVendas = produtos.reduce((acumulador, produto) => {
   
    return acumulador + ( produto.preco * produto.quantidade)  //irá realizar o cálculo a partir do preço do produto vezes a quantidade disponível, de cada um dos produtos para encontrar o total

}, 0); //este "0" representa o valor inicial, é sempre bom colocá-lo para que seja determinado o início do cálculo

console.log(totalVendas.toLocaleString('pt-br', { //essa função chamada toLocaleString serve para realizar formatações, nesse caso, alterar os preços para Real brasileiro
    style: 'currency', currency: 'BRL'
}), );


/* FILTER: realizará o filtro dos valores do array que desejar, trazendo em um novo array apenas estes. 
   - Cria um novo array filtrando os valores desejados do array Original
   - Você tem acesso a 3 dados: 
     . Item por item do array
     . Posição atual do array
     . Array Completo */

// filter ex1:

/*const numeros12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pares = numeros12.filter( numero => {
    return numero % 2 === 0;
});

console.log(pares);*/

//filter ex2 REAL 
// FILTRAR SOMENTE OS PRODUTOS EM PROMOÇÃO

const promocao = produtos.filter( produto => produto.temDesconto)  
//nesse caso o FILTER agirá como um IF, avaliará se o produto tem desconto, caso tenha, irá filtrá-lo

console.log(promocao);



// no programa ao lado aprenderemos a fazer as 3 opeações em uma só função.