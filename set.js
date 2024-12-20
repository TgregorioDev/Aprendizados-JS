/* EVENTOS DE TEMPO COM JAVASCRIPT

- setTimeout(function, tempo em milisegundos)
-> Executa uma função, depois de esperar um número específico de milisegundos

- setInterval(function, milliseconds)
-> É o mesmo que setTimeout(), mais repete a execução da função continuamente*/

/*function ativarContagem(){  //função criada no onclick do html
    document.getElementById('tempo').innerHTML = "Começou a contar!"; //ATIVA A FUNÇÃO APENAS UMA VEZ QUANDO DER O TEMPO ESPECÍFICADO
    tempo = setTimeout(function(){  
        document.getElementById('tempo').innerHTML = "Executou o setTimeout";
    }, 5000);  //para realizar a execução fo setTimeout, devemos passar a função e o tempo em milisegundos que desejar que a função aconteça
}
//o setTimeout será disparado a partir do momento que terminar o tempo que foi determinado

function pararContagem(){
   clearTimeout(tempo);
   document.getElementById('tempo').innerHTML = "Parou a contagem";
}*/

tempo = setInterval(function(){ //criará o cronometro e irá adicionar mais um a cada 1 segundo que passar, em looping
    let cronometro = document.getElementById('tempo').innerHTML;
    let soma = parseInt(cronometro) - 1;
    document.getElementById('tempo').innerHTML = soma;
}, 1000);

function pararContagem(){
    clearInterval(tempo);
    document.getElementById('tempo').innerHTML = "Parou a contagem";
}

