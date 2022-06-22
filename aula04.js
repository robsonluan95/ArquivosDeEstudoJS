//Aula 04 ARRAYS - é um conjunto de dados que pode ser acessadopor um indexe

let familia=['luan',26,'tata',64,'raimundo',73,'joao',12,'patricia',43]
console.log(familia[2]);
console.log(familia.length)

let nomeDoColega=['Magno',26,'Belmontes']

//FUNÇÂO =========================//

//para nomer uma funçao é colocar um verbo+substativo trocaCor
let corSite='azul'
console.log(corSite);

console.log('Cor do site atentes da função')


function resetaCor(){
    corSite="vermelho";

};
//mudou a cor da variavel dentro da funçao

resetaCor();

console.log(corSite)
console.log('Cor do site apos a função resetaCor')


function resetaCor2(cor,tonalidade){
    corSite=cor+" "+tonalidade;
    
};


resetaCor2("amarelo","escuro");
console.log(corSite);
console.log('Cor do site apos a função resetaCor2');


// Tipos de funçao 
//01 funçao que realiza uma tarefa e nao devolve nada 

function dizerNome(){
    console.log('Luan');
};

dizerNome();

function multiplicarPorDois(valor){
    return valor*2;
}

console.log(multiplicarPorDois(6))

let resultado=multiplicarPorDois(10)

console.log(resultado)





