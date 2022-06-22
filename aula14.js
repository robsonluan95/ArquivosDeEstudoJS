//JavaScript -Objeto Endereço


//Criar um Objeto endereco que contem:
//Rua 
//Cidade
//CEP
//exibirEndereco(endereco)

endereco();
function endereco(Rua,Cidade,Cep){
    this.Rua=Rua,
    this.Cidade=Cidade,
    this.Cep=Cep
}
const endereco2=new endereco('Rua-Joao Sobreira de Moura','São José do Belmonte',56950000)
console.log(endereco2)


console.log('FORMA 2')

let meuEndereco={
    MinhaRua: 'Joao Sobreira de Moura',
    MinhaCidade: 'São José do Belmonte',
    MeuCep: 5695000

}

function exibirEndereco(meuEndereco){
    for (let chave in meuEndereco){
        console.log(chave,meuEndereco[chave]);
    }

}
exibirEndereco(meuEndereco);



const EndercoGordo={
    RuaDele:'Gordura',
    CidadeDele:'Banha',
    CepDele:696969
}

function MostrarEnd(EndercoGordo){
    for (let chave in EndercoGordo){
        console.log(EndercoGordo[chave])
    }
}

MostrarEnd(EndercoGordo);

//EXERCICIOS 43

function exEndereco(ExRua,ExCidade,ExCep){
    this.ExRua=ExRua,
    this.ExCidade=ExCidade,
    this.ExCep=ExCep
}

let exEndereco2 = new exEndereco('A','B','C');
let exEndereco3 = new exEndereco('A','B','C');

enderecoIguais(exEndereco2,exEndereco3);
function enderecoIguais(exEndereco2,exEndereco3){
    for (let chave in exEndereco2){
        for(let chave2 in exEndereco3){
            if(chave===chave2){
                if(exEndereco2[chave]=== exEndereco3[chave2]){
                    console.log('true',exEndereco2[chave],exEndereco3[chave2])
                    break;
                }
                if(exEndereco2[chave]!= exEndereco3[chave2]){
                    console.log('False',exEndereco2[chave],exEndereco3[chave2])
                    break;
                }
            }  
        }
    }

}
console.log(exEndereco3)

//Postagem de Blog  
//