//Velecidade Maxima de ate 70km
// A cada 5km a cimado limite ganha 1 ponto na carteira
//Caso pontos maior que 12 carteira suspendida

verrificarVelocidade(180);

function verrificarVelocidade(velocidade){
    if (velocidade>70){
        let pontos;
        ponto=Math.floor(((velocidade-70)/5));
        if (ponto>=12){
            console.log('Habilitação Perdida');
        }
        console.log(ponto)
    }
}

//Receba um valor verifique se ele é par ou impar

valor(5);
function valor(n){
    for (let i=0; i<=n; i++ ){
        if(i%2==0){
            console.log(i,'PAR')
        }else{
            console.log(i,'IMPAR')
        }
    }

}

// Criar ummetodo para ler propriedades de umebjeto
//e exivir somente as propriedades do tipo string que estao nesse objeto

const filme={
    nome:'vingadore',
    ano:2018,
    diretor:'Robson',
    personagem:'Thor'
    //PROPRIEDADE:OBJETO
}

mostraString(filme);

function mostraString(objeto){
    for ( propriedade in objeto){
        if (typeof  objeto[propriedade]==='string'){
            console.log(propriedade,objeto[propriedade]);
        }
    }
}

// CRIAR FUNÇAO DE SOMA QUE RETORNA A SOMADE TODOS OSMULTIPLOS DE 3 E 5

//MULTIPLOS DE 3 = 3,6,9
//MULTIPLOS DE 5 = 5,10

somar(10);
function somar(limite){
    let resul=0;
    for(i=0; i<=limite;i++){
        if (i%3===0||i%5===0){
            resul+=i;
        }
    }
    console.log(resul);

}

console.log('MINI-PROJETO MEDIA DE NOTA ESCOLAR')
//EXECICIOS fazer um projeto que faça media escolar por um array

const array=[70,80,70]

let numArray=(array.length);

mediaDoAluno(array);

function mediaDoAluno(){
    let somaNotas=0;
    
    for (i=0;i<numArray;i++){
        somaNotas+=array[i];
    }
    console.log('valor da minha '+Math.floor(somaNotas/numArray))
}

//Fomula 2

const arrayNota=[70,70,90];

console.log(valorNota(arrayNota));

function mediaDoAluno2(arrayNota){
    let somaNotas2=0;
    for (let novanota of arrayNota){
        somaNotas2 += novanota;
    }
    let media=(somaNotas2/(arrayNota.length));
    return Math.floor(media)
}
function valorNota(notas){
    let media=mediaDoAluno2(notas)
    if (media<59){
        return 'F'
    }
    if (media<69){
        return 'D'
    }
    if (media<79){
        return 'C'
    }
    if (media<89){
        return 'B'
    }
    if (media<=100){
        return 'A'
    }

}


// 

exibirAsteriscos(5);

function exibirAsteriscos(linhas){
    for (i=0;i<linhas;i++){
        let padrao='';
        for (j=0;j<i;j++){
            padrao+='*'
        }
        console.log(padrao)
    }
        
}

// Numeros Primos

exibirNprimos(15);

function exibirNprimos(limitePrimo){
    for (let numeroPrimo=2; numeroPrimo <=limitePrimo; ++numeroPrimo){
        let ehPrimo=true;
        for (let divisor=2; divisor<numeroPrimo; divisor++){
            if (numeroPrimo%divisor===0){
                ehPrimo=false;
                break;
            }
        }
        if (ehPrimo){
            console.log(numeroPrimo);
        }

    }
}


//Numeros Primos

funcaoDePrimos(5);

function funcaoDePrimos(MaxNprimo){
    for (let i=2; i<=MaxNprimo; i++){
        let ehPrimo=true;
        for (let j=2;j<i;j++){
            if (i%j===0){
                ehPrimo=false;
                break
            }
        }
        if(ehPrimo){
            console.log(i)
        }
    }

}