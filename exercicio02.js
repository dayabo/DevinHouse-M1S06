var operador = document.getElementById("operadores");
let num1= (document.getElementById("input1"));
let num2= (document.getElementById("input2"));
let div = document.querySelector(".resulti")
let res = 0
const paragrafo = document.createElement("p")
     
function calcular(){
    if(num1.value && num2.value){
switch(operador.value){
    case "+":
       res = Number(num1.value) + Number(num2.value)
     paragrafo.innerHTML =`
      <p>Resultado da soma: ${res}</>
      `
       div.insertAdjacentElement("beforeend",paragrafo)
        num1.value =""
        num2.value =""
break;
case "-":
    res = Number(num1.value) - Number(num2.value)
    paragrafo.innerHTML =`
    <p>Resultado da Subtração:  ${res}</>
    `
     div.insertAdjacentElement("beforeend",paragrafo)
     num1.value =""
     num2.value =""
break;
case "*":
   
    res = Number(num1.value) * Number(num2.value)
    paragrafo.innerHTML =`
    <p>Resultado da Multiplicação:  ${res}</>
    `
     div.insertAdjacentElement("beforeend",paragrafo)
     num1.value =""
     num2.value =""
break;
case "/":

    res = Number(num1.value) / Number(num2.value)
    paragrafo.innerHTML =`
    <p>Resultado da Divisão: ${res}</>
    `
     div.insertAdjacentElement("beforeend",paragrafo)
     num1.value =""
     num2.value =""
break;

}
}else{
    alert("Todos os campos devem estar preenchido verefique !!!")  
}
}