//Operadores logicos


//operadores Aritimeticos(matematicos)
//operadores de Atribuição
//operadores de Comparaçao
//operadores Logicos
//operadores bitwise

//ARITIMETICOS

let salario =100;

// no JS pode se usar +,*,-,/,**

console.log(salario+salario);
console.log(salario*salario);
console.log(salario-salario);
console.log(salario/salario);
console.log(salario**salario);


//TEMOS TAMBEM OS ++ -- de decremeto e incremento

let idade=18;
//para que seja feita o incremeto ou decremento enquanto tana linha tem que o colocar antes das variavel
console.log(++idade);
console.log(-- idade);
console.log(idade)

//Operadores Atribuição 

let valorTecladoGamer=100;
valorTecladoGamer+=valorTecladoGamer// valorTecladoGamer=valorTecladoGamer+valorTecladoGamer
console.log(valorTecladoGamer);
//Operadores de igualdade
//01 operadores estrita comparando os tipos
//Nesso modo ele ignora os valores e compara os tipos (nesse caso os dois sao number)
console.log(1===1);
//Nesse caso um 1 é number e o '1' é string
console.log(1==='1');

//Igualdade solta
//Nesse modo ele ignora o tipo e olha os valores, então aqui os dois sao number
console.log(1==1);

//Caso coloque os tipos diferente ele converte para que fiquem iguais
console.log('1'==1);

//entao sempre deve ser usado 1===1 com 3 iguais

// Operador TERNARIO

//Tem um cliente , +100 compras é premium
let pontos=100;
            //se pontos>100 entao ele vai ser premiun senão comum
let tipo=pontos>100?'premium':'comum';
console.log(tipo)


//OPERADORES LOGICOS 

//operadore logico e (&&)
//Ele retorna TRUE se os dois operandos forem true
console.log(true&&true);
console.log(true&&false);

let idadeM=true;
let carteiraDeTrabalhoM=true;
let aptoV=idadeM && carteiraDeTrabalhoM;
console.log('aprovado:'+aptoV);


let idadeP=1;
let carteiraDeTrabalho=true;
if (idadeP>=18 && carteiraDeTrabalho===true){
    let vaga=true;
    console.log('Pode aplicar '+ vaga)


}else{
    let vaga=false
    console.log('nao aplicado '+vaga)

}

//operador logico ou (||)
// ele retorna true se um dos operandos forem true
ensinoFaculdade=true;
ensinoCurso=false;
vagaAprovado=ensinoFaculdade||ensinoCurso;
console.log('Tem conhecimento:'+vagaAprovado)



ensino='Não tem'
let aluno=ensino

if (aluno==='curso' || aluno==='faculdade'){
    let vagaP=true;
    console.log('apto '+vagaP);
}

//Operador NOT (!)
let candidatoRecusado = !vagaAprovado;

console.log(candidatoRecusado);

// RESULTADO DE COMPARAÇÃO LOGÍCA(COMPARAÇÃO NÃO BOLEANA)

//Falsy
// São todos os valores que sao undefined,null,0,false,'',NaN(são no caso valores vazios)


//Truthy
//São todos os outros valores

let corPersonalizada='vermelho';
let corPadrao='azul';
let corPerfil=corPadrao||corPersonalizada;
console.log(corPerfil);

