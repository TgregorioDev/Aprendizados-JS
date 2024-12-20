/*math é uma biblioteca que já vem no javascript por padrão 
  - pow = potência 
  - sqrt = raiz
  - ceil = teto (arredonda resultados para cima)
  - floor = chão (arredonda resultados para baixo)
  - random = numeros aleatórios entre 0 e 1 (porém seguindo a fórmula podemos declarar o min e máx de números que poderam ser tragos aleatóriamente)
    e pode se usar ceil ou floor para arredondar o numero random

  **** declarando 'Math.' você pode realizar diversas questões matemáticas diferentes, dentre elas, ex o PI
*/
//pow ex:
const calculo = Math.pow(2,5);
console.log(calculo);

//sqrt ex:
const calculo2 = Math.sqrt(125);
console.log(calculo2);

//ceil ex:
const calculo3 = Math.sqrt(125);
console.log(Math.ceil(calculo3));

//floor ex:
const calculo4 = Math.sqrt(125);
console.log(Math.floor(calculo4));

//random ex:
const calculo5 = Math.random()
console.log(calculo5);

//random declarado ex:
const calculo6 = Math.random() * (100 - 1) + 1;
console.log(calculo6);

//random declarado arredondado ex: !!!!!! DESCUBRA COMO FAZER !!!!!

const calculo7 = Math.random () * (100 - 1) + 1; 
console.log(calculo7);
