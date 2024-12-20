/*métodos partem das funções e dos objetos
eles visam executar as funções estabelecidas ao objeto, visto que os objetos existem para representar coisas 'reais', e essas coisas realizam ações
é por meio dos métodos que nós declaramos essas ações dentro do código e as executamos, usando funtion, como no exemplo abaixo de "latir"
- por meio de métodos, podemos atribuir ao objeto capacidades de se comportar como estamos buscamos representar */

const cachorro = {   //não se esqueça da forma de declarar um objeto (variavel, nome, = {})
    nome:'bilu',
    raca:'shitzu',
    genero: 'macho',
    idade: 2,
    peso: 7,
    latir: function (){
        console.log('auauauauau'); //ex, o 'log' é o método do objeto 'console'
    },
};

cachorro.latir(); //forma de trazer o objeto que queremos executar, e a função estabelecida a ele