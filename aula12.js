//FACTORY FUNCTIONS

const celular={
    marcaCelular:'ASUS',
    tamanhoTela:{
        vertical:155,
        horizontal:75
    },
    capacidadeBateria:5000,
    ligar:function(){
        console.log('Fazendo ligação')
    }
}

//CRIANDO UMA FACTORY FUNCTIONS

const celular1=criarCelular('Samsung',2100,6.7,4500);

function criarCelular(marcaCelular,valorCelular,tamanhoTelaCelular,bateriaCelular){
    return{
        marcaCelular,
        valorCelular,
        tamanhoTelaCelular,
        bateriaCelular,
        ligar(){console.log('Ligando...')}

    }
    
}
console.log(celular1)


const note1=criarNotebook('lenovo','i5','mx150',16.5,'cinza')


function criarNotebook(marcaNote,processadorNote,placaDeVideoNote,telaNote,corNote){
    return{
        marcaNote,
        processadorNote,
        placaDeVideoNote,
        telaNote,
        corNote,
    }
}

console.log(note1)

//Constructor Function

//Pascal Case-UmDoisTresQuatro

function Celular(marcaCelular,tamanhoTela,capacidadeBateria){
    this.marcaCelular=marcaCelular,
    this.tamanhoTela=tamanhoTela,
    this.capacidadeBateria=capacidadeBateria
    this.ligar=function(){
        console.log('Fazendo Ligação...')
    }

}

const celularNovo= new Celular('Nokia',1.5,10000);
console.log(celularNovo)




function NoteBook (marcaNote,processadorNote,placaDeVideoNote,telaNote,corNote){
    this.marcaNote=marcaNote,
    this.processadorNote=processadorNote,
    this.placaDeVideoNote=placaDeVideoNote,
    this.telaNote=telaNote,
    this.corNote=corNote
    this.render=function(){
        console.log('RENDERIZANDO...')
    }
}

const NovoNoteBook = new NoteBook('lenovo','i5','mx150',16.5,'cinza')
console.log(NovoNoteBook)

//JS é totalmente Dinamico a troca de coisas dentro de um objeto EX:

const fone={
    volume:50,
    cabo:1.5
}

fone.cor='preto';
fone.escutarMusica=function(){
    console.log(escutando)
}
delete fone.escutarMusica;
console.log(fone)

//CLONANDO OBJETOS

let Televisao={
    MarcaTV:'Panassonic',
    polegadaTV:32,
    CorTv:'Preta'
}

const NovaTv = Object.assign({Fio:5},Televisao)
console.log(NovaTv)



const CarroDeLuan={
    MarcaCar:"FIAT",
    ModeloCar:'MOBI',
    AnoCar:2023,
    CorCar:'Roxo'
}
let CarroDeLuan2=Object.assign({valor:65000},CarroDeLuan)
console.log(CarroDeLuan2)


function CarroTop(MarcaCarTop,ModeloCarTop,AnoCarTop,CorCarTop){
    this.MarcaCarTop=MarcaCarTop,
    this.ModeloCarTop=ModeloCarTop,
    this.AnoCarTop=AnoCarTop,
    this.CorCarTop=CorCarTop
}


const CarroMelhor = new CarroTop('Honda','Civic',2024,'Preto')
console.log(CarroMelhor)

const CarroBasico = new CarroTop('Fiat','Mobi',2023,'Roxo')
console.log(CarroBasico)




function Computador(Processador,PlacaDeVideo,MemoriaRam,Ssd){
    this.Processador=Processador,
    this.PlacaDeVideo=PlacaDeVideo,
    this.MemoriaRam=MemoriaRam,
    this.Ssd=Ssd
}

const NovoComputador=new Computador('R9 7800X','RX 7950XT','128GB','4Tb')
let NovoComputador2=Object.assign({HD:'10tb'},NovoComputador)
console.log(NovoComputador2)