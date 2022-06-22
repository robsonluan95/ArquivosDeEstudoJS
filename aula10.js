//Divisivel por 3=>Fizz
//Divisivel por 5=>Buzz
//Divisivel por 3 e 5 =>fizzBuzz
//Não divisivel retona o valor
//Se for algo que não é numero ele avisa

const resultado =fizzBuzz(15);
console.log(resultado);

function fizzBuzz(entrada){
    if (typeof entrada!=='number'){
        return ('Não é valor');
    }else if(entrada%3==0 || entrada%5==0){
        if (entrada%3==0 && entrada%5==0){
            console.log('fizzBuzz')
        }else if( entrada%3==0){
            console.log('fizz')
        }else if( entrada%5==0){
            console.log('Buzz')
        }

    }else{
        console.log(entrada)
    }
}