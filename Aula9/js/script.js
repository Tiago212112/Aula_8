//mapeamento dos componentes html
const numero = document.getElementById("numero")
const btnAdd = document.getElementById("btn-add")
const contagem = document.getElementById("contagem")
const inseridos = document.getElementById("inseridos")
const btnRemove = document.getElementById("btn-remove") 
const boxResultado = document.getElementById("box-resultado")
const primeiro = document.getElementById("primeiro")
const ultimo = document.getElementById("ultimo")
const soma = document.getElementById("soma")
const maior = document.getElementById("maior")
const menor = document.getElementById("menor")
const calcular = document.getElementById("calcular")
const reiniciar = document.getElementById("reiniciar")

//Regras de negócio (lógica)
var listaNumeros = Array()
var contador = 10 

document.addEventListener("load", ()=>{
    calcular.setAttribute("disabled", "disabled")
    calcular.style.cursor = "not-llowed"
})

btnAdd.addEventListener("click", ()=>{
    if(numero.value == "") {
        alert("Insira um número!")
    } else {
        
        listaNumeros.push( Number(numero.value))
        inseridos.size = listaNumeros.length
        
        contagem.innerHTML = "Restam " + (contador - listaNumeros.length)

        if(listaNumeros.length > 0) {
            //document.getElementById("opt1").remove()
            const newOption = document.createElement("option")
            newOption.value = numero.value
            newOption.text = numero.value
            inseridos.append(newOption)
        }

          if(listaNumeros.length == 10 ) {
   calcular.removeAttribute("disabled" ,"disabled")
   calcular.style.cursor = "pointer"
   numero.style.cursor = "not-allowed"
   numero.setAttribute("readonly", "readonly")
   btnAdd.style.cursor = "not-allowed"
   btnAdd.setAttribute("disabled", "disabled")
}
        
        console.log( listaNumeros )

        numero.value = ""
        numero.focus()
    }
})


reiniciar.addEventListener("click", ()=>{
    window.location.reload()
})


console.log(listaNumeros)

