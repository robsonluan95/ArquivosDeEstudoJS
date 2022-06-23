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
// Criar Um Objeto de postagemde blog que vaiconter as seguintes propriedades

//Postagem
/*
Titulo
Mensagem
Autor
Vizualizaçoes
Comentarios
    (autor,Mensagem)
estarAovivo
*/



function Postagem(titulo,Mensagem,Autor,Vizualizacoes,Comentarios,estarAoVivo){
    this.titulo=titulo,
    this.Mensagem=Mensagem,
    this.Autor=Autor,
    this.Vizualizacoes=0,
    this.Comentarios=Comentarios,
    this.estarAoVivo="TRUE"
}

Postagem2=new Postagem('MEU TITULO','Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mim que vai caçá sua turmis!Mé faiz elementum girarzis, nisi eros vermeio.Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.Delegadis gente finis, bibendum egestas augue arcu ut est.','Robson',15,'Não Gostei me Ofende',88)

console.log(Postagem2)


//CIRANDO UM ARRAY DE OBJESTOS DE FAIXA DE PREÇO
//1 opção
let faixas=[
    {tooltlip:'Até R$700',minimo:0,maximo:700},
    {tooltlip:'De R$700 a R$1000', minimo:700,maximo:1000},
    {tooltlip: 'De R$1000 ou mais',minimo:1000,maximo:99999999}
]

//2 opção (FACTORY FUNCTION)

function criaFaixa(tooltip,minimo,maximo) {
    return{
        tooltip,
        minimo,
        maximo
    }
}

let faixas2=[
    criaFaixa('a',1,100),
    criaFaixa('b',100,1000),
    criaFaixa('c',1000,5000)
]

//TERCEIRA OPÇAO(CONSTRUCTOR FUNCTION)
function FaixaPreco(tooltip,minimo,maximo){
    this.tooltip=tooltip,
    this.minimo=minimo,
    this.maximo=maximo
}

let faixas3=[
    new FaixaPreco('D',10,20),
    new FaixaPreco('E',20,30),
    new FaixaPreco('F',30,50)
];
 
console.log(faixas);
console.log(faixas2);
console.log(faixas3);