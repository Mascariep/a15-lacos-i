/*
# Exercício 1
Utilizando o laço `while`, escreva um código que recebe um `prompt` perguntando se a pessoa deseja comer mais coxinhas.
“S” deve representar “sim”, e “N” deve representar “não”. Crie também uma `let conta` para guardar o valor total.

Toda vez que a resposta for **sim**, o laço deve se repetir, e devemos adicionar R$2.50 ao valor total. 
Quando a resposta não for **sim**, devemos imprimir o valor total da conta.
*/

let coxinha = 2.50
let contaTotal = 0
let mais = (prompt("Deseja comer alguma coxinha? (S para SIM ; N para NÃO)").toUpperCase())

while (mais !== "N") {
    if(mais === "S") {
        contaTotal = contaTotal + coxinha
        mais = (prompt("Deseja comer alguma coxinha? (S para SIM ; N para NÃO)").toUpperCase())
    } else { 
        alert("Insira um caractere válido")
        mais = (prompt("Deseja comer alguma coxinha? (S para SIM ; N para NÃO)").toUpperCase())
    }
}
console.log(`Valor total a pagar é de: R$ ${contaTotal}`)