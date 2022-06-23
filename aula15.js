//JavaScript Aula 52 Introdução a ARRAYS
/* Iremos estudar 
Add Novos elementos
Encontrar Elementeos
Remover Elementos
Dividir Arrays
Combinar Arrays*/

//01-Adicionar elementos a Um Array

const numeros=[1,2,3,2];

//Inserindo no inicio

numeros.unshift(0);
console.log(numeros)

//Inserindo no Meio

//(local,qual indece deseja deletar,oque quer add)
numeros.splice(3,0,'oi');
console.log(numeros)

//Final  
numeros.push(5);
console.log(numeros)
// numeros.splice(3,1)
// console.log(numeros)




const meusnomes=['luan']

meusnomes.unshift('Robson');
console.log(meusnomes)

meusnomes.splice(2,0,'Fernandes')
console.log(meusnomes);


meusnomes.push('Pereira');
console.log(meusnomes)

// unshift
// splice
// push

//Encontrado Elementos de tipos primitivos

let achou=numeros.indexOf('oi')
console.log(achou)

console.log(numeros[achou])

let achouUltimo=numeros.lastIndexOf(2)
console.log('Posição no array '+achouUltimo)

console.log(numeros[achouUltimo])

//MODO novo 

console.log(numeros.includes(2));



const casa=['Rua','local','Numero']

console.log(casa.indexOf('Rua'));
console.log('Tem cidade no array: '+casa.indexOf('cidade'))
console.log(casa.lastIndexOf('Numero'))
console.log('O ultimo é Barrido? '+casa.lastIndexOf('Bairro'))
console.log(casa.includes('local'))


//Como Encontrar coisas no tipo referencia

const marcas=[
    {id:1,nome:'a'},
    {id:2,nome:'b'},
    {id:3,nome:'c'},
    {id:4,nome:'d'}
]

let encontrar1=marcas.find(function(ids){
    return ids.id===2;
})

console.log(encontrar1)




const carros=[
    {id:1,nome:'Mobi'},
    {id:2,nome:'Argo'},
    {id:3,nome:'Pulse'},
    {id:4,nome:'Up'}
    
]


let luan=carros.find(function(qualCarro){
    return qualCarro.nome==='Pulse';
})

console.log(luan)

console.log('Arrow Functions')
//Arrow functions

const marcas2=[
    {id:1,Nome:'Mobi'},
    {id:2,Nome:'Argo'},
    {id:3,Nome:'Corolla'},
    {id:4,Nome:'Pulse'},
    {id:5,Nome:'Up-TSI'}
]

let CarroLuan=marcas2.find(function(marca){
    return marca.Nome==='Pulse';
})

console.log(CarroLuan)


let SegundoCarro=marcas2.find((marca)=>{
    return marca.Nome==='Corolla';
})
console.log(SegundoCarro)




const PC=[
    {valor:5000,Placa:'RX7800XT'},
    {valor:4000,Placa:'RX7700XT'},
    {valor:3000,Placa:'RX7600XT'},
    
]

let qualComprar=PC.find((comprei)=>{
    return comprei.Placa==='RX7800XT'

});

console.log(qualComprar);



const Processador=[
    {valor:3000,Ryzen:9},
    {valor:2000,Ryzen:7},
    {valor:1000,Ryzen:5},
    {valor:5000,Ryzen:3},
]

let QualProcessador=Processador.find((qual=>{
    return qual.Ryzen===9;
}))

console.log(QualProcessador)


//REMOVENDO ELEMEENTOS DE ARRAY

const NUMERAIS=[1,2,3,4,5,6,7,8,9];
NUMERAIS.push();
NUMERAIS.unshift();
NUMERAIS.splice();

//REMOVER FINAL 
console.log(`INICIAL ${NUMERAIS}`)
console.log(NUMERAIS)
console.log('REMOVENDO O FINAL ')
const ultimoNUMERIAS=NUMERAIS.pop();
console.log(ultimoNUMERIAS);
//REMOVENDO NO INICIO
console.log(NUMERAIS)
const inicioNUMERAIS=NUMERAIS.shift()
console.log(inicioNUMERAIS)

//REMOVENDO NO MEIO
console.log(NUMERAIS)
const meioNUMERAIS=NUMERAIS.splice(0,1)
console.log(meioNUMERAIS)
console.log(NUMERAIS)




//EXERCICIOS 

const CarrosC=['UP-TSI','ARGO','PULSE','MOBI','COROLLA']

//REMOVENDO O ULTIMO

let ultimoCarroC=CarrosC.pop()
console.log(ultimoCarroC)


let RemoverCarroC=CarrosC.splice(1,1)
console.log(RemoverCarroC)

let RemoverCarroC2=CarrosC.shift()

console.log(RemoverCarroC2)
let RemoverCarroCP=CarrosC.pop() 
console.log(CarrosC)



//ESVAZIANDO UM ARRY

const NUMERAIS2=[1,2,3,4,5,6,7,8,9];

//Solução 1

NUMERAIS2.length=0; 
console.log(NUMERAIS2)

//Soluçao 2
const NUMERAIS3=[1,2,3,4,5,6,7,8,9];


NUMERAIS3.splice(0,NUMERAIS3.length)
console.log(NUMERAIS3)