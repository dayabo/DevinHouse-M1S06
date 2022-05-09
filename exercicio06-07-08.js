let uf =document.getElementById('uf');
let cidade =document.getElementById('cidade');
let rua =document.getElementById('rua');
   
function consultaEndereco(){
    let uf =document.getElementById('uf').value;
    let cidade =document.getElementById('cidade').value;
    let rua =document.getElementById('rua').value;
       
    
    if (!uf){
        alert (`Preencha o campo UF`)
        return
    }
    if(uf.length !==2){
        alert(`UF Inválido!`)
        return
    }
    if (!cidade){
        alert (`Preencha o campo Cidade`)
        return
    }
    if (!rua){
        alert (`Preencha o campo Rua`)
        return
    }
    url= `https://viacep.com.br/ws/${uf}/${cidade}/${rua}/json/`

     fetch(url).then(function(response){
         response.json().then(function(dado){
             console.log(dado)
             exibirEndereco(dado)
         })
     })
}

function exibirEndereco(dados){
    document.getElementById("corpoLista").innerHTML=``;
    uf.value=""
    cidade.value=""
    rua.value=""
    if(dados.erro){
        alert(`Não foi possivel encontrar!`)
    }else{
        if(dados[0] == undefined){
            
        resultado.innerHTML = `
        <p>Nenhum registro encontrado!</p>`
        }else{

            const item = document.createElement("tr");
          
            item.innerHTML = `
             <td style="padding:5px ;">${dados[0].cep}</td>
              <td style="padding:5px ;">${dados[0].logradouro}</td>
              <td style="padding:5px ;">${dados[0].complemento}</td>
              <td style="padding:5px ;">${dados[0].bairro}</td>
              <td style="padding:5px ;">${dados[0].localidade}</td>
              <td style="padding:5px ;">${dados[0].uf}</td>
              <td style="padding:5px ;">${dados[0].ddd}</td>
            `;
            document.getElementById("corpoLista").appendChild(item);
            resultado.innerHTML = ``
        }
    }
    }