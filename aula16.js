//COMBINADO ARRAYS

const primerio=[1,2,3]
const segundo=[4,5,6]


//COMBINAR

const juntos=primerio.concat(segundo)
console.log(juntos)

//DIVIDIR
//INICIO (INDECE ,FINAL-1)
const divider=juntos.slice(0,3);
console.log(divider)


const Pnome=['L','U'];
const Pnome2=['A','N'];

nomesJuntos=Pnome.concat(Pnome2);
console.log(nomesJuntos)

NomeSolto=nomesJuntos.slice(2,4);
console.log(NomeSolto)

// Clonagem de Arrays

//Pread 

const Juntar=[...primerio,...segundo]

console.log(Juntar)

const clone=[...Juntar];
console.log(clone)

const umatres=[1,2,3];
const quatroaseis=[4,5,6]

tudo=[...umatres,'%',...quatroaseis]
console.log(tudo)


//Interando um arry(PERCORRER)

const numeros=[1,2,3,4,5,6,7,8,9,0];
for (numero in numeros){
    console.log(numero);
}

//Metodo forEach()

numeros.forEach(function(indece,valor){
    console.log(valor,'=',indece);

})

//COMBINANDO ARRAYS
const JuntosPonto=numeros.join('-');
console.log(JuntosPonto)

const SeparandoTrasso=JuntosPonto.split('-');
console.log(SeparandoTrasso)