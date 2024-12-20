// - FOR
/* no código abaixo, a criação da variável representa a inicialização
em seguida, definimos a condição verdadeira que quando for falsa irá parar, então enquanto i for menor que 10
sempre que rodar um número, a expressão final "i++" irá adicionar mais um número ao i, então, quando i deixar de ser menor que 10, o código irá parar */

/*for(let i = 0; i < 10; i++) { 
    console.log(i);
}*/

/*for com array
funcionará da seguinte forma, o "for" irá perseguir o Array, e enquando o valor de i for menor que o tamanho do array, i irá receber mais um até ser falso.
para que isso funcione precisamos colocar no console.log, entre colchetes, a varíavel que irá percorrer o array */
/*const users = ['maria', 'aline', 'joão']

for (let i = 0; i < users.length; i++){
    console.log(users[i]);
}*/

// - FOR OF

/* for of ITERA todos os itens do array*/

/* SEMPRE VAI PERCORRER TODO O ARRAY*/

/*const users = ['joão', 'maria', 'leticia']

for (let name of users){  //vai percorrer todo o array e a cada vez que encontrar algum valor do array, este será adicionado como valor da variável
     console.log(name);
}*/

// - FOR IN
/* REALIZA O MESMO PAPEL DO FOR OF, PORÉM ITERANDO OBJETOS*/

/* const user = {
    name: 'Tiago',
    age: '19',
    street: "rua sussuapara"
}*/
/* quando quiser acessar o conteúdo dos itens do objeto, coloque no console o nome do objeto, ou do conteúdo específico. caso queira verificar os itens, coloque o nome da variável no console 
caso queira visualizar de forma mais automatizada, coloque o nome do objeto e [o nome da variável] */

/*for (let key in user){
    console.log(user[key]);
}*/

// - FOR EACH
/* percorre informação por informação do array, item por item, e apresenta a posição de cada um deles 
trazendo o item, o índice/posição (index) e o array*/

const users = [
    {name: 'rodolfo', age: 33, contact: '23434234235'},
    {name: 'paulo', age: 21, contact: '3434324234'},
    {name: 'aline', age: 40, contact: '9384273'},
    {name: 'maria', age: 12, contact: '2039385'},
]

/*no array coloque o nome do array após gerar esta função, o element é uma "arrow function" ele é como se fosse uma variável correspondente ao que há dentro do array(item, index e array) e será percorrido pelo foreach 
porém, como no vídeo vou declarar da forma antiga de se fazer um foreach, declarando a função e dentro dela, o conteúdo do array*/
/* users.forEach(function(item, index, array) {
   console.log(item);
   console.log(index);
   console.log(array); 
      
});*/
/* na vida real, o foreach é usado em situações onde é necessário descobrir algo específico dentre diversos dados
ex: verificar quem dentro desta lista seria menor de idade*/
users.forEach(function(item, index, array) {
    if(item.age < 18){
        console.log(`O cliente ${item.name}, posição ${index} é menor de idade`) // `` são template strings, pode atribuir qualquer tipo de variável, e o ${} é usado para atribuir no texto a variável que deseja apresentar
    }
});