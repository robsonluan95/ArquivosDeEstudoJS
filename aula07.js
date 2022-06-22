//IF .. ELSE

//Se a hora estiver entre 60:00 até 12:00:Bom dia
//Se estiver entre 12:00 até as 18:00 :Boa noite
//caso contrario :Boa noite!

// if(condiçao){
//     codigo a ser executado
// }

let hora=Date();
console.log(hora)

if (hora>=6&& hora<12){
    console.log("Bom Dia")
}else if(hora>=12&& hora<18){
    console.log("Boa Tarde")
}else{
    console.log('Boa Noite')
}


// SWITCH CASE

let permissao='comum';//comum,gerente,diretor

switch(permissao){
    case'comum':
        console.log('Usuario Comum');
        break;  
    case 'gerente':
        console.log('Usuario Gerente');
        break;
    case 'diretor':
        console.log('Usuario Diretor');
        break
    default:
        console.log('Usuario Desconhecido');
}