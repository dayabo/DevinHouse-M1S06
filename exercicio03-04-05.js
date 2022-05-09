function consultaEndereço(){
    let cep =document.getElementById('cep').value;
    if (cep ===""){
        alert (`Preencha o Campo`)
        return
    }
    if(cep.length !==8){
        alert(`CEP Inválido!`)
        return
    }

    url= "https://viacep.com.br/ws/" + cep + "/json/"

     fetch(url).then(function(response){
         response.json().then(function(dado){
             console.log(dado)
           exibirEndereco(dado)
         })
     })
}

function exibirEndereco(dados){
 document.getElementById('cep').value ="";
let resultado = document.getElementById("resultado");
if(dados.erro){
    alert(`Não foi possivel encontrar o CEP verifique se foi digitado corretamente!`)
}else{
    resultado.innerHTML = `
    <p> ${dados.logradouro}, ${dados.complemento} -  ${dados.bairro} -  ${dados.localidade}/${dados.uf}</p>`

}
}