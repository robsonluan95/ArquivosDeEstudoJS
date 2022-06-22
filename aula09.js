//Escreva uma funçao que usa dois numeros e retorna o maior


let Max=maiorValor(100,9)
console.log(Max)
function maiorValor(valor1,valor2){

    if (valor1>valor2){
        return valor1;
    }
    else{
        return valor2;
    }
        
}
let Max2=maiorValor2(101,91)
console.log(Max2)
function maiorValor2(valor1,valor2){
    return valor1>valor2?valor1:valor1;
}