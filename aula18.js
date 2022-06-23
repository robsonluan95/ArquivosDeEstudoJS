const marcos=['luan','magno','zeca','cefras']
function Verificacao(){
    let nomeConvidado=document.getElementById("Nome").value;
    let QuemConvidou=document.getElementById("NomeConvite").value;
    if (QuemConvidou=='marcos'){
        let tem=marcos.includes(nomeConvidado)
        if (tem===true){document.getElementById("pode").innerText="Pode entrar sim!"
        }else{document.getElementById("pode").innerText="Desculpe,mas voce não pode entrar!"}
    }
}