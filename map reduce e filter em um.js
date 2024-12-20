/* aqui realizaremos a 3 operações em apenas uma!!!! */

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

//SIMULAÇÃO, ADICIONAR MAIS 10 PRODUTOS EM CADA E FILTRAR SOMENTE OS QUE POSSUEM DESCONTO, E AO FINAL TRAZER O TOTAL DE FATURAMENTO

//ex REAL:

const faturamentoTotal = produtos.map(produto => {
    return {...produto, quantidade: produto.quantidade + 10}    //esses 3 pontos irão trazer tudo o que possuimos de produto, sem precisar escrever um por um. assim, basta após a vírgula declarar o que deseja mudar.
}).filter( produto => produto.temDesconto).reduce((acumulador, produto) => acumulador + (produto.quantidade * produto.preco), 0); //"plugando" ao final da função o FILTER, fará com que ao adicionar os 10 ao estoque, já seja realizado o filtro, e consequentemente adicionando o REDUCE ele já trará o valor final
//o resultado do primeiro sempre puxará o segundo e assim por diante
console.log(faturamentoTotal);



