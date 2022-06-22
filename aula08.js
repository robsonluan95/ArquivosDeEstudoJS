//Laço e repetição for


console.log('Estrou Aprendendo');
console.log('Estrou Aprendendo');
console.log('Estrou Aprendendo');
console.log('Estrou Aprendendo');
console.log('Estrou Aprendendo');


//Em js temos 5 tipos de repetiçao
// 01 For
// 02 while
// 03 Do...while
// 04 for..In
// 05 For..of

for(let i=10; i>=0;i--){
    if (i%2==0){
        console.log('Estrou Aprendendo FOR',i);
    }
}

//While

let i=0;

while(i<=5){
    console.log('Estrou Aprendendo WHILE',i);
    i++;
}

//Laço DO WHILE
let j=0;
do{
    console.log('Digitando',j);
    j++;
}while(j<10);

//FOR IN(para propriedades de uma objetos e arrays)

const pessoa={
    nome:'Robson',
    idade:26
};
// vem do ingles e é kay-value no objeto  pessoa , nome:'Rosbon' --> key seria nome (a chave)
// e 'Robson'--> o value (o valor)
for (let chave in pessoa){
    console.log(chave,pessoa);
    //podemos acessar a propriedade deduas formas
    //Por docment 
    console.log(chave,pessoa.nome+' Docment');
    //OU
    //Por valor
    console.log(chave,pessoa['nome']+' Value')
}
//ACESSANDO ARRAY DE CORES

const cores =['vermelho','amarelo','azul','preto','branco'];
for (let indece in cores){
    console.log(cores[indece],indece,'for-in')
}

//FOR-OF

for (let cor of cores){
    console.log(cor,'for-of')
}

const carros=['Up','Uno','Mobi','Civic',];
for (let carro of carros){
    console.log(carro)
}